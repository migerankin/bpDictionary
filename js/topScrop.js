var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
    // 鼠标向上滚动，显示 fixed div
    document.getElementsByClassName("bar")[0].style.top = "0";
    } else {
    // 鼠标向下滚动，隐藏 fixed div
    document.getElementsByClassName("bar")[0].style.top = "-57px";
    }

    prevScrollPos = currentScrollPos;
};
document.getElementsByClassName("bar")[0].onmouseover = function(){
    document.getElementsByClassName("bar")[0].style.top = "0";
}