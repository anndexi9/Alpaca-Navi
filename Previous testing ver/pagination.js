var current_page = 1;
var records_per_page = 5;

var objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"},
    { adName: "AdName 6"},
    { adName: "AdName 7"},
    { adName: "AdName 8"},
    { adName: "AdName 9"},
    { adName: "AdName 10"},
    { adName: "AdName 11"},
    { adName: "AdName 12"},
    { adName: "AdName 13"},
    { adName: "AdName 14"},
    { adName: "AdName 15"},
    { adName: "AdName 16"},
    { adName: "AdName 17"},
    { adName: "AdName 18"},
    { adName: "AdName 19"},
    { adName: "AdName 20"}
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementsByClassName("btn_next");
    var btn_prev = document.getElementsByClassName("btn_prev");
    var displayMain = document.getElementById("displayMain");
    var page_span = document.getElementsByClassName("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    displayMain.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        displayMain.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};