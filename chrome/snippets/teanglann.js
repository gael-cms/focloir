function snippet(observer){
    const listings = document.querySelector('#invelope > div.listings');
    if (listings) {
        observer.disconnect();
        listings.style.margin = "auto";
        Array.from(listings.getElementsByClassName('diclick')).forEach(function(span){
            const onclick = span.getAttribute('onclick');
            if (!onclick) return;
            const path = onclick.trim().replace(/'/g, "").replace("window.location=", "");
            span.setAttribute('onclick', "window.open('" + path + "', '_blank')");
        });
        return document.body.innerHTML = listings.outerHTML;
    }
}