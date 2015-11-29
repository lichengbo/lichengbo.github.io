 window.onload = function () {
    var container = document.getElementById('container');
    var img_pre = document.getElementById('img_pre');
    var img_next = document.getElementById('img_next');
    var oUl = container.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var oDot = document.getElementById('dot').getElementsByTagName('li');
    var timer, autoMove, currentIndex = 0;

    oUl.innerHTML += oUl.innerHTML; // 复制图片，第一张和最后一张图片无缝切换
    oUl.style.width = oLi[0].offsetWidth * oLi.length + 'px';
    oDot[0].style.background = "none";
    oDot[0].style.border = "1px solid white";
    setAutoMove();

    container.onmouseover = function() {
        img_pre.style.display = "block";
        img_next.style.display = "block";
        clearInterval(autoMove);
    }

    container.onmouseout = function() {
        img_pre.style.display = "none";
        img_next.style.display = "none";
        setAutoMove();
    }

    img_next.onclick = function() {        
        if(currentIndex == oLi.length / 2) {
            oUl.style.left = 0; // 对最后一张进行处理
            currentIndex = 1;
        } else {
            currentIndex++;
        }

        move(currentIndex);
    }

    img_pre.onclick = function() {
        if(currentIndex == 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
            currentIndex = oLi.length / 2 - 1; // 对第一张进行处理
        } else {
            currentIndex--;
        }

        move(currentIndex);
    }

    for(var i = 0; i < oDot.length; i++) {
        oDot[i].index = i;
        oDot[i].onclick = function() {
            currentIndex = this.index;
            move(this.index);
        };
    }

    function setAutoMove() {
        autoMove = setInterval(function() {
            img_next.click();
        }, 5000);
    }

    function move(objIndex) {
        var objLeft = -(objIndex * oLi[0].offsetWidth);

        clearInterval(timer);

        timer = setInterval(function() {          
            var speed = (objLeft - oUl.offsetLeft) / 13;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            oUl.style.left = oUl.offsetLeft + speed + 'px';
        }, 10);

        changeDotColor();
    }

    function changeDotColor() {
        for(var i = 0; i < oDot.length; i++) {
            oDot[i].style.background = "white";
            oDot[i].style.border = "none";
        }

        oDot[currentIndex % (oLi.length / 2)].style.background = "none";
        oDot[currentIndex % (oLi.length / 2)].style.border = "1px solid white";
    }
}

function imageInfo() {
    alert("图片来自zealer 社区，非广告。侵删（此知乎体纯属废话！！！）")
}