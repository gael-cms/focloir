function snippet(observer){
    const gtResults = document.querySelector('#invelope > div.gtResults');
    if (gtResults) {
        observer.disconnect();
        gtResults.style.margin = "auto";
        return document.body.innerHTML = gtResults.outerHTML;
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