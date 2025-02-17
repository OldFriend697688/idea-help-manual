function init() {
    // 等待切换按钮容器加载完成
    var checkExist = setInterval(function () {
        var switcherContainer = document.querySelector('#webhelp-root > div > header > div > div > div.wh-header__switchers');
        if (switcherContainer) {
            clearInterval(checkExist);
            createScrollButtons(switcherContainer);
            modifySeeAlsoTitle(); // 添加新函数调用
        }
    }, 100);
}

function createScrollButtons(container) {
    // 创建样式
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = [
        '.scroll-button {',
        '    margin-right: 10px;',
        '    padding: 6px 12px;',
        '    border: none;',
        '    background: none;',
        '    color: inherit;',
        '    cursor: pointer;',
        '    font-size: inherit;',
        '    display: flex;',
        '    align-items: center;',
        '}',
        '.scroll-button svg {',
        '    width: 24px;',
        '    height: 24px;',
        '    fill: currentColor;',
        '}'
    ].join('\n');

    // 添加样式到页面
    document.getElementsByTagName('head')[0].appendChild(style);

    // 创建滚动到顶部按钮
    var topButton = document.createElement('button');
    topButton.className = 'scroll-button';
    topButton.title = '滚动到顶部';
    topButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>';

    // 创建滚动到底部按钮
    var bottomButton = document.createElement('button');
    bottomButton.className = 'scroll-button';
    bottomButton.title = '滚动到底部';
    bottomButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>';

    // 添加点击事件
    topButton.onclick = function() {
        var articleElement = document.querySelector('#webhelp-root > div > div.layout.layout--columns.layout--overflow-guard.layout--grow > div > div.layout.layout--columns.layout--scroll-element.layout--grow > article');
        
        if (!articleElement) {
            articleElement = document.querySelector('#webhelp-root > div > div.layout.layout--columns.layout--overflow-guard.layout--grow > div > div.layout.layout--container-content.layout--columns.layout--scroll-element.layout--grow > article');
        }
        
        if (articleElement) {
            articleElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    bottomButton.onclick = function() {
        var sections = document.getElementsByTagName('section');
        if (sections.length > 0) {
            var lastSection = sections[sections.length - 1];
            lastSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 在容器开始处插入按钮
    container.insertBefore(bottomButton, container.firstChild);
    container.insertBefore(topButton, bottomButton);
}

// 添加修改"See also"标题的函数
function modifySeeAlsoTitle() {
    var checkSeeAlso = setInterval(function() {
        var seeAlsoTitle = document.querySelector('#webhelp-root > div > div.layout.layout--columns.layout--overflow-guard.layout--grow > div > div:nth-child(2) > div > h3');
        if (seeAlsoTitle && seeAlsoTitle.textContent === 'See also') {
            clearInterval(checkSeeAlso);
            seeAlsoTitle.textContent = '另请参阅';
        }
    }, 100);
}

// 页面加载完成后初始化
if (document.readyState === 'complete') {
    init();
} else {
    window.onload = init;
}
