# tools/audit_diagnostics.ps1 (Pure ASCII to ensure PS 5.1 compatibility)
$results = @()
$rawJson = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themesJson = $rawJson | ConvertFrom-Json
$themeDict = @{}
foreach ($t in $themesJson) {
    $themeDict[$t.id] = $t
}

Get-ChildItem -Path "d:\dvweb\sites" -Directory | ForEach-Object {
    $dir = $_.FullName
    $id = $_.Name
    $t = $themeDict[$id]
    $indexPath = Join-Path $dir "index.html"
    $hasIndex = Test-Path $indexPath
    $h1 = ""
    $h2 = ""
    $cardCount = 0
    $hasEmptyH1 = $false
    $hasEmptyGrid = $false
    $jsPath = Join-Path $dir "js\app.js"
    $cssPath = Join-Path $dir "css\style.css"
    $jsSize = 0
    $cssSize = 0
    $jsIdenticalToTemplate = $false
    $htmlSize = 0
    $unreplacedTokens = @()

    if ($hasIndex) {
        $html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
        $htmlSize = $html.Length
        if ($html -match '<h1>(.*?)<\/h1>') { $h1 = $matches[1].Trim() }
        if ($html -match '<h2>(.*?)<\/h2>') { $h2 = $matches[1].Trim() }
        
        $cardMatches = [regex]::Matches($html, 'class="(?:card|car-card|product-card)')
        $cardCount = $cardMatches.Count
        if ([string]::IsNullOrWhiteSpace($h1) -or $h1 -match '^\{\{.*?\}\}$') { $hasEmptyH1 = $true }
        if ($cardCount -eq 0) { $hasEmptyGrid = $true }
        
        $tokenMatches = [regex]::Matches($html, '\{\{[A-Z0-9_]+\}\}')
        foreach ($m in $tokenMatches) {
            $unreplacedTokens += $m.Value
        }
    }
    if (Test-Path $jsPath) {
        $js = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)
        $jsSize = $js.Length
        if ($js -match '0971183939' -and $js.Length -lt 1000) {
            $jsIdenticalToTemplate = $true
        }
    }
    if (Test-Path $cssPath) {
        $css = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
        $cssSize = $css.Length
    }

    $results += [PSCustomObject]@{
        Id = $id
        Code = if ($t) { $t.code } else { "N/A" }
        Name = if ($t) { $t.name } else { "N/A" }
        Category = if ($t) { $t.category } else { "N/A" }
        HasIndex = $hasIndex
        HtmlSize = $htmlSize
        H1 = $h1
        EmptyH1 = $hasEmptyH1
        CardCount = $cardCount
        EmptyGrid = $hasEmptyGrid
        JsIdentical = $jsIdenticalToTemplate
        JsSize = $jsSize
        CssSize = $cssSize
        UnreplacedTokens = ($unreplacedTokens -join "; ")
    }
}

Write-Output "TOTAL SITES AUDITED: $($results.Count)"
Write-Output "EMPTY OR TEMPLATE H1 COUNT: $(($results | Where-Object { $_.EmptyH1 }).Count)"
Write-Output "EMPTY GRID COUNT: $(($results | Where-Object { $_.EmptyGrid }).Count)"
Write-Output "IDENTICAL TEMPLATE JS COUNT: $(($results | Where-Object { $_.JsIdentical }).Count)"
Write-Output "SITES WITH UNREPLACED TOKENS: $(($results | Where-Object { $_.UnreplacedTokens.Length -gt 0 }).Count)"

$customSites = $results | Where-Object { -not $_.JsIdentical }
Write-Output "`nNON-TEMPLATE SITES COUNT: $($customSites.Count)"
foreach ($cs in $customSites) {
    Write-Output "  -> Custom Site: $($cs.Id) | Code: $($cs.Code) | Cards: $($cs.CardCount) | HtmlSize: $($cs.HtmlSize) | JsSize: $($cs.JsSize)"
}

$results | Export-Csv -Path "d:\dvweb\reports\site-audit-raw.csv" -NoTypeInformation -Encoding UTF8
Write-Output "`nExported full details to reports/site-audit-raw.csv"
