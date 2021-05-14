const inputBox =    document.getElementById('focal');
const fgb =         document.getElementById('fgb');
const fbeag =       document.getElementById('fbeag');
const eid =         document.getElementById('eid');
const gram =        document.getElementById('gram');
const fuaim =       document.getElementById('fuaim');
const gt =          document.getElementById('gt');
const gb =          document.getElementById('gb');
const thes =        document.getElementById('thes');
const tearma =      document.getElementById('tearma');
// const foc =         document.getElementById('foc');

function updateIframe(elem, uri, searchTerm){
    if (elem.className !== "collapse" && elem.src !== encodeURI(uri + searchTerm)) elem.src = encodeURI(uri + searchTerm);
}

function doSearch() {
    const searchTerm = inputBox.value.trim();
    updateIframe(fgb, "https://www.teanglann.ie/ga/fgb/", searchTerm);
    updateIframe(fbeag, "https://www.teanglann.ie/ga/fb/", searchTerm);
    updateIframe(eid, "https://www.teanglann.ie/ga/eid/", searchTerm);
    updateIframe(gram, "https://www.teanglann.ie/ga/gram/", searchTerm);
    updateIframe(fuaim, "https://www.teanglann.ie/ga/fuaim/", searchTerm);

    updateIframe(gt, "http://www.potafocal.com/gt/?s=", searchTerm);
    updateIframe(gb, "http://www.potafocal.com/beo/?s=", searchTerm);
    updateIframe(thes, "http://www.potafocal.com/thes/?s=", searchTerm);

    updateIframe(tearma, "https://www.tearma.ie/q/", searchTerm);
    // updateIframe(foc, "https://www.focloir.ie/ga/dictionary/ei/", searchTerm);
}

$('input:checkbox').change(function(){
    const targetId = "#" + this.id.replace("Switch", "");
    if ($(this).is(':checked')) {
        $(targetId).collapse('show');
    } else $(targetId).collapse('hide');

    const parent = $(targetId).parents('.row');
    parent.append(parent.find('.collapsing').parents('.col-12'));
    parent.append(parent.find('.collapse:not(.show)').parents('.col-12').get().reverse());
    if (inputBox.value.trim()) doSearch();
});

inputBox.addEventListener('keyup', function onEvent(e) {
    if (e.key === "Enter") {
        doSearch();
        inputBox.blur();
    }
});
