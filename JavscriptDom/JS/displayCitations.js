function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //获取blockquote元素保存为quotes变量
    var quotes = document.getElementsByTagName("blockquote");

    //接下来遍历这个集合
    for (var i = 0; i < quotes.length; i++) {
        //如果没有cite属性,继续循环
        if (!quotes[i].getAttribute("cite")) continue;
        //保存cite属性为变量url
        var url=quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName('*');
        //如果没有元素节点继续循环
        if (quoteChildren.length < 1) continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length - 1];
        //创建标记
        var link =document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }

}

addLoadEvent(displayCitations);