# 宪法文件转换工具
# 双击运行：将 .md 转为 .docx + .pdf（需要安装 Microsoft Word）
# 用法：右键 → 使用 PowerShell 运行

$ErrorActionPreference = 'Stop'
$srcDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$dstDir = $srcDir  # 输出到同一目录

$files = @(
    '教研论文写作宪法-CONSTITUTION.md',
    '学习园地-内容宪法.md',
    '学习园地-执行方案.md'
)

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = [Microsoft.Office.Interop.Word.WdAlertLevel]::wdAlertsNone

foreach ($fn in $files) {
    $mdPath = Join-Path $srcDir $fn
    if (-not (Test-Path -LiteralPath $mdPath)) {
        Write-Host "SKIP (not found): $fn"
        continue
    }
    Write-Host "Processing: $fn ..."
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($fn)
    
    # Step 1: Read .md content
    $content = Get-Content -LiteralPath $mdPath -Encoding UTF8 -Raw
    
    # Step 2: Create new Word doc, insert content
    $doc = $word.Documents.Add()
    $doc.Content.Text = $content
    $doc.Content.Font.Name = '宋体'
    $doc.Content.Font.Size = 12
    
    # Step 3: Save as .docx
    $docxPath = Join-Path $dstDir "$baseName.docx"
    $doc.SaveAs2($docxPath, 16)  # wdFormatDocumentDefault
    Write-Host "  -> $baseName.docx"
    
    # Step 4: Save as .pdf
    $pdfPath = Join-Path $dstDir "$baseName.pdf"
    $doc.SaveAs2($pdfPath, 17)   # wdFormatPDF
    Write-Host "  -> $baseName.pdf"
    
    $doc.Close()
}

$word.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Host ''
Write-Host 'All done. Files saved in:' $dstDir
Write-Host 'Press any key to exit...'
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
