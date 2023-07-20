function isUsingPC() {
    const userAgent = navigator.userAgent.toLowerCase();
    const keywords = ["windows", "macintosh", "x11"];
  
    for (const keyword of keywords) {
      if (userAgent.indexOf(keyword) !== -1) {
        return true;
      }
    }
  
    return false;
  }
  
if (isUsingPC()) {
    document.getElementById('windowKindWarning').style.left = '-230px'
} else {
    document.getElementById('windowKindWarning').style.left = '0px'
}
document.getElementById('windowKindWarning').getElementsByTagName('span')[0].onclick = function(){
    intervalor=1
    document.getElementById('windowKindWarning').style.left = '-230px'
}
