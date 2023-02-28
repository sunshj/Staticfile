// 浏览器禁用右键、复制、调试等按键
console.log("\n %c DisableRightClick  %c https://sunshj.top \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
eval(function (m, c, h) {
    function z(i) { return (i < 62 ? '' : z(parseInt(i / 62))) + ((i = i % 62) > 35 ? String.fromCharCode(i + 29) : i.toString(36)) }
    for (var i = 0; i < m.length; i++)h[z(i)] = m[i];
    function d(w) { return h[w] ? h[w] : w; };
    return c.replace(/\b\w+\b/g, d);
}
    ('var|element|new|Image|Object|defineProperty|id|get|function|window|location|href|home|mlsub|net|console|log'.split('|'), '0 1=2 3();4.5(1,\'6\',{7:8(){9.a.b="//c.d.e"}});f.g(1);', {}))


function stop() {
    alert("禁止使用右键！");
    return false;
}
document.oncontextmenu = stop;


document.onkeydown = function () {
    
    if (window.event && window.event.keyCode == 123) {
        alert("禁止使用F12！");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && (window.event.ctrlKey) && (window.event.keyCode == 67)) {
        alert("禁止复制！");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && (window.event.ctrlKey) && (window.event.keyCode == 88)) {
        alert("禁止剪切！");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && (window.event.ctrlKey) && (window.event.shiftKey) && (window.event.keyCode == 74)) {
        alert("禁止Ctrl+Shift+j！");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && (window.event.ctrlKey) && (window.event.shiftKey) && (window.event.keyCode == 73)) {
        alert("禁止Ctrl+Shift+i！");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        alert(str + "\n请使用Del键进行字符的删除操作！");
        window.event.returnValue = false;
    }
}
