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
const iate =        document.getElementById('iate');
const cgc =         document.getElementById('cgc');
const ccbg =        document.getElementById('ccbg');
const ccgb =        document.getElementById('ccgb');

function updateIframe(elem, uri){
    if (elem?.style?.display !== "none" && elem?.src !== encodeURI(uri)) elem.src = encodeURI(uri);
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

    updateIframe(iate, "https://www.gaois.ie/ga/terminology/?Query=" + searchTerm + "&PerPage=50&calledByFocloir=true");
    updateIframe(cgc, "https://www.gaois.ie/ga/corpora/monolingual/?Query=" + searchTerm + "&SearchMode=exact&PerPage=50&calledByFocloir=true");
    updateIframe(ccbg, "https://www.gaois.ie/ga/corpora/parallel/?Query=" + searchTerm + "&SearchMode=exact&Language=en&PerPage=50&calledByFocloir=true");
    updateIframe(ccgb, "https://www.gaois.ie/ga/corpora/parallel/?Query=" + searchTerm + "&SearchMode=exact&Language=ga&PerPage=50&calledByFocloir=true");
}
$('input:checkbox').change(function(){
    const targetId = "#" + this.id.replace("Switch", "");
    const isChecked = $(this).is(':checked');

    $(targetId).slideToggle('slow', () => {
        if (!isChecked) parent.append($(targetId).parents('.col-4'));
    });

    chrome.storage.local.set({[this.id]: isChecked});

    const parent = $(targetId).parents('.row');

    parent.append(parent.find('.collapse:hidden').parents('.col-4').get().reverse());
    if (inputBox.value.trim()) doSearch();
});

$('.toggle-checkbox').get().reverse().forEach(function(e){
    chrome.storage.local.get(e.id, function(result){
        const isChecked = result[e.id];
        $(e).prop("checked", isChecked).change();
        if (isChecked) {
          const targetId = "#" + e.id.replace("Switch", "");
          $(targetId).slideToggle(150);
        }
    });
});

inputBox.addEventListener('keyup', function onEvent(e) {
    if (e.key === "Enter") doSearch();
});

$('#button').click(doSearch);

$('#form').submit((ev) => ev.preventDefault());
