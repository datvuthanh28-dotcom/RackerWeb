# tools/theme-discovery/inspect_cards.ps1
$html = Get-Content -Path "scratch_sikido.html" -Raw -Encoding UTF8

$index = $html.IndexOf("demo/thuc-an-cho-thu-cung")
if ($index -ge 0) {
    $start = [Math]::Max(0, $index - 500)
    $len = [Math]::Min($html.Length - $start, 1500)
    Write-Host "Snippet around demo/thuc-an-cho-thu-cung:"
    Write-Host $html.Substring($start, $len)
} else {
    Write-Host "Not found"
}
