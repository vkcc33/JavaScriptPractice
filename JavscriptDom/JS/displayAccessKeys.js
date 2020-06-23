function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得所有链接
    var links = document.getElementsByTagName("a");
    //创建一个数组 保存访问键
    var akeys = new Array();
    //遍历链接
    for (var i = 0; i < links.length; i++) {
        //保存当前链接为变量current_link
        var current_link = links[i];
        //如果没有accesskey属性,继续循环
        if (!current_link.getAttribute("accesskey")) continue;
        //取得accesskeys值
        var key = current_link.getAttribute("accesskey");
        //取得链接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key]=text;
                    }
    //创建列表
    var list=document.createElement("ul");
    //遍历访问键
    for (key in akeys){
        var text = akeys[key];
        //创建放到列表项中的字符串
        var str = key + ": " +text;
        //创建列表项
        var item =document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        //把列表项添加到列表中
        list.appendChild(item);
    }

    //创建标题 注意这里原书中有错误 因为h3的标签 层级上比h1低所以不会排在第一行 而是在h1标签之后
    //如果此处换成h1标签 也不会变成第一行 因为代码是从上往下读写 也只会接着之后
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把列表添加到页面主体
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);