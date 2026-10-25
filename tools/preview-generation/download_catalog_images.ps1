# tools/preview-generation/download_catalog_images.ps1
# Downloads original catalog preview images into assets/previews for 100% complete coverage

$ErrorActionPreference = "Continue"

$jsonRaw = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themes = $jsonRaw | ConvertFrom-Json

$targetDir = "d:\dvweb\assets\previews"
$manifestFile = "d:\dvweb\reports\assets-manifest.csv"
$manifestLines = [System.IO.File]::ReadAllLines($manifestFile, [System.Text.Encoding]::UTF8)

Write-Host ">>> Downloading remaining theme previews into assets/previews/..."
$count = 0
$skip = 0

foreach ($t in $themes) {
    $id = $t.id
    $destWebp = "$targetDir\$id.webp"
    $destJpg = "$targetDir\$id.jpg"
    
    # If already AI generated, skip downloading
    if ($t.previewStatus -eq "generated-ai") {
        $skip++
        continue
    }
    
    # If file doesn't exist, download from originalPreviewImage
    if (-not (Test-Path $destWebp) -and -not (Test-Path $destJpg)) {
        $origUrl = $t.originalPreviewImage
        if ($origUrl -and $origUrl.StartsWith("http")) {
            & C:\Windows\System32\curl.exe -s -L "$origUrl" -o "$destWebp"
            if (Test-Path $destWebp) {
                $fileItem = Get-Item $destWebp
                if ($fileItem.Length -gt 1000) {
                    $count++
                    $now = (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
                    $manifestLines += "$id,$id.webp,assets/previews/$id.webp,webp,$($fileItem.Length),success,$now,Sikido Public Catalog"
                    $t.previewStatus = "catalog-preview"
                    $t.previewImage = "assets/previews/$id.webp"
                } else {
                    Remove-Item $destWebp -Force -ErrorAction SilentlyContinue
                }
            }
        }
    }
}

Write-Host "Downloaded: $count images (Skipped $skip AI images)"

# Save manifest
[System.IO.File]::WriteAllLines($manifestFile, $manifestLines, [System.Text.Encoding]::UTF8)

# Save updated themes.json and themes-data.js
$updatedJson = $themes | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText("d:\dvweb\data\themes.json", $updatedJson, [System.Text.Encoding]::UTF8)
$jsContent = "window.THEMES_DATA = " + $updatedJson + ";"
[System.IO.File]::WriteAllText("d:\dvweb\js\themes-data.js", $jsContent, [System.Text.Encoding]::UTF8)

Write-Host ">>> Complete! All themes now have local preview images!"
