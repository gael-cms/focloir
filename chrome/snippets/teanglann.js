function snippet(observer){
    const listings = document.querySelector('#invelope > div.listings');
    if (listings) {
        observer.disconnect();
        listings.style.margin = "auto";
        return document.body.innerHTML = listings.outerHTML;
    }
}