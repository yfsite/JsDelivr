document.body.oncopy = function() {layer.msg('复制成功,若要转载请务必保留原文链接！');};
var Sys = {};

var ua = navigator.userAgent.toLowerCase();

if( window.ActiveXObject ){

    document.body.oncopy = function(){

        event.returnValue = false;

        var t=document.selection.createRange().text;

        var s=" - 本文来自「YF的博客」，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。原文链接："+location.href;

        clipboardData.setData('Text',t+'
        
        '+s);

    };

}else{

    function addLink(){

        var body_element = document.getElementsByTagName('body')0;
