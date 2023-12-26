function snippet(observer){
    const listings = document.querySelector('main > .container > .content > div > :is(ol,p)');
    if (listings) {
        observer.disconnect();
        listings.style.margin = "auto";
        return document.body.innerHTML = listings.outerHTML;
    }
}
