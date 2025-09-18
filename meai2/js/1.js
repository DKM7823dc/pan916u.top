// 主按钮触发分析过程
    function startAnalysis() {
        console.log("Starting analysis...");

        // 显示进度弹窗，开始分析流程
        showProgressPopup();
    }

    // 显示进度分析弹窗
    function showProgressPopup() {
        const popup = document.getElementById("progressPopup");
        popup.style.display = "flex";
        popup.offsetHeight;
        popup.classList.add("show");

        // 重置所有进度条
        resetProgressBars();

        // 开始分析流程
        startAnalysisSequence();
    }

    // 重置进度条
    function resetProgressBars() {
        document.getElementById("progressA1").style.width = "0%";
        document.getElementById("progressA1").textContent = "0%";
        document.getElementById("progressB2").style.width = "0%";
        document.getElementById("progressB2").textContent = "0%";
        document.getElementById("progressC3").style.width = "0%";
        document.getElementById("progressC3").textContent = "0%";
    }

    // 开始分析序列
    function startAnalysisSequence() {
        // 市场分析 - 0.125秒后开始 (原0.25秒)
        setTimeout(() => animateProgress("progressA1", 100, 375), 125);

        // 图形分析 - 0.5秒后开始 (原1秒)
        setTimeout(() => animateProgress("progressB2", 100, 375), 500);

        // 新闻分析 - 0.875秒后开始 (原1.75秒)
        setTimeout(() => animateProgress("progressC3", 100, 375), 875);

        // 1.375秒后直接显示最终弹窗 (原2.75秒)
        setTimeout(() => {
            closeProgressPopup();
            showFinalPopup();
        }, 1375);
    }

    // 进度条动画
    function animateProgress(elementId, targetPercent, duration) {
        const element = document.getElementById(elementId);
        let currentPercent = 0;
        const increment = targetPercent / (duration / 50);

        const animation = setInterval(() => {
            currentPercent += increment;
            if (currentPercent >= targetPercent) {
                currentPercent = targetPercent;
                clearInterval(animation);
            }

            const roundedPercent = Math.round(currentPercent);
            element.style.width = roundedPercent + "%";
            element.textContent = roundedPercent + "%";
        }, 50);
    }

    // 关闭进度弹窗
    function closeProgressPopup() {
        const popup = document.getElementById("progressPopup");
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
        }, 400);
    }

    // 显示最终弹窗
    function showFinalPopup() {
        const popup = document.getElementById("resultPopup");
        popup.style.display = "flex";
        popup.offsetHeight;
        popup.classList.add("show");

        popup.addEventListener("click", function (e) {
            if (e.target === popup) {
                closePopup();
            }
        });
    }

    // 显示弹窗函数 (保留原有功能)
    function showPopup() {
        showFinalPopup();
    }

    // 关闭弹窗函数
    function closePopup() {
        const popup = document.getElementById("resultPopup");
        popup.classList.remove("show");

        // 等待动画完成后隐藏元素
        setTimeout(() => {
            popup.style.display = "none";
        }, 400);
    }

    // WhatsApp按钮点击事件
    function connectWhatsApp() {
        // closePopup();
        // 直接调用showline函数执行ajax请求和跳转
        showline();
    }