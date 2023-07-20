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
    });
    document.addEventListener('paste', handlePaste);
  }else{
    document.getElementsByClassName('catchWord_Window')[0].style.top = '-200px'
    // document.getElementById('catchTextBox').innerText = '选择图片文件或复制图片后ctrl+ v。受识别准确率影响，建议只截取两三个连贯的正确假名进行模糊搜索。'
    catchWord_WindowTimes=0
    document.removeEventListener('paste', handlePaste);
  }
}
// 获取上传的图片文件

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
      document.getElementById('catchTextBox').innerText = text.replace(/\s/g, '')
      await worker.terminate();
  }
}
