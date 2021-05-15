function focloirExtensionPage () {
    try {
        return window.location.search.includes("calledByFocloir=true")
    } catch (e) {
        console.log(e);
        return false;
    }
}

if (focloirExtensionPage()){
    const mutationObserverConfig = { childList: true, subtree: true };
    const mutationObserver = new MutationObserver(snippet);

    Array.from(document.body.getElementsByTagName('a')).forEach(function(a){
        if (!a.href.startsWith('javascript')) a.target = "_blank"
    });

    mutationObserver.observe(document.body, mutationObserverConfig);
    snippet(mutationObserver);
}
