function snippet(observer){
    const listings = document.querySelector('div.foras-dblclick-area');
    if (listings) {
        observer.disconnect();
        listings.style.margin = "auto";
        return document.body.innerHTML = listings.outerHTML;
    }
}