# tools/theme-discovery/check_category.ps1
$html = Get-Content -Path "scratch_thoitrang.html" -Raw -Encoding UTF8
$items = [regex]::Matches($html, '<div class="title">\s*<p class="heading"><a[^>]+title="([^"]+)">#([^<]+)</a></p>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Found in thoi-trang category:"
foreach ($it in $items) {
    Write-Host " - Title: $($it.Groups[1].Value) | Code: $($it.Groups[2].Value)"
}
