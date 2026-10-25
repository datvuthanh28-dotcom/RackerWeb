$files = Get-ChildItem -Path "d:\dvweb\sites", "d:\dvweb\js", "d:\dvweb\css", "d:\dvweb\data" -Recurse -Include *.html,*.js,*.css,*.json
$rootIndex = Get-Item -Path "d:\dvweb\index.html"
$files += $rootIndex
$badPatterns = @("Sáº£n", "pháº©m", "chÃ­nh", "hÃ£ng", "báº£o", "hÃ nh", "ThÃªm", "Giá»", "diá»", "chuyÃªn", "chuáº©n")

$hasError = $false

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    foreach ($p in $badPatterns) {
        if ($content.Contains($p)) {
            Write-Host "[CORRUPT FOUND in $($f.Name)]: contains pattern '$p'"
            $hasError = $true
        }
    }
}

if (-not $hasError) {
    Write-Host ">>> PERFECT: Zero corrupted Vietnamese characters found in all files!"
}
