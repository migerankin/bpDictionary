// 引入Tesseract.js库
const { createWorker } = Tesseract;
var catchWord_WindowTimes=0
document.getElementsByClassName('catchWord_btn')[0].onclick = function(){
  if(catchWord_WindowTimes==0){
    document.getElementsByClassName('catchWord_Window')[0].style.top = '60px'
    catchWord_WindowTimes=1
    var uploadInput = document.getElementById('uploadInput');
    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      demo2(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        $('.IMGshowWindow').attr('src',e.target.result)
      };
      reader.readAsDataURL(file);
      $('.IMGshowWindow').css('height','50px')
      $('.IMGshowWindow').css('display','block')
      $(".IMGshowWindow").on("wheel", function(event) {
        event.preventDefault();
        var delta = event.originalEvent.deltaY;
        var scale = delta > 0 ? 0.9 : 1.4;
        $(this).css("transform", "translateX(-50%) translateY(-50%) scale(" + scale + ")");
      });
      $('.IMGshowWindow').click(function(){
        $('.IMGshowWindow').css('display','none')
        isshowWindowClose=0
    })
    });
    document.addEventListener('paste', handlePaste);
  }else{
    document.getElementsByClassName('catchWord_Window')[0].style.top = '-200px'
    // document.getElementById('catchTextBox').innerText = '选择图片文件或复制图片后ctrl+ v。受识别准确率影响，建议只截取两三个连贯的正确假名进行模糊搜索。'
    catchWord_WindowTimes=0
    document.removeEventListener('paste', handlePaste);
  }
}
function handlePaste(event) {
  var items = event.clipboardData.items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      var file = items[i].getAsFile();
      console.log(file);
      document.getElementById('catchTextBox').style.backgroundImage = file
      demo2(file);
      break;
    }
  }
}

async function demo2(file) {
  document.getElementById('catchTextBox').innerText = '*图片读取中'
  const worker = await createWorker({
      // logger: m => console.log('')
  });

  work();

  async function work() {
      await worker.loadLanguage('jpn'); // 下载语言包
      await worker.initialize('jpn'); // 使用的语言
      const { data: { text } } = await worker.recognize(file);
      // document.getElementById('log').innerHTML = text;
      document.getElementById('catchTextBox').innerText = text.replace(/\s/g, '')+'   [网页中央出现的上传原图用于核对字符，单击原图消失]'
      await worker.terminate();
  }
}