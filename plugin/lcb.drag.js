/*
 *@author lichengbo
 *@date 2015-11-18 version 1.0
 *@description JavaScript 拖拽效果
*/

var params = {
    width: 0,
    height:0,
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    isdrag: false
}

function getCss(obj, key){
    return obj.currentStyle ? obj.currentStyle[key] : document.defaultView.getComputedStyle(obj, false)[key]   
};

// 禁止拖拽中文字被选中
function disableSelection(target){
    if (typeof target.onselectstart != "undefined") //IE route
        target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
        target.style.MozUserSelect="none";
    else //All other route (ie: Opera)
        target.onmousedown = function(){return false}
};

function startDrag(header, container) {
    var header = document.getElementById('header');
    var container = document.getElementById('container');
    disableSelection(header); 

    params.width = getCss(container, "width");
    params.height = getCss(container, "height");
    params.left = getCss(container, "left");
    params.top = getCss(container, "top");
    
    header.onmousedown = function(event) {
        var ev = event || window.event;

        params.currentX = ev.clientX;
        params.currentY = ev.clientY;
        params.isdrag = true;
    }

    document.onmousemove = function(event) {
        if(params.isdrag) {
            var ev = event || window.event;
            var nowX = parseInt(params.left) + ev.clientX - params.currentX;
            var nowY = parseInt(params.top) + ev.clientY - params.currentY;
            
            if(nowX <= 0) {
                container.style.left = 0;
            } else if(nowX + parseInt(params.width) >= window.innerWidth){
                container.style.left = window.innerWidth - parseInt(params.width) + "px";
            } else {
                container.style.left = nowX + "px";
            }

            if(nowY <= 0) {
                container.style.top = 0;
            } else if(nowY + parseInt(params.height) >= window.innerHeight) {
                container.style.top = window.innerHeight - parseInt(params.height) + "px";
            } else {
                container.style.top =  nowY + "px";
            }
        }
    }

    document.onmouseup = function() {
        params.isdrag = false;

        // 重新获取容器的位置
        params.left = getCss(container, "left");
        params.top = getCss(container, "top");
    }
}