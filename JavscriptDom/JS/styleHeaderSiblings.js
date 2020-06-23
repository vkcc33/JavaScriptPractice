function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0; i<headers.length; i++){
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight="bold";
        elem.style.fontSize="1.2em";
    }
}

