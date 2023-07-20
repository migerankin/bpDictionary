
function choiseBKind(BBox, BElement){
    var table = document.getElementsByTagName('table')[0];
    var rows = table.getElementsByTagName('tr');
    var Bnum = 0
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
            var category1 = row.getElementsByTagName('td')[15].innerText+'型';
            var category2 = row.getElementsByTagName('td')[3].innerText;
            if ((BBox == category1||BBox == '全部')&&(BElement == category2||BElement == '全部')) {
                row.style.display = ''; 
                Bnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${BBox}类型 ${BElement}属性 共有 ${Bnum} 条数据`

    // }
}

// function choiseBElement(choiseKind){
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