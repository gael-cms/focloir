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

function updateIframe(elem, uri){
    if (elem.className !== "collapse" && elem.src !== encodeURI(uri)) elem.src = encodeURI(uri);
}

function doSearch() {
    inputBox.blur();
    const searchTerm = inputBox.value.trim();
    updateIframe(fgb, "https://www.teanglann.ie/ga/fgb/" + searchTerm + "?calledByFocloir=true");
    updateIframe(fbeag, "https://www.teanglann.ie/ga/fb/" + searchTerm + "?calledByFocloir=true");
    updateIframe(eid, "https://www.teanglann.ie/ga/eid/" + searchTerm + "?calledByFocloir=true");
    updateIframe(gram, "https://www.teanglann.ie/ga/gram/" + searchTerm + "?calledByFocloir=true");
    updateIframe(fuaim, "https://www.teanglann.ie/ga/fuaim/" + searchTerm + "?calledByFocloir=true");

    updateIframe(gt, "http://www.potafocal.com/gt/?s=" + searchTerm + "&calledByFocloir=true");
    updateIframe(gb, "http://www.potafocal.com/beo/?s=" + searchTerm + "&calledByFocloir=true");
    updateIframe(thes, "http://www.potafocal.com/thes/?s=" + searchTerm + "&calledByFocloir=true");

    updateIframe(tearma, "https://www.tearma.ie/q/" + searchTerm + "?calledByFocloir=true");
    // updateIframe(foc, "https://www.focloir.ie/ga/dictionary/ei/" + searchTerm + "?calledByFocloir=true");
}

$('input:checkbox').change(function(){
    const targetId = "#" + this.id.replace("Switch", "");
    const isChecked = $(this).is(':checked');

    if (isChecked) $(targetId).collapse('show');
     else $(targetId).collapse('hide');

    chrome.storage.local.set({[this.id]: isChecked});

    const parent = $(targetId).parents('.row');
    parent.append(parent.find('.collapsing').parents('.col-12'));
    parent.append(parent.find('.collapse:not(.show)').parents('.col-12').get().reverse());
    if (inputBox.value.trim()) doSearch();
});

$('.custom-control-input').each(function(i, e){
    let obj = $(this);
    chrome.storage.local.get(e.id, function(result){
        obj.prop("checked", result[e.id]).change();
    });
});

inputBox.addEventListener('keyup', function onEvent(e) {
    if (e.key === "Enter") doSearch();
});

$('#button').click(doSearch);
