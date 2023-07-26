function choiseMKind(WElement, WBox){
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
    var table2 = document.getElementById('monsterBossId');
    var rows2 = table2.getElementsByTagName('tr');
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
            var Wcategory1 = row.getElementsByTagName('td')[2].innerText;
            var Wcategory2 = row.getElementsByTagName('td')[5].innerText;
            if ((WBox==Wcategory1||WBox == '全种系')&&(isSubstring(WElement,Wcategory2)||WElement == '全地域')) {
                row.style.display = ''; 
                Wnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          for (let i = 1; i < rows2.length-2; i++) {
            var row = rows2[i];
            var Wcategory3 = row.getElementsByTagName('td')[3].innerText;
            var Wcategory4 = row.getElementsByTagName('td')[4].innerText;
            if ((WBox==Wcategory3||WBox == '全部')&&(isSubstring(WElement,Wcategory4)||WElement == '全部')) {
                row.style.display = ''; 
                Wnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${WElement} ${WBox} 共有 ${Wnum} 条数据`

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