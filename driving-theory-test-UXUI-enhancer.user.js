// ==UserScript==
// @name         駕照筆試模考 UX/UI 優化
// @name:en      Taiwan Driving Theory Test UX/UI Enhancer
// @namespace    https://github.com/Jonathan881005
// @version      1.0
// @description  快捷鍵作答、一鍵開始測驗、成績頁面防跳轉、影片自動播放、提升練習效率
// @description:en Hotkeys for answering, one-click start test, prevent result page redirects, auto-play videos, and improve practice efficiency
// @author       Jonathan881005
// @match        https://www.mvdis.gov.tw/m3-simulator-drv/*
// @icon         data:image/png;base64,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
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    const CONFIG = {
        PULSE_MS: 0,
        AUTO_KEY: 'tm_fast_flow',
        LAST_FLOW_KEY: 'tm_last_flow',
        UI_CHECK_MS: 500
    };

    let lastPlayedVideoSrc = "";

    const currentPath = window.location.pathname;
    const isGradePage = currentPath.includes('m001Grade');
    const isExamPage = currentPath.includes('m001Exam');

    if (isGradePage) {
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                window._tm_allowLeave = false;
                const lastFlow = localStorage.getItem('tm_last_flow') || 'zh_car';
                const blockedText = lastFlow.startsWith('en') ? "Auto-redirect Blocked" : "自動跳轉已阻擋";
                const intervalId = setInterval(function() {
                    if (typeof zAu !== 'undefined' && zAu.cmd0 && zAu.cmd0.redirect) {
                        clearInterval(intervalId);
                        const originalRedirect = zAu.cmd0.redirect;
                        zAu.cmd0.redirect = function(req, ...args) {
                            if (!window._tm_allowLeave) {
                                document.querySelectorAll('.drv605M001-grade-button-font.z-label').forEach(lbl => {
                                    if (/^\\d{2}:\\d{2}$/.test(lbl.textContent.trim())) {
                                        lbl.textContent = blockedText;
                                        lbl.style.color = "#0000FF";
                                    }
                                });
                                return;
                            }
                            return originalRedirect.apply(this, [req, ...args]);
                        };
                    }
                }, 100);
                document.addEventListener('click', e => {
                    const btn = e.target.closest('button');
                    if (btn && (btn.textContent.includes('回考試首頁') || btn.textContent.includes('Back to homepage'))) {
                        window._tm_allowLeave = true;
                    }
                }, true);
            })();
        `;
        (document.head || document.documentElement).appendChild(script);
        script.remove();
    }

    function getVisibleButtonByImgSrc(srcSuffix) {
        const images = document.querySelectorAll(`img[src$="${srcSuffix}"]`);
        for (let img of images) {
            if (img.offsetParent !== null) {
                const btn = img.closest('button');
                if (btn && !btn.disabled && btn.style.display !== 'none') {
                    return btn;
                }
            }
        }
        return null;
    }

    function getVisibleButtonByText(texts) {
        if (!Array.isArray(texts)) {
            texts = [texts];
        }
        const buttons = document.querySelectorAll('button');
        for (let btn of buttons) {
            const btnText = btn.textContent.trim();
            if (texts.some(t => btnText.includes(t)) && btn.offsetParent !== null && !btn.disabled && btn.style.display !== 'none') {
                return btn;
            }
        }
        return null;
    }

    function autoPlayVideo() {
        if (!isExamPage) {
            return;
        }
        const video = document.querySelector('video#video');
        if (video && video.paused) {
            const currentSrc = video.getAttribute('src');
            if (currentSrc && currentSrc !== lastPlayedVideoSrc) {
                lastPlayedVideoSrc = currentSrc;
                video.click();
            }
        }
    }

    function pulse() {
        const flow = sessionStorage.getItem(CONFIG.AUTO_KEY);
        if (!flow) {
            return;
        }
        const path = window.location.pathname;
        let target = null;

        if (path.includes('m001Exam')) {
            sessionStorage.removeItem(CONFIG.AUTO_KEY);
            return;
        }

        if (path.endsWith('/') || path.endsWith('/index')) {
            target = getVisibleButtonByImgSrc(flow.startsWith('zh') ? 'zh_TW.png' : 'en_US.png');
        } else if (path.includes('chooseCharVoice')) {
            target = getVisibleButtonByImgSrc('pen.png');
        } else if (path.includes('choosePaperType')) {
            target = getVisibleButtonByImgSrc(flow.endsWith('car') ? 'car1.png' : 'moto1.png');
        } else if (path.includes('m001Note')) {
            const cb = document.querySelector('input[type="checkbox"]');
            if (cb && !cb.checked) {
                cb.focus();
                cb.click();
            } else if (cb && cb.checked) {
                target = getVisibleButtonByText(['開始考試', 'Start test']);
            }
        } else if (path.includes('drvExam/m001')) {
            target = getVisibleButtonByText(['確定', 'Confirm']);
        }

        if (target && !target.disabled && target.offsetParent) {
            target.focus();
            target.click();
        }

        setTimeout(pulse, CONFIG.PULSE_MS);
    }

    function attachHint(target, text, position = 'left') {
        if (!target || target.offsetParent === null || target.dataset.tmHintInjected === text) {
            return;
        }
        target.dataset.tmHintInjected = text;

        let container = target.parentNode;
        if (container.tagName === 'TD' || container.offsetWidth > target.offsetWidth + 40) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:inline-block; position:relative; vertical-align:middle;';
            container.insertBefore(wrapper, target);
            wrapper.appendChild(target);
            container = wrapper;
        } else {
            container.style.position = 'relative';
        }

        const span = document.createElement('span');
        span.className = 'tm-ui-hint tm-hint-static';
        span.textContent = text;
        span.style.cssText = `position:absolute; color:#0000FF; font-size:14px; font-weight:normal; white-space:nowrap; pointer-events:none; z-index:10; top:50%; transform:translateY(-50%);`;

        if (position === 'left') {
            span.style.right = '100%';
            span.style.marginRight = '8px';
        } else {
            span.style.left = '100%';
            span.style.marginLeft = '8px';
        }
        container.appendChild(span);
    }

    function renderFloatingHint(btn, text) {
        if (!btn || btn.offsetParent === null) {
            return;
        }

        const rect = btn.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
            return;
        }

        let span = document.querySelector(`.tm-hint-floating[data-hint="${text}"]`);
        if (!span) {
            span = document.createElement('span');
            span.className = 'tm-hint-floating';
            span.dataset.hint = text;
            span.textContent = text;
            span.style.cssText = `position:fixed; color:#0000FF; font-size:16px; font-weight:normal; white-space:nowrap; pointer-events:none; z-index:9999;`;
            document.body.appendChild(span);
        }

        span.style.left = `${rect.left + rect.width / 2}px`;
        span.style.top = `${rect.top - 5}px`;
        span.style.transform = 'translate(-50%, -100%)';
        span.dataset.active = "true";
    }

    function injectUIPrompt() {
        document.querySelectorAll('.tm-hint-static').forEach(hint => {
            const parent = hint.parentNode;
            const btn = parent.querySelector('button');
            if (!btn || btn.offsetParent === null || btn.style.display === 'none') {
                if (btn) {
                    btn.dataset.tmHintInjected = "";
                }
                hint.remove();
            }
        });

        document.querySelectorAll('.tm-hint-floating').forEach(span => {
            span.dataset.active = "false";
        });

        const path = window.location.pathname;

        if (path.endsWith('/') || path.endsWith('/index')) {
            const label = document.querySelector('span.drv-simulator-lang-remark-font.z-label');
            if (label && !document.querySelector('.tm-flow-prompt')) {
                const p = document.createElement('div');
                p.className = 'tm-flow-prompt';
                p.style.cssText = "text-align:center; width:100%; color:#0000FF; margin-top:15px; font-size:14px; line-height:1.8;";
                p.innerHTML = `快速開始 / Quickstart：<br>[A]: 中文汽車 | [S]: 中文機車<br>[D]: English Automobile | [F]: English Motorcycle`;
                label.parentNode.appendChild(p);
            }
        }

        if (isGradePage) {
            document.querySelectorAll('.drv605M001-grade-button-font.z-label').forEach(lbl => {
                if (/^\d{2}:\d{2}$/.test(lbl.textContent.trim()) || lbl.textContent.includes('阻擋')) {
                    if (!lbl.parentNode.querySelector('.tm-restart-prompt')) {
                        const div = document.createElement('div');
                        div.className = 'tm-restart-prompt';
                        div.textContent = (localStorage.getItem(CONFIG.LAST_FLOW_KEY) || '').startsWith('en') ? "Press R to Restart" : "按 R 重新開始測驗";
                        div.style.cssText = "font-size:16px; color:#0000FF; margin-top:8px; font-weight:normal; white-space:nowrap;";
                        lbl.parentNode.appendChild(div);
                    }
                }
            });
        }

        attachHint(getVisibleButtonByImgSrc('Home.png') || getVisibleButtonByText(['回考試首頁', 'Back to homepage']), '(H)', 'left');
        attachHint(getVisibleButtonByImgSrc('ArrowLeft.png'), '(Q)', 'left');
        attachHint(getVisibleButtonByImgSrc('ArrowRight.png'), '(E)', 'right');

        const fImg = document.querySelector('img[src$="Finish-2.png"]');
        if (fImg && fImg.offsetParent) {
            attachHint(fImg.closest('button'), '(S)', 'right');
        }

        const modalBtn = getVisibleButtonByText(['確認', 'Confirm']);
        if (modalBtn && isExamPage) {
            attachHint(modalBtn, '(D)', 'left');
        }

        if (isExamPage) {
            const isTF = getVisibleButtonByImgSrc('Yes.png') !== null;
            if (isTF) {
                renderFloatingHint(getVisibleButtonByImgSrc('Yes.png'), '(1)');
                renderFloatingHint(getVisibleButtonByImgSrc('No.png'), '(2)');
            } else {
                renderFloatingHint(getVisibleButtonByImgSrc('1.png'), '(1)');
                renderFloatingHint(getVisibleButtonByImgSrc('2.png'), '(2)');
                renderFloatingHint(getVisibleButtonByImgSrc('3.png'), '(3)');
            }
        }

        document.querySelectorAll('.tm-hint-floating[data-active="false"]').forEach(span => {
            span.remove();
        });
    }

    function safeClick(btn) {
        if (!btn) {
            return;
        }
        btn.click();
        setTimeout(() => {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
            window.focus();
        }, 50);
    }

    document.addEventListener('keydown', function (event) {
        if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
            return;
        }

        const key = event.key.toLowerCase();

        if (!isGradePage && !isExamPage) {
            let flow = { 'a': 'zh_car', 's': 'zh_moto', 'd': 'en_car', 'f': 'en_moto' }[key];
            if (flow) {
                sessionStorage.setItem(CONFIG.AUTO_KEY, flow);
                localStorage.setItem(CONFIG.LAST_FLOW_KEY, flow);
                pulse();
                event.preventDefault();
                return;
            }
        }

        if (key === 'r' && isGradePage) {
            const flow = localStorage.getItem(CONFIG.LAST_FLOW_KEY) || 'zh_car';
            sessionStorage.setItem(CONFIG.AUTO_KEY, flow);
            const script = document.createElement('script');
            script.textContent = `window._tm_allowLeave = true;`;
            document.head.appendChild(script);
            script.remove();

            const hb = getVisibleButtonByText(['回考試首頁', 'Back to homepage']);
            if (hb) {
                safeClick(hb);
            }
            event.preventDefault();
            return;
        }

        if (key === 'h') {
            const b = getVisibleButtonByImgSrc('Home.png') || getVisibleButtonByText(['回考試首頁', 'Back to homepage']);
            if (b) {
                safeClick(b);
                event.preventDefault();
            }
            return;
        }

        if (key === 'q') {
            const b = getVisibleButtonByImgSrc('ArrowLeft.png');
            if (b) {
                safeClick(b);
                event.preventDefault();
            }
            return;
        }

        if (key === 'e') {
            const b = getVisibleButtonByImgSrc('ArrowRight.png');
            if (b) {
                safeClick(b);
                event.preventDefault();
            }
            return;
        }

        if (key === 's' && isExamPage) {
            const b = getVisibleButtonByImgSrc('Finish-2.png');
            if (b) {
                safeClick(b);
                event.preventDefault();
            }
            return;
        }

        if (key === 'd') {
            const b = getVisibleButtonByText(['確認', 'Confirm']);
            if (b) {
                safeClick(b);
                event.preventDefault();
            }
            return;
        }

        if (['1', '2', '3'].includes(key) && isExamPage) {
            const isTF = getVisibleButtonByImgSrc('Yes.png') !== null;
            let b = null;

            if (isTF) {
                if (key === '3') {
                    return;
                }
                b = getVisibleButtonByImgSrc(key === '1' ? 'Yes.png' : 'No.png');
            } else {
                b = getVisibleButtonByImgSrc(key + '.png');
            }

            if (b) {
                b.style.outline = "4px solid orange";
                b.style.boxShadow = "0 0 10px orange";
                setTimeout(() => {
                    if (b) {
                        b.style.outline = "";
                        b.style.boxShadow = "";
                    }
                }, 150);
                safeClick(b);
                event.preventDefault();
            }
        }
    }, true);

    window.addEventListener('resize', injectUIPrompt);

    if (sessionStorage.getItem(CONFIG.AUTO_KEY)) {
        pulse();
    }

    setInterval(() => {
        injectUIPrompt();
        autoPlayVideo();
    }, CONFIG.UI_CHECK_MS);
})();