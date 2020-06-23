function displayAbbreviation() {
    //注意getElementsByTagName这些调用的是DOM 如果在后面加了括号会被当成函数处理 接儿会报错
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    //如果文档中没有abrr元素,这个函数就结束了
    if (abbreviations.length < 1) return false;
    var defs = new Array();

    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = abbreviations[i].getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    var dlist =document.createElement("dl");
    for (key in defs){
        var definiton = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definiton);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // document.getElementsByTagName("body")[0];
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviation);