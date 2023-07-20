function choiseE(choiseKind){
    var tableE = document.getElementsByTagName('table')[0];
    var rowsE = tableE.getElementsByTagName('tr');
    var Enum = 0
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        for (let i = 1; i < rowsE.length-1; i++) {
            var row = rowsE[i];
            var category = row.getElementsByTagName('td')[12].innerText;
            if (category == choiseKind) {
                row.style.display = ''; 
                Enum += 1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${choiseKind}幻想有 ${Enum} 条数据`

    // }
}

