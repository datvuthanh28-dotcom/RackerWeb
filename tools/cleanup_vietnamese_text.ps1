# tools/cleanup_vietnamese_text.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$jsonRaw = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themes = $jsonRaw | ConvertFrom-Json

Write-Host "Cleaning Vietnamese text across $($themes.Count) themes..."

foreach ($t in $themes) {
    # Fix description
    $cat = $t.category
    $t.description = "Giao diện website $cat chuyên nghiệp, chuẩn SEO, thiết kế hiện đại, tối ưu tốc độ tải và trải nghiệm trên mọi thiết bị."
    
    # Fix page names
    if ($t.pages) {
        foreach ($p in $t.pages) {
            if ($p.name -match 'Trang') {
                $p.name = "Trang chủ"
            } elseif ($p.name -eq 'gioi-thieu') {
                $p.name = "Giới thiệu"
            } elseif ($p.name -eq 'san-pham') {
                $p.name = "Sản phẩm / Dịch vụ"
            } elseif ($p.name -eq 'tin-tuc') {
                $p.name = "Tin tức & Bài viết"
            } elseif ($p.name -eq 'lien-he') {
                $p.name = "Liên hệ & Báo giá"
            }
        }
    }
}

$cleanJson = $themes | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText("d:\dvweb\data\themes.json", $cleanJson, [System.Text.Encoding]::UTF8)
$jsContent = "window.THEMES_DATA = " + $cleanJson + ";"
[System.IO.File]::WriteAllText("d:\dvweb\js\themes-data.js", $jsContent, [System.Text.Encoding]::UTF8)

Write-Host ">>> Vietnamese strings cleaned and saved to data/themes.json & js/themes-data.js!"
