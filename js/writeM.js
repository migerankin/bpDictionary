
function writeM(){
    nowPage = 1
    clearInterval(interevalPic)
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'

    document.getElementsByClassName('floatBox')[0].innerHTML = `<div class="goToId">
    <div onclick="scrollToSection('xiaoguai')">小怪</div>
    <div onclick="scrollToSection('Boss')">Boss</div>
</div>`
    var M_htmlStr = `<p class="windowTitle">| 地图及自由探索怪物清单</p>
    <p class="Topword">该清单包含野外地图及自由探索地图中的小怪及 Boss ,暂不包含仅在多人副本及主线剧情副本中出现的怪物。<br>地图点位上的红色标注为有可能刷新该怪物的地点，左键单击图片可将其放大并可用鼠标滚轮再次放大。</p>
    <p class="M_mbTile" id="xiaoguai" style="margin-top: 20px;">地图及自由探索中的小怪</p>
    <p class="Topword">以下为小怪清单，注意：<b>小怪的掉落物有区域分别，并非所有地图上的该种小怪都会掉落材料，</b>如有刷材料的需求请于材料列表中进行搜索或翻阅。</p>
    <table>
        <tbody>
            <tr>
                <th width="12%">样貌</th>
                <th width="12%">名称</th>
                <th width="10%">弱点属性</th>
                <th width="20%">分布区域</th>
                <th width="50%">地图点位</th>
            </tr>`
    
    M_value.forEach((M_every)=>{
        var imgSrcString = ``
        for(var i=0;i<M_every.mapWhere.length;i++){
            imgSrcString += `<img src="./img/monster/`+M_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
        }
        M_htmlStr += `<tr class="canclick">
            <td><img src="./img/icon/m/${M_every.pid}.png" alt="暂无" style="height: 100px;"></td>
            <td style="font-size: 14px;">${M_every.name}</td>
            <td style="font-size: 14px;">${M_every.lessElem}</td>
            <td>${M_every.spaceName}</td>
            <td class="manyImgBar">${imgSrcString}</td>
        </tr>`
    })
    
    M_htmlStr += `<tr>
    <th width="12%">样貌</th>
    <th width="12%">名称</th>
    <th width="10%">弱点属性</th>
    <th width="20%">分布区域</th>
    <th width="50%">地图点位</th>
</tr></tbody>
    </table>`

    M_htmlStr += `<p class="M_mbTile" id="Boss" style="margin-top: 40px;">地图及自由探索中的 Boss</p>
    <p class="Topword">以下为 Boss 清单。Boss 刷新时将在同区域内的地图范围内进行图标广播。Boss 的刷新通常都具有数十分钟的冷却时间。</p>
    <table>
        <tbody>
            <tr>
                <th width="15%">样貌</th>
                <th width="10%">等级</th>
                <th width="20%">名称</th>
                <th width="15%">分布区域</th>
                <th width="30%">地图点位</th>
                <th width="20%">触发事件</th>
            </tr>`
    
    MB_value.forEach((MB_every)=>{
        M_htmlStr += `<tr>
            <td><img src="./img/icon/m/${MB_every.pid}.png" alt="暂无" style="height: 110px;"></td>
            <td style="font-size: 14px;">${MB_every.level}</td>
            <td style="font-size: 14px;">${MB_every.name}</td>
            <td>${MB_every.spaceName}</td>
            <td><img src="./img/monster/${MB_every.mapWhere[0]}.png" alt="暂无" style="height: 180px;"></td>
            <td>${MB_every.showTime}</td>
        </tr>`
    })
    
    M_htmlStr += `<tr>
        <th width="15%">样貌</th>
        <th width="10%">等级</th>
        <th width="20%">名称</th>
        <th width="15%">分布区域</th>
        <th width="30%">地图点位</th>
        <th width="20%">触发事件</th>
    </tr></tbody>
    </table>${buttomTag}`
    
    
    document.getElementsByClassName('window')[0].innerHTML = M_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[1].style.backgroundColor = '#35353555';
        table.rows[i].cells[3].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        table.rows[i].cells[2].setAttribute('title', '分布范围');
        table.rows[i].cells[1].setAttribute('title', '名称');
        // table.rows[i].cells[5].setAttribute('title', '筋力');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    let tableB = document.getElementsByTagName('table')[1];
    
    for (var i = 1; i < tableB.rows.length-1; i++) {
        tableB.rows[i].cells[1].style.backgroundColor = '#35353555';
        tableB.rows[i].cells[3].style.backgroundColor = '#35353555';
        tableB.rows[i].cells[5].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        tableB.rows[i].cells[1].setAttribute('title', '等级');
        tableB.rows[i].cells[3].setAttribute('title', '分布区域');
        tableB.rows[i].cells[2].setAttribute('title', '名称');
        tableB.rows[i].cells[5].setAttribute('title', '触发事件');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }

    // document.getElementsByClassName('window')[0].innerHTML += MB_htmlStr
    showStart()
}
