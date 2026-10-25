# tools/theme-discovery/crawl_catalog.ps1
# Pure ASCII PowerShell script to discover all themes from themes.sikidodemo.com

$ErrorActionPreference = "Continue"

$baseUrl = "https://themes.sikidodemo.com"
$allThemes = @{}
$categoryMapping = @{}

# Load categories from categories.json
$catJsonRaw = [System.IO.File]::ReadAllText("d:/dvweb/data/categories.json", [System.Text.Encoding]::UTF8)
$categories = $catJsonRaw | ConvertFrom-Json

Write-Host ">>> Loaded $($categories.Count) categories."

Write-Host "`n>>> STEP 1: Scanning categories to map themes..."
foreach ($cat in $categories) {
    $catSlug = $cat.slug
    $catName = $cat.name
    $catUrl = "$baseUrl/$catSlug"
    $tempFile = "d:/dvweb/scratch_cat.html"
    
    & C:\Windows\System32\curl.exe -s -L "$catUrl" -o "$tempFile"
    if (Test-Path $tempFile) {
        $catHtml = [System.IO.File]::ReadAllText($tempFile, [System.Text.Encoding]::UTF8)
        $matches = [regex]::Matches($catHtml, 'href="demo/([^"]+)"')
        $count = 0
        foreach ($m in $matches) {
            $slug = $m.Groups[1].Value.Trim()
            if (-not $categoryMapping.ContainsKey($slug)) {
                $categoryMapping[$slug] = $catName
                $count++
            }
        }
        Write-Host "Category $catName ($catSlug): found $count themes"
        Remove-Item $tempFile -ErrorAction SilentlyContinue
    }
}

Write-Host "`n>>> STEP 2: Scanning all 10 pages of san-pham..."
for ($page = 1; $page -le 10; $page++) {
    $pageUrl = "$baseUrl/san-pham?page=$page"
    $pageFile = "d:/dvweb/scratch_page_$page.html"
    Write-Host "Fetching Page $page : $pageUrl"
    & C:\Windows\System32\curl.exe -s -L "$pageUrl" -o "$pageFile"
    
    if (Test-Path $pageFile) {
        $html = [System.IO.File]::ReadAllText($pageFile, [System.Text.Encoding]::UTF8)
        
        # Split or match each product item
        $chunks = $html -split '<div class="item product-item'
        Write-Host "  Page $page has $($chunks.Length - 1) items"
        
        for ($i = 1; $i -lt $chunks.Length; $i++) {
            $chunk = $chunks[$i]
            
            # Slug
            $slugMatch = [regex]::Match($chunk, 'href="demo/([^"]+)"')
            if (-not $slugMatch.Success) { continue }
            $slug = $slugMatch.Groups[1].Value.Trim()
            
            # Image
            $imgMatch = [regex]::Match($chunk, '<img[^>]+src="([^"]+)"')
            $origImg = ""
            if ($imgMatch.Success) {
                $src = $imgMatch.Groups[1].Value.Trim()
                if ($src.StartsWith("http")) {
                    $origImg = $src
                } else {
                    $origImg = "$baseUrl/" + $src.TrimStart('/')
                }
            }
            
            # Title & Code
            # Pattern: title="..." or #MS...
            $titleMatch = [regex]::Match($chunk, 'title="([^"]+)"')
            $rawTitle = ""
            if ($titleMatch.Success) {
                $rawTitle = [System.Net.WebUtility]::HtmlDecode($titleMatch.Groups[1].Value)
            }
            
            $code = ""
            $name = $rawTitle
            if ($rawTitle -match '#([A-Za-z0-9_-]+)\s*-\s*(.+)') {
                $code = $Matches[1].Trim()
                $name = $Matches[2].Trim()
            }
            
            # Price
            $priceMatch = [regex]::Match($chunk, '<span class="product-item-price">([^<]+)</span>')
            $priceStr = if ($priceMatch.Success) { $priceMatch.Groups[1].Value.Trim() } else { "Lien he" }
            $priceNum = $null
            if ($priceStr -match '([\d\.,]+)') {
                $cleaned = $Matches[1] -replace '[\.,]', ''
                if ($cleaned -match '^\d+$') {
                    $priceNum = [int64]$cleaned
                }
            }
            
            # Category
            $category = if ($categoryMapping.ContainsKey($slug)) { $categoryMapping[$slug] } else { "Khac" }
            
            if (-not $allThemes.ContainsKey($slug)) {
                $allThemes[$slug] = @{
                    id = $slug
                    code = $code
                    name = $name
                    category = $category
                    price = $priceNum
                    priceFormatted = $priceStr
                    listingUrl = "$baseUrl/$slug"
                    demoViewerUrl = "$baseUrl/demo/$slug"
                    originalImage = $origImg
                    demoUrl = ""
                    accessStatus = "unchecked"
                    pages = @()
                }
            }
        }
        Remove-Item $pageFile -ErrorAction SilentlyContinue
    }
}

Write-Host "`n>>> Total unique themes discovered: $($allThemes.Count)"

$themeList = @($allThemes.Values)
$json = $themeList | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("d:/dvweb/data_discovered_themes.json", $json, [System.Text.Encoding]::UTF8)
Write-Host "Saved preliminary discovered themes to d:/dvweb/data_discovered_themes.json"
