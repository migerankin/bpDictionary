function choiseSCwhere(WElement, WBox){
    function isSubstring(a, b) {
        // 使用 indexOf() 方法查找字符串 a 在字符串 b 中的索引
        const index = b.indexOf(a);
        
        // 如果 index 大于等于 0，则表示字符串 a 在字符串 b 中存在
        if (index >= 0) {
          return true;
        } else {
          return false;
        }
      }
    var table = document.getElementsByTagName('table')[0];
    var rows = table.getElementsByTagName('tr');
    var Wnum = 0
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        for (let i = 1; i < rows.length-1; i++) {
            var row = rows[i];
            var Wcategory1 = row.getElementsByTagName('td')[1].innerText;
            var Wcategory2 = row.getElementsByTagName('td')[2].innerText;
            if ((WBox==Wcategory1||WBox == '全种类')&&(isSubstring(WElement,Wcategory2)||WElement == '全地图')) {
                row.style.display = ''; 
                Wnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${WElement}地域 ${WBox}类型 共有 ${Wnum} 条数据`

    // }
}

// function choiseWElement(choiseKind){
//     let table = document.getElementsByTagName('table')[0];
//     let rows = table.getElementsByTagName('tr');
    
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        // for (let i = 1; i < rows.length; i++) {
        //     const row = rows[i];
        //     const category = row.getElementsByTagName('td')[3].innerText;
        //     if (category == choiseKind) {
        //         row.style.display = ''; 
        //     }else if(choiseKind == '全部'){
        //         row.style.display = ''; 
        //     }else{
        //         row.style.display = 'none'; 
        //     }
        //   }
    // }
// }