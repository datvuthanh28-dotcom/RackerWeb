# tools/inspect_empty.ps1
$raw = Import-Csv -Path "d:\dvweb\reports\site-audit-raw.csv" -Encoding UTF8
$empty = $raw | Where-Object { $_.EmptyH1 -eq "True" -or $_.EmptyGrid -eq "True" }

Write-Host "Total empty or missing grid sites: $($empty.Count)"
foreach ($e in $empty) {
    Write-Host "$($e.Code) | $($e.Id) | $($e.Category) | $($e.Name) | H1: '$($e.H1)' | Cards: $($e.CardCount)"
}
