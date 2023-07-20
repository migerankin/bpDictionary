function downloadFile(filePath, fileName) {
  
    // 创建一个隐藏的<a>元素
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
  
    // 将<a>元素添加到文档中
    document.body.appendChild(link);
  
    // 模拟点击<a>元素以触发文件下载
    link.click();
  
    // 移除<a>元素
    document.body.removeChild(link);
  }
  