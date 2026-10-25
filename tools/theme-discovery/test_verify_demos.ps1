# tools/theme-discovery/test_verify_demos.ps1
$jsonRaw = [System.IO.File]::ReadAllText("d:/dvweb/data_discovered_themes.json", [System.Text.Encoding]::UTF8)
$themes = $jsonRaw | ConvertFrom-Json

Write-Host "Testing first 5 themes..."
for ($i = 0; $i -lt 5; $i++) {
    $t = $themes[$i]
    $viewerUrl = $t.demoViewerUrl
    Write-Host "Fetching viewer: $viewerUrl"
    $html = & C:\Windows\System32\curl.exe -s -L "$viewerUrl"
    $frameMatch = [regex]::Match($html, '<iframe[^>]+src="([^"]+)"')
    if ($frameMatch.Success) {
        $demoUrl = $frameMatch.Groups[1].Value.Trim()
        Write-Host "  -> Iframe Src: $demoUrl"
        $status = & C:\Windows\System32\curl.exe -s -L -o NUL -w "%{http_code}" "$demoUrl"
        Write-Host "  -> Status: $status"
    } else {
        Write-Host "  -> No iframe found"
    }
}
