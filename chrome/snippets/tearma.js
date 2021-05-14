function snippet(observer){
    const results = document.querySelectorAll('div.prettyEntry, div.sectitle');
    if (results) {
        observer.disconnect();
        document.body.innerHTML = null;
        results.forEach(function(result){
            result.style.margin = "auto";
            document.body.innerHTML += result.outerHTML
        });
        return;
    }
}