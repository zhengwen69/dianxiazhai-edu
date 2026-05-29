# 截图采集脚本 - 半自动辅助工具
# 用法：右键 → 使用 PowerShell 运行
# 每页自动打开HTML → 提示截图区域 → 您按 Win+Shift+S 截图 → 按Enter继续下一页

Add-Type -AssemblyName System.Windows.Forms

$srcDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$shots = @(
    @{Id='SC01'; File='index.html'; Desc='首页全景：含标题行 + 四卡片导航 + 互动社区/教师仪表盘/学习园地 三卡片'},
    @{Id='SC02'; File='index.html'; Desc='首页 motto区：''绿水青山=金山银山'' + ''好好学习 天天向上'' + 点暇斋署名'},
    @{Id='SC03'; File='课程概览.html'; Desc='课程概览：用←→键翻到 OBE课程目标矩阵 那一页，截图'},
    @{Id='SC04'; File='学习园地.html'; Desc='学习园地全景：含标题、学习导览折叠区、五维框架、八周网格'},
    @{Id='SC05'; File='学习园地.html'; Desc='学习园地折叠导览：依次手动点击三个折叠区 (课程概览/章节导航/知识导图) 全部展开后截图'},
    @{Id='SC06'; File='学习园地.html'; Desc='学习园地八周进度：滚动到下半区，截取八周学习计划网格 + 进度条'},
    @{Id='SC07'; File='agent团队演示.html'; Desc='Agent工作流条：截取页面顶部 11-Agent 工作流横条 + 素材说明文字'},
    @{Id='SC08'; File='agent团队演示.html'; Desc='Agent-S卡片：向下滚动找到 Agent-S 故事化案例拆解 卡片，截图'},
    @{Id='SC09'; File='助学团队-学生版.html'; Desc='学习流6步：截取页面顶部 预习→学习→作业→自测→研创设计→写论致用 流程序列'},
    @{Id='SC10'; File='助学团队-学生版.html'; Desc='Agent-B卡片：向下滚动找到 Agent-B · 研创向导 (创用岗)，截图整卡'},
    @{Id='SC11'; File='学习-第1周.html'; Desc='第1周：截取 ''教法定位 · 叙'' 标签卡片 + ''空间错配五维框架'' 卡片（两张一起截）'},
    @{Id='SC12'; File='学习-第2周.html'; Desc='第2周：截取 ''教法定位 · 框'' 标签卡片 + ''选址正义性四维框架'' 卡片'},
    @{Id='SC13'; File='学习-第3周.html'; Desc='第3周：截取 ''教法定位 · 境'' 标签卡片 + ''技术错配三型'' 卡片'},
    @{Id='SC14'; File='学习-第3周.html'; Desc='第3周案例深潜：向下滚动到 ''案例深潜：S004-S005 五段叙事拆解'' 卡片，截图'},
    @{Id='SC15'; File='学习-第4周.html'; Desc='第4周：截取 ''核心教学内容：垃圾时间三维框架'' 卡片（含三维列表）'},
    @{Id='SC16'; File='学习-第5周.html'; Desc='第5周：截取 ''核心教学内容：行为错配四因框架'' 卡片（含四因列表）'},
    @{Id='SC17'; File='学习-第7周.html'; Desc='第7周：截取 ''核心教学内容：人文错配三维框架'' 卡片（含三维列表）'},
    @{Id='SC18'; File='学习-第8周.html'; Desc='第8周：截取 ''教法定位 · 创'' 标签卡片 + ''五维统一诊断矩阵'' 表格（两张一起截）'},
    @{Id='SC19'; File='学习-第8周.html'; Desc='第8周三轨制：向下滚动到 ''结课产出：三轨并行（选其一）'' 的 A/B/C 三张轨道卡片，全部截图'},
    @{Id='SC20'; File='学习-第3周.html'; Desc='小说引用块示例：截取任意一个 .excerpt 小说引用块（斜体灰字+左边框），如 S004《青龙湖》'},
    @{Id='SC21'; File='manual'; Desc='[§5.4.3 场景一·步骤①②] 用文本编辑器打开 学习-第8周.html → 另存为 学习-第9周.html → 修改 <title> 和顶部周次标题 → 截取编辑器窗口（可见文件标签/另存为/标题行改动）'},
    @{Id='SC22'; File='manual'; Desc='[§5.4.3 场景一·步骤③④] 同一编辑器窗口 → 滚动到四段式内容区（预习/学习/作业/AI赋能）→ 展示其中一段的修改内容 + 底部"上一周/下一周"导航链接 → 截图'},
    @{Id='SC23'; File='manual'; Desc='[§5.4.3 场景一·步骤⑤] 浏览器打开 学习园地.html → 滚动到八周学习计划网格 → 展示新增的"第9周"卡片（含周次编号/主题/链接）→ 截图'},
    @{Id='SC24'; File='manual'; Desc='[§5.4.3 场景二·步骤①②] 文本编辑器打开 学习-第1周.html → Ctrl+F 搜索 S001 → 展示 .excerpt 区块内的小说引用文字（新旧对比或标注修改区域）→ 截图'},
    @{Id='SC25'; File='manual'; Desc='[§5.4.3 场景二·步骤③] 浏览器打开 学习-第1周.html → 滚动到"案例深潜"卡片 → 展示五段叙事拆解（背景/冲突/决策/结局/启示）更新后效果 → 截图'},
    @{Id='SC26'; File='manual'; Desc='[§5.4.3 场景三·步骤①②] 文本编辑器打开 学习-第1周.html → 搜索 .prompt 或 "AI赋能" → 展示 Prompt 模板文字修改 → 截图'},
    @{Id='SC27'; File='manual'; Desc='[§5.4.3 通用·Git推送] 打开 PowerShell/终端 → 进入演示展示目录 → 执行 git add -A; git commit -m "更新XXX"; git push → 截图终端命令与成功反馈'}
)

