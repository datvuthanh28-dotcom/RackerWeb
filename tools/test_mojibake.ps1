$sample = "Giao diá»‡n website Ô tô - Xe máy chuyÃªn nghiá»‡p, chuáº©n SEO, thiáº¿t káº¿ hiá»‡n Ä‘áº¡i, tá»‘i Æ°u tá»‘c Ä‘á»™ táº£i vÃ  tráº£i nghiá»‡m trÃªn má» i thiáº¿t bá»‹."

$enc1252 = [System.Text.Encoding]::GetEncoding("ISO-8859-1")
$bytes = $enc1252.GetBytes($sample)
$fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
Write-Host "Sample:" $sample
Write-Host "Fixed ISO-8859-1:" $fixed

$encWin = [System.Text.Encoding]::GetEncoding(1252)
$bytesWin = $encWin.GetBytes($sample)
$fixedWin = [System.Text.Encoding]::UTF8.GetString($bytesWin)
Write-Host "Fixed Win1252:" $fixedWin
