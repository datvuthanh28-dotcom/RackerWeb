# tools/theme-discovery/inspect_sanpham.ps1
$html = Get-Content -Path "scratch_sanpham.html" -Raw -Encoding UTF8

Write-Host "Length of scratch_sanpham.html: $($html.Length)"

# Look for pagination
$paginationMatches = [regex]::Matches($html, '<ul class="pagination[^"]*">(.*?)</ul>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
if ($paginationMatches.Count -gt 0) {
    Write-Host "Pagination HTML:"
    Write-Host $paginationMatches[0].Value
} else {
    Write-Host "No pagination ul found, looking for page links..."
    $pageLinks = [regex]::Matches($html, 'href=["'']([^"'']*(?:page|trang|p=)[^"'']*)["'']')
    foreach ($p in $pageLinks) {
        Write-Host " -> $($p.Groups[1].Value)"
    }
}

# Look for theme items / product items
$itemMatches = [regex]::Matches($html, '<div class="product-item[^"]*"[^>]*>(.*?)</div>\s*</div>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Product item matches: $($itemMatches.Count)"

# Also search for all links pointing to theme details or demo
$links = [regex]::Matches($html, '<a[^>]+href=["'']([^"'']+)["''][^>]*>(.*?)</a>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
$uniqueLinks = @{}
foreach ($l in $links) {
    $href = $l.Groups[1].Value
    $text = ($l.Groups[2].Value -replace '<[^>]+>', '').Trim()
    if ($href -notmatch '\.(css|js|png|jpg|ico|svg)' -and $href -notmatch '^#' -and $href -ne 'javascript:;') {
        $uniqueLinks[$href] = $text
    }
}

Write-Host "`nAll unique content links in sanpham ($($uniqueLinks.Count)):"
foreach ($key in $uniqueLinks.Keys) {
    Write-Host " - $key : $($uniqueLinks[$key])"
}
