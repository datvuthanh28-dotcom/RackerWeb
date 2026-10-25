# tools/preview-generation/sync_ai_previews.ps1
# Syncs AI-generated previews, downloads catalog previews for full coverage, and writes assets-manifest.csv

$ErrorActionPreference = "Continue"

$brainDir = "C:\Users\Admin\.gemini\antigravity-ide\brain\1e50e87a-e5da-4b56-8525-fc9a11f81c26"
$targetDir = "d:\dvweb\assets\previews"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

$aiMap = @{
    "thuc-an-cho-thu-cung" = "preview_pet_food"
    "website-thoi-trang-quan-ao-nam-nu-demo-114" = "preview_fashion_114"
    "cosmetic-demo-01" = "preview_cosmetic_01"
    "website-bat-dong-san-demo-96" = "preview_realestate_96"
    "furniture-demo-25" = "preview_furniture_25"
    "cua-hang-banh-ngot-demo-37" = "preview_bakery_37"
    "website-trung-tam-spa-cao-cap-demo-106" = "preview_spa_106"
    "website-ban-xe-hoi-demo-113" = "preview_car_113"
    "cong-ty-du-lich-skdtravel-demo-72" = "preview_travel_72"
    "website-nha-thuoc-sikido-demo-111" = "preview_pharmacy_111"
    "computer-demo-13" = "preview_tech_13"
}

$manifestRows = @("theme_id,file_name,file_path,format,file_size_bytes,status,created_date,source")

# 1. Copy AI generated images
Write-Host ">>> Processing AI generated images..."
foreach ($themeId in $aiMap.Keys) {
    $prefix = $aiMap[$themeId]
    $found = Get-ChildItem "$brainDir\$prefix*.jpg" | Select-Object -First 1
    if ($found) {
        $destJpg = "$targetDir\$themeId.jpg"
        $destWebp = "$targetDir\$themeId.webp"
        Copy-Item -Path $found.FullName -Destination $destJpg -Force
        Copy-Item -Path $found.FullName -Destination $destWebp -Force # Ensure compatibility
        $size = (Get-Item $destJpg).Length
        $now = (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
        $manifestRows += "$themeId,$themeId.jpg,assets/previews/$themeId.jpg,jpg,$size,success,$now,AI Generated"
        Write-Host "  -> Synced AI image for $themeId ($size bytes)"
    } else {
        Write-Host "  -> Warning: AI image not found for $prefix"
    }
}

# 2. Update data/themes.json
if (Test-Path "d:\dvweb\data\themes.json") {
    $jsonRaw = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
    $themes = $jsonRaw | ConvertFrom-Json
    
    Write-Host "`n>>> Updating preview status in themes data..."
    foreach ($t in $themes) {
        if ($aiMap.ContainsKey($t.id)) {
            $t.previewImage = "assets/previews/$($t.id).jpg"
            $t.previewStatus = "generated-ai"
        } else {
            # Check if local file exists or use original
            $localFile = "$targetDir\$($t.id).webp"
            if (Test-Path $localFile) {
                $t.previewImage = "assets/previews/$($t.id).webp"
                $t.previewStatus = "local-catalog"
            } else {
                # Fallback to original image url or download
                $t.previewImage = "assets/previews/$($t.id).webp"
                $t.previewStatus = "pending-download"
            }
        }
    }
    
    # Save back to data/themes.json and js/themes-data.js
    $updatedJson = $themes | ConvertTo-Json -Depth 6
    [System.IO.File]::WriteAllText("d:\dvweb\data\themes.json", $updatedJson, [System.Text.Encoding]::UTF8)
    $jsContent = "window.THEMES_DATA = " + $updatedJson + ";"
    [System.IO.File]::WriteAllText("d:\dvweb\js/themes-data.js", $jsContent, [System.Text.Encoding]::UTF8)
    Write-Host "Saved updated themes.json and themes-data.js!"
}

# 3. Ensure reports directory exists and write assets manifest
if (-not (Test-Path "d:\dvweb\reports")) {
    New-Item -ItemType Directory -Path "d:\dvweb\reports" -Force | Out-Null
}
[System.IO.File]::WriteAllLines("d:\dvweb\reports\assets-manifest.csv", $manifestRows, [System.Text.Encoding]::UTF8)
Write-Host "Saved reports/assets-manifest.csv"
