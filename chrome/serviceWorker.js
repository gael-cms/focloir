const actionContext = chrome.runtime.getManifest().manifest_version === 3 ? 'action' : 'browser_action';
// function actionAPI(){ return chrome.runtime.getManifest().manifest_version === 3 ? chrome.action : chrome.browserAction; }

chrome.contextMenus.removeAll(function(){
    chrome.contextMenus.create({
        contexts: [ actionContext ],
        id: 'about',
        title: 'More info'
    }, function(){
        chrome.contextMenus.onClicked.addListener(function(info) {
            if (info.menuItemId === 'about') chrome.tabs.create({ active: true, url: 'https://soceanainn.github.io/focloir/' });
        });
    });
    chrome.contextMenus.create({
        contexts: [ actionContext ],
        id: 'support',
        title: 'Support this project'
    }, function(){
        chrome.contextMenus.onClicked.addListener(function(info) {
            if (info.menuItemId === 'support') chrome.tabs.create({ active: true, url: 'https://www.buymeacoffee.com/soceanainn' });
        });
    });
});
