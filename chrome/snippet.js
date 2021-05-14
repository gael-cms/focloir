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
    mutationObserver.observe(document.body, mutationObserverConfig);
    snippet(mutationObserver);
}
