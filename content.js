var loadScript = function (content) {
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.innerHTML = content.replace(/[\n]+/gm, '');
    document.head.appendChild(elem);
};

var getFileContent = function (src, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL(src), true);
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
        {
            callback(xhr.response);
        }
    };
    xhr.send();
};

$(function () {
    getFileContent('assets/main.js', loadScript);
});
