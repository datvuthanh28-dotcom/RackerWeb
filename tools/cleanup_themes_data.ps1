$jsonPath = "d:\dvweb\data\themes.json"
$jsPath = "d:\dvweb\js\themes-data.js"

$jsonRaw = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$themes = $jsonRaw | ConvertFrom-Json

$strHome = "Trang ch" + [char]0x1EE7
$strAbout = "Gi" + [char]0x1EDB + "i thi" + [char]0x1EC7 + "u"
$strProducts = "S" + [char]0x1EA3 + "n ph" + [char]0x1EA9 + "m / D" + [char]0x1ECB + "ch v" + [char]0x1EE5
$strNews = "Tin t" + [char]0x1EE9 + "c & B" + [char]0x00E0 + "i vi" + [char]0x1EBF + "t"
$strContact = "Li" + [char]0x00EA + "n h" + [char]0x1EC7 + " & B" + [char]0x00E1 + "o gi" + [char]0x00E1

$descSuffix = " chuy" + [char]0x00EA + "n nghi" + [char]0x1EC7 + "p, chu" + [char]0x1EA9 + "n SEO, thi" + [char]0x1EBF + "t k" + [char]0x1EBF + " hi" + [char]0x1EC7 + "n " + [char]0x0111 + "" + [char]0x1EA1 + "i, t" + [char]0x1ED1 + "i " + [char]0x01B0 + "u t" + [char]0x1ED1 + "c " + [char]0x0111 + "" + [char]0x1ED9 + " t" + [char]0x1EA3 + "i v" + [char]0x00E0 + " tr" + [char]0x1EA3 + "i nghi" + [char]0x1EC7 + "m tr" + [char]0x00EA + "n m" + [char]0x1ECD + "i thi" + [char]0x1EBF + "t b" + [char]0x1ECB + "."
$descPrefix = "Giao di" + [char]0x1EC7 + "n website "

foreach ($t in $themes) {
    $cat = $t.category
    $t.description = $descPrefix + $cat + $descSuffix
    
    if ($t.pages) {
        foreach ($p in $t.pages) {
            $u = $p.url.ToLower()
            if ($u -match '/gioi-thieu') {
                $p.name = $strAbout
            } elseif ($u -match '/san-pham') {
                $p.name = $strProducts
            } elseif ($u -match '/tin-tuc') {
                $p.name = $strNews
            } elseif ($u -match '/lien-he') {
                $p.name = $strContact
            } else {
                $p.name = $strHome
            }
        }
    }
}

$cleanJson = $themes | ConvertTo-Json -Depth 6
$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText($jsonPath, $cleanJson, $utf8)
$jsContent = "window.THEMES_DATA = " + $cleanJson + ";"
[System.IO.File]::WriteAllText($jsPath, $jsContent, $utf8)

Write-Host "CLEANUP SUCCESS: Formatted all themes data with pristine Unicode characters!"
