const actionContext = chrome.runtime.getManifest().manifest_version === 3 ? 'action' : 'browser_action';
function actionAPI(){ return chrome.runtime.getManifest().manifest_version === 3 ? chrome.action : chrome.browserAction; }

function openPage() {
    chrome.tabs.create({ active: true, url: chrome.runtime.getURL('focloir.html') });
}

actionAPI().onClicked.addListener(openPage);

chrome.contextMenus.removeAll(function(){
    chrome.contextMenus.create({
        contexts: [ actionContext ],
        id: 'about',
        title: 'Eolas ar an tionscnamh seo | About this project'
    }, function(){
        chrome.contextMenus.onClicked.addListener(function(info) {
            if (info.menuItemId === 'about') chrome.tabs.create({ active: true, url: 'https://gaelcms.com/extensions/focloir' });
        });
    });
    chrome.contextMenus.create({
        contexts: [ actionContext ],
        id: 'gael-cms',
        title: 'Eolas fúinn | About GaelCMS'
    }, function(){
        chrome.contextMenus.onClicked.addListener(function(info) {
            if (info.menuItemId === 'gael-cms') chrome.tabs.create({ active: true, url: 'https://gaelcms.com' });
        });
    });
    chrome.contextMenus.create({
        contexts: [ actionContext ],
        id: 'support',
        title: 'Tacaigh linn | Support this project'
    }, function(){
        chrome.contextMenus.onClicked.addListener(function(info) {
            if (info.menuItemId === 'support') chrome.tabs.create({ active: true, url: 'https://ko-fi.com/gaelcms' });
        });
    });
});
