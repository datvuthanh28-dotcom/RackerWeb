# tools/theme-discovery/inspect_item_markup.ps1
$html = Get-Content -Path "scratch_sanpham.html" -Raw -Encoding UTF8
$idx = $html.IndexOf("website-ban-hoa-tuoi-demo-117")
if ($idx -ge 0) {
    $start = [Math]::Max(0, $idx - 400)
    $len = [Math]::Min($html.Length - $start, 1200)
    Write-Host $html.Substring($start, $len)
}
