# 产教融合门户 本地预览服务器
# 双击运行，或右键 "使用PowerShell运行"
# 启动后访问 http://localhost:8080/industry-education/

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  产教融合门户 本地预览" -ForegroundColor Yellow
Write-Host "  http://localhost:8080/industry-education/" -ForegroundColor Green
Write-Host "  按 Ctrl+C 停止服务器" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan

Set-Location -LiteralPath "C:\Users\H1811\Desktop\CDU 固废备课文件夹2026\演示展示"
python -m http.server 8080
