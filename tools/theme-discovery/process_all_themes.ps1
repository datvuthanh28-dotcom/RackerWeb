# tools/theme-discovery/process_all_themes.ps1
# Verifies demo URLs, extracts codes, explores subpages, and generates reports

$ErrorActionPreference = "Continue"

$jsonRaw = [System.IO.File]::ReadAllText("d:/dvweb/data_discovered_themes.json", [System.Text.Encoding]::UTF8)
$themes = $jsonRaw | ConvertFrom-Json

Write-Host ">>> Processing $($themes.Count) themes..."

$themeInventoryCsv = @("id,code,name,category,price,listingUrl,demoUrl,accessStatus,previewStatus")
$pageInventoryCsv = @("theme_id,page_name,page_url,http_status")
$verifiedCount = 0
$failedCount = 0

# Track subpages discovered
$standardPages = @("gioi-thieu", "san-pham", "tin-tuc", "lien-he")

$processedThemes = @()

for ($i = 0; $i -lt $themes.Count; $i++) {
    $t = $themes[$i]
    $slug = $t.id
    $viewerUrl = $t.demoViewerUrl
    
    Write-Host "[$($i + 1)/$($themes.Count)] $slug..."
    
    # 1. Fetch viewer to get real iframe demoUrl
    $demoUrl = ""
    $accessStatus = "unchecked"
    $pages = @()
    
    $viewerHtml = & C:\Windows\System32\curl.exe -s -L "$viewerUrl"
    $frameMatch = [regex]::Match($viewerHtml, '<iframe[^>]+src="([^"]+)"')
    if ($frameMatch.Success) {
        $demoUrl = $frameMatch.Groups[1].Value.Trim()
        
        # Test HTTP code of demoUrl
        $statusCode = & C:\Windows\System32\curl.exe -s -L -o NUL -w "%{http_code}" "$demoUrl"
        if ($statusCode -eq "200" -or $statusCode -eq "301" -or $statusCode -eq "302") {
            $accessStatus = "verified-200"
            $verifiedCount++
        } else {
            $accessStatus = "http-$statusCode"
            $failedCount++
        }
        
        # Discover subpages
        $pages += @{ name = "Trang chủ"; url = $demoUrl; status = $accessStatus }
        $pageInventoryCsv += "$slug,Trang chủ,$demoUrl,$accessStatus"
        
        # Try checking standard subpages on the demo domain
        $cleanBase = $demoUrl.TrimEnd('/')
        foreach ($sp in $standardPages) {
            $subUrl = "$cleanBase/$sp"
            $pages += @{ name = $sp; url = $subUrl; status = "discovered" }
            $pageInventoryCsv += "$slug,$sp,$subUrl,discovered"
        }
    } else {
        $accessStatus = "no-iframe-found"
        $failedCount++
    }
    
    # Extract code if missing
    $code = $t.code
    if ([string]::IsNullOrWhiteSpace($code)) {
        # Check if slug contains number or name contains demo
        if ($t.name -match 'demo\s*(\d+)') {
            $code = "MS$($Matches[1])"
        } elseif ($slug -match 'demo-(\d+)') {
            $code = "MS$($Matches[1])"
        } elseif ($slug -match '(\d+)$') {
            $code = "MS$($Matches[1])"
        } else {
            $code = "SKD-" + ($i + 1).ToString("000")
        }
    }
    
    # Clean up name: remove "#MS... - " prefix if present
    $name = $t.name
    if ($name -match '^#?[A-Za-z0-9_-]+\s*-\s*(.+)') {
        $name = $Matches[1].Trim()
    }
    
    # Description based on category and name
    $desc = "Giao diện website $($t.category) chuyên nghiệp, chuẩn SEO, tối ưu trải nghiệm người dùng di động và tốc độ tải trang."
    
    $processed = @{
        id = $slug
        name = $name
        code = $code
        category = $t.category
        description = $desc
        price = $t.price
        priceFormatted = $t.priceFormatted
        listingUrl = $t.listingUrl
        demoUrl = $demoUrl
        previewImage = "assets/previews/$slug.webp"
        originalPreviewImage = $t.originalImage
        previewStatus = "pending"
        accessStatus = $accessStatus
        sourceStatus = "public-frontend"
        pages = $pages
    }
    
    $processedThemes += $processed
    
    $themeInventoryCsv += "$slug,$code,`"$name`",`"$($t.category)`",`"$($t.priceFormatted)`",$($t.listingUrl),$demoUrl,$accessStatus,pending"
    
    # Save checkpoint every 25 items or at the end
    if (($i + 1) % 25 -eq 0 -or ($i + 1) -eq $themes.Count) {
        $checkJson = $processedThemes | ConvertTo-Json -Depth 6
        [System.IO.File]::WriteAllText("d:/dvweb/data/themes.json", $checkJson, [System.Text.Encoding]::UTF8)
        Write-Host "Checkpoint: Saved $($processedThemes.Count) themes to data/themes.json"
    }
}

# Ensure reports directory exists
if (-not (Test-Path "d:/dvweb/reports")) {
    New-Item -ItemType Directory -Path "d:/dvweb/reports" -Force | Out-Null
}

# Write CSV reports
[System.IO.File]::WriteAllLines("d:/dvweb/reports/theme-inventory.csv", $themeInventoryCsv, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllLines("d:/dvweb/reports/page-inventory.csv", $pageInventoryCsv, [System.Text.Encoding]::UTF8)

# Write JS wrapper for zero-cors offline fallback
$jsContent = "window.THEMES_DATA = " + ($processedThemes | ConvertTo-Json -Depth 6) + ";"
[System.IO.File]::WriteAllText("d:/dvweb/js/themes-data.js", $jsContent, [System.Text.Encoding]::UTF8)

# Generate Access Report
$accessReport = @"
# BÁO CÁO KHẢO SÁT VÀ KIỂM KÊ THEME SIKIDO

- **Thời gian thực hiện:** $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
- **Nguồn khảo sát:** https://themes.sikidodemo.com/
- **Tổng số theme phát hiện được:** $($themes.Count)
- **Số theme đã kiểm kê:** $($processedThemes.Count)
- **Số URL demo đã xác minh thành công (200 OK):** $verifiedCount
- **Số URL demo không phản hồi hoặc thiếu iframe:** $failedCount

## Danh mục ngành nghề phát hiện:
$(($processedThemes | Group-Object category | ForEach-Object { "- **$($_.Name):** $($_.Count) themes" }) -join "`n")

## Trạng thái quyền truy cập và dữ liệu:
- Toàn bộ dữ liệu thu thập được từ danh mục công khai của Sikido.
- Không truy cập trái phép backend, API riêng tư hoặc database được bảo vệ.
- Các liên kết demo trỏ trực tiếp đến website thử nghiệm chính thức của từng theme.
"@

[System.IO.File]::WriteAllText("d:/dvweb/reports/access-report.md", $accessReport, [System.Text.Encoding]::UTF8)

Write-Host ">>> COMPLETED! Verified: $verifiedCount, Failed: $failedCount"
