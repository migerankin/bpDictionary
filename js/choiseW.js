function choiseWKind(WBox, WElement){
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
            var Wcategory1 = row.getElementsByTagName('td')[12].innerText;
            var Wcategory2 = row.getElementsByTagName('td')[5].innerText;
            var Wcategory3 = row.getElementsByTagName('td')[2].innerText;
            if ((WBox == Wcategory1||WBox == '全部')&&(WElement == Wcategory2||WElement == '全部')&&(WLevel == Wcategory3|| WLevel == '全部')) {
                row.style.display = ''; 
                Wnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${WBox}类型 ${WElement}属性 ${WLevel}等级 共有 ${Wnum} 条数据`

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