$total = $shots.Count
$current = 0

Write-Host ''
Write-Host '============================================'
Write-Host '  截图采集助手 - 共 ' $total ' 张'
Write-Host '  操作：Win+Shift+S 截图 → 保存 → 回此窗口按 Enter'
Write-Host '============================================'
Write-Host ''

foreach ($s in $shots) {
    $current++
    $isManual = ($s.File -eq 'manual')
    
    if (-not $isManual) {
        $htmlPath = Join-Path $srcDir $s.File
        if (-not (Test-Path -LiteralPath $htmlPath)) {
            Write-Host "[$current/$total] SKIP: 文件不存在：$($s.File)" -ForegroundColor Red
            continue
        }
        # 打开HTML文件
        Start-Process -FilePath $htmlPath
    }
    
    # 弹出提示
    [System.Windows.Forms.MessageBox]::Show(
        "[$current / $total]  $($s.Id)`n`n$($s.Desc)`n`n若为手动操作截图，请自行打开对应应用程序。`n`n请用 Win+Shift+S 截图选区。`n截图完成后请保存到：截图素材-SCREENSHOTS\`n`n然后切换回 PowerShell 窗口按 Enter 继续下一张。",
        "截图采集 - $($s.Id)",
        [System.Windows.Forms.MessageBoxButtons]::OK,
        [System.Windows.Forms.MessageBoxIcon]::Information
    )
    
    Write-Host "[$current/$total] $($s.Id) : $(if ($isManual) { '(手动操作)' } else { $s.File })" -ForegroundColor Green
    Write-Host "  -> $($s.Desc)" -ForegroundColor Cyan
    Write-Host '  截图完成后按 Enter 继续...' -ForegroundColor Yellow
    Read-Host
    Write-Host ''
}

Write-Host '============================================'
Write-Host '  全部 27 张截图采集完成！' -ForegroundColor Green
Write-Host '  请将截图重命名为 SC01-xxx.png ~ SC27-xxx.png'
Write-Host '  存放于：截图素材-SCREENSHOTS\'
Write-Host '============================================'
Read-Host '按 Enter 退出'
