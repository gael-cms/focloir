function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (inIframe()){
    const mutationObserverConfig = { childList: true, subtree: true };
    const mutationObserver = new MutationObserver(snippet);

    Array.from(document.body.getElementsByTagName('a')).forEach(function(a){
        if (!a.href.startsWith('javascript')) a.target = "_blank"
    });

    mutationObserver.observe(document.body, mutationObserverConfig);
    snippet(mutationObserver);
}
