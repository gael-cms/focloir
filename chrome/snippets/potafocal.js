function snippet(observer){
    const gtResults = document.querySelector('#invelope > div.gtResults');
    if (gtResults) {
        observer.disconnect();
        gtResults.style.margin = "auto";
        document.body.innerHTML = gtResults.outerHTML;

        const mutationObserverConfig = { childList: true, subtree: true,  attributes: true };
        const mutationObserver = new MutationObserver(cleanupOnClick);
        mutationObserver.observe(document.body, mutationObserverConfig);
        return cleanupOnClick();

    }

    const beoResults = document.querySelector('#invelope > div.beoResults');
    if (beoResults) {
        observer.disconnect();
        beoResults.style.margin = "auto";
        return document.body.innerHTML = beoResults.outerHTML;
    }

    const thesResults = document.querySelector('#invelope > div.thesResults');
    if (thesResults) {
        observer.disconnect();
        thesResults.style.margin = "auto";
        return document.body.innerHTML = thesResults.outerHTML;
    }

    const noJoy= document.querySelector('#invelope > div.nojoy');
    if (noJoy) {
        observer.disconnect();
        noJoy.style.margin = "auto";
        return document.body.innerHTML = noJoy.outerHTML;
    }
}

function cleanupOnClick(){
    const gtResults = document.querySelector('div.gtResults');
    if (gtResults) {
        Array.from(gtResults.getElementsByClassName('token')).forEach(function (span) {
            const onclick = span.getAttribute('onclick');
            if (!onclick || !onclick.startsWith("window.location=")) return;
            span.removeAttribute('data-token');
            span.removeAttribute('onclick');
            const path = onclick.trim().replace(/'/g, "").replace("window.location=", "");
            span.setAttribute('onclick', "window.open('" + path + "', '_blank'); location.reload();");
        });
    }
}
