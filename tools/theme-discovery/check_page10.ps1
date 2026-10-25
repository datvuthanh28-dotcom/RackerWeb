# tools/theme-discovery/check_page10.ps1
$html = Get-Content -Path "scratch_page10.html" -Raw -Encoding UTF8
$p = [regex]::Match($html, '<ul class="pagination[^"]*">(.*?)</ul>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Pagination on page 10:"
Write-Host $p.Groups[1].Value
