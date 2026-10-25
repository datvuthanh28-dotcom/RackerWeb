# tools/extract_all_113_sites.ps1
$rawJson = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themes = $rawJson | ConvertFrom-Json

$sitesDir = "d:\dvweb\sites"
$report = @()

foreach ($t in $themes) {
    $id = $t.id
    $code = $t.code
    $name = $t.name
    $cat = $t.category
    $dir = Join-Path $sitesDir $id
    $indexFile = Join-Path $dir "index.html"
    $cssFile = Join-Path $dir "css\style.css"
    $jsFile = Join-Path $dir "js\app.js"
    
    $hasIndex = Test-Path $indexFile
    $hasCss = Test-Path $cssFile
    $hasJs = Test-Path $jsFile
    
    $fileCount = 0
    if (Test-Path $dir) {
        $fileCount = (Get-ChildItem -Path $dir -Recurse -File).Count
    }
    
    $h1 = ""
    $h2 = ""
    $cardCount = 0
    $isEmptyH1 = $false
    $isEmptyGrid = $false
    $unreplacedTokens = 0
    $isCustom = $false
    
    if ($hasIndex) {
        $html = [System.IO.File]::ReadAllText($indexFile, [System.Text.Encoding]::UTF8)
        if ($html -match '<h1>(.*?)<\/h1>') { $h1 = $matches[1].Trim() }
        if ($html -match '<h2>(.*?)<\/h2>') { $h2 = $matches[1].Trim() }
        
        $cards = [regex]::Matches($html, 'class="(?:card|car-card|flower-card|product-card|item-card)')
        $cardCount = $cards.Count
        
        if ([string]::IsNullOrWhiteSpace($h1)) { $isEmptyH1 = $true }
        if ($cardCount -eq 0 -and $fileCount -lt 15) { $isEmptyGrid = $true }
        
        $tokens = [regex]::Matches($html, '\{\{[A-Z0-9_]+\}\}')
        $unreplacedTokens = $tokens.Count
    }
    
    $jsSize = 0
    if ($hasJs) {
        $jsSize = (Get-Item $jsFile).Length
        if ($jsSize -gt 2000 -or $fileCount -ge 15) {
            $isCustom = $true
        }
    }
    
    $previewPath = "d:\dvweb\assets\previews\$id.webp"
    $hasPreview = Test-Path $previewPath
    if (-not $hasPreview) {
        $previewPath = "d:\dvweb\assets\previews\$id.jpg"
        $hasPreview = Test-Path $previewPath
    }
    
    $statusType = "Generic-4Cards"
    if ($isCustom) {
        $statusType = "Customized-Rich"
    } elseif ($isEmptyH1 -or $isEmptyGrid) {
        $statusType = "Broken-EmptyShell"
    }
    
    $report += [PSCustomObject]@{
        Id = $id
        Code = $code
        Name = $name
        Category = $cat
        FileCount = $fileCount
        StatusType = $statusType
        IsEmptyH1 = $isEmptyH1
        IsEmptyGrid = $isEmptyGrid
        CardCount = $cardCount
        H1 = $h1
        H2 = $h2
        JsSize = $jsSize
        HasPreview = $hasPreview
    }
}

$report | Export-Csv -Path "d:\dvweb\reports\full_113_sites_status.csv" -NoTypeInformation -Encoding UTF8

Write-Host "Total processed: $($report.Count)"
$byStatus = $report | Group-Object StatusType
foreach ($s in $byStatus) {
    Write-Host "  $($s.Name): $($s.Count)"
}
