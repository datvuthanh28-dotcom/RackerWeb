# tools/theme-discovery/inspect_detail.ps1
$detail = Get-Content -Path "scratch_detail_pet.html" -Raw -Encoding UTF8

Write-Host "=== DEMO AND ACTION LINKS IN DETAIL PAGE ==="
$matches = [regex]::Matches($detail, '<a[^>]+href=["'']([^"'']+)["''][^>]*>(.*?)</a>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
foreach ($m in $matches) {
    $href = $m.Groups[1].Value
    $text = ($m.Groups[2].Value -replace '<[^>]+>', '').Trim()
    if ($href -match 'demo' -or $text -match 'demo|xem' -or $m.Value -match 'target="_blank"') {
        Write-Host "LINK: $href | TEXT: $text"
    }
}

Write-Host "`n=== BUTTONS AND INPUTS ==="
$btnMatches = [regex]::Matches($detail, '<button[^>]*>(.*?)</button>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
foreach ($b in $btnMatches) {
    Write-Host "BUTTON: $($b.Value)"
}
