var windowsize = 0
var intervalor = 0
setInterval(function(){
    windowsize=window.devicePixelRatio
    if (windowsize == 1||windowsize == 0.9375) {
        document.getElementsByTagName('body')[0].style.zoom = '125%'
    }else if(windowsize == 1.25){
        document.getElementsByTagName('body')[0].style.zoom = '100%'
    }
    // if(intervalor==0){
    //     if(windowsize!=1.25){
    //         document.getElementById('windowSizeWarning').style.left = '0'
    //     }else{
    //         document.getElementById('windowSizeWarning').style.left = '-210px'
    //     }
    // }
    // document.getElementById('windowSizeWarning').innerHTML = `<span>×</span><p>当前网页缩放比例为：${Math.floor(windowsize*100)}%<br>调节至 125% 以获得更优使用体验</p>`
    // document.getElementById('windowSizeWarning').getElementsByTagName('span')[0].onclick = function(){
    //     intervalor=1
    //     document.getElementById('windowSizeWarning').style.left = '-210px'
    // }
},1000)
