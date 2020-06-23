//修改positionMessage函数 实现渐进动画效果
function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //movement前面没有var关键字 意为全局变量的意思
    moveElement("message",125,25,20);
    if (!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2",125,125,20);

}
//这个括号里调用的是引用 减少内存开销
addLoadEvent(positionMessage);