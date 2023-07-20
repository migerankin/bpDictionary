var lastRe = -1
function rewrite(reName){
    const table = document.getElementsByTagName('table')[0];
    const rows = Array.from(table.rows);
    if(lastRe==reName){
        lastRe=-1
        // 根据某一列的值进行排序
        rows.sort((a, b) => {
        const valueA = a.cells[reName].textContent.replace('%','').replace('+',''); // 第2列的值
        const valueB = b.cells[reName].textContent.replace('%','').replace('+',''); // 第2列的值
        // 将值转换为数字进行比较
        return Number(valueA) - Number(valueB);
        });
        // 重新插入排序后的行元素到表格中
        rows.forEach(row => table.appendChild(row));
    }else{
        lastRe=reName
        rows.sort((a, b) => {
        const valueA = b.cells[reName].textContent.replace('%','').replace('+',''); // 第2列的值
        const valueB = a.cells[reName].textContent.replace('%','').replace('+',''); // 第2列的值
        // 将值转换为数字进行比较
        return Number(valueA) - Number(valueB);
        });
        // 重新插入排序后的行元素到表格中
        rows.forEach(row => table.appendChild(row));
    }
}