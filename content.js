var loadScript = function (content) {
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.innerHTML = content.replace(/[\n]+/gm, '');
    document.head.appendChild(elem);
};

$(function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL('assets/main.js'), true);
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
        {
            loadScript(xhr.response);
        }
    };
    xhr.send();
});
