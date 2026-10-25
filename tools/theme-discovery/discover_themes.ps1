# tools/theme-discovery/discover_themes.ps1
# Discovers themes, categories, and demo links from https://themes.sikidodemo.com/

$html = Get-Content -Path "scratch_sikido.html" -Raw -Encoding UTF8

Write-Host "Analyzing scratch_sikido.html..."

# Extract all links
$hrefMatches = [regex]::Matches($html, 'href=["'']([^"'']+)["'']')
$hrefs = @()
foreach ($m in $hrefMatches) {
    $hrefs += $m.Groups[1].Value
}

Write-Host "Total links found: $($hrefs.Count)"
$cleanHrefs = $hrefs | Where-Object { 
    $_ -notmatch '\.(css|js|png|jpg|jpeg|ico|svg|gif|woff|woff2|ttf)($|\?)' -and
    $_ -notmatch '^#' -and
    $_ -ne 'javascript:;' -and
    $_ -ne ''
} | Select-Object -Unique

Write-Host "Interesting URLs:"
$cleanHrefs | ForEach-Object { Write-Host " - $_" }
