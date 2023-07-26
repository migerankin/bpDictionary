
var MkindName = '全种系'
var Mwhere = '全地域'
function writeM(){
    nowPage = 1
    MkindName = '全种系'
    Mwhere = '全地域'
    clearInterval(interevalPic)
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'

    document.getElementsByClassName('floatBox')[0].innerHTML = `<div class="goToId">
    <div onclick="scrollToSection('xiaoguai')">小怪</div>
    <div onclick="scrollToSection('Boss')">Boss</div>
</div>`
    var M_htmlStr = `<p class="windowTitle">| 地图及自由探索怪物清单</p>
    <p class="Topword">该清单包含野外地图及自由探索地图中的小怪及 Boss ,暂不包含仅在多人副本及主线剧情副本中出现的怪物。<br>地图点位上的红色标注为有可能刷新该怪物的地点，左键单击图片可将其放大并可用鼠标滚轮再次放大。<br>对于怪物的弱点与抵抗属性，有两种情况造成的伤害将获得提升：一，装备怪物弱点属性的武器，造成任意属性（除开怪物的抵抗属性）的伤害；二，装备任意属性的武器，对怪物造成弱点属性的伤害。战斗幻想造成的伤害不受上述情况一的影响，即，不会随角色装备的武器属性的变化而变化。</p>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWhere" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -20px; margin-top: -5px;">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全地域</div>
    <div>アステリア平原</div>
    <div>バハマール高原</div>
    <div>モンテノール渓谷</div>
    <div>エバーグリーン砂漠</div>
    <div>巨竜の爪痕・自由探索</div>
    <div>ボルオム遺跡・自由探索</div>
    <div>木漏れ日射す林道・自由探索</div>
    <div>ともし火の森・自由探索</div>
    <div>雨止まぬ森・自由探索</div>
    <div>枷神の産屋・自由探索</div>
    <p class="B_E_searchNum" style="bottom: 10px;">全部种系 共有 null 条数据</p>
</div>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWM" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -10px; height: 28px; overflow: hidden; transition: .5s;" id="MonsterKindShowAll">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全种系</div>
    <div>ボア系</div>
    <div>ゴート系</div>
    <div>フォックス系</div>
    <div>ホーク系</div>
    <div>スフィア系</div>
    <div>ゴブリン系</div>
    <div>ムーク系</div>
    <div>ドゴルマン系</div>
    <div>ミーン系</div>
    <div>バイパー系</div>
    <div>クアッドアーム系</div>
    <div>ゴーレム系</div>
    <div>トライポッド系</div>
    <div>ドラウグ系</div>
    <div>リザード系</div>
    <div>エビキノコ系</div>
    <div>スカイフィッシュ系</div>
    <div>カニクモ系</div>
    <div>ナッポ系</div>
    <div>ヤンマ系</div>
    <div>エレメント系</div>
    <div>オーガ系</div>
    <div>山賊系</div>
    <div>ゾルキシア系</div>
    <p class="MshowMoreTag">[展开]</p>
</div>

    <p class="M_mbTile" id="xiaoguai" style="margin-top: 20px;">地图及自由探索中的小怪</p>
    <p class="Topword">以下为小怪清单，注意：<b>小怪的掉落物有区域分别，并非所有地图上的该种小怪都会掉落材料，</b>如有刷材料的需求请于材料列表中进行搜索或翻阅。</p>
    <table>
        <tbody>
            <tr>
                <th width="12%">样貌</th>
                <th width="12%">名称</th>
                <th width="12%">种系</th>
                <th width="5%">弱点属性</th>
                <th width="5%">抵抗属性</th>
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
            <td style="font-size: 14px;">${M_every.monsKind}</td>
            <td style="font-size: 14px;">${M_every.moreElem}</td>
            <td style="font-size: 14px;">${M_every.lessElem}</td>
            <td>${M_every.spaceName}</td>
            <td class="manyImgBar">${imgSrcString}</td>
        </tr>`
    })
    
    M_htmlStr += `<tr>
    <th width="12%">样貌</th>
    <th width="12%">名称</th>
    <th width="12%">种系</th>
    <th width="5%">弱点属性</th>
    <th width="5%">抵抗属性</th>
    <th width="20%">分布区域</th>
    <th width="50%">地图点位</th>
</tr></tbody>
    </table>`

    M_htmlStr += `<p class="M_mbTile" id="Boss" style="margin-top: 40px;">地图及自由探索中的 Boss</p>
    <p class="Topword">以下为 Boss 清单。Boss 刷新时将在同区域内的地图范围内进行图标广播。Boss 的刷新通常都具有数十分钟的冷却时间。</p>
    <table id="monsterBossId">
        <tbody>
            <tr>
                <th width="15%">样貌</th>
                <th width="5%">等级</th>
                <th width="12%">名称</th>
                <th width="10%">种系</th>
                <th width="15%">分布区域</th>
                <th width="30%">地图点位</th>
                <th width="20%">触发事件</th>
            </tr>`
    
    MB_value.forEach((MB_every)=>{
        M_htmlStr += `<tr>
            <td><img src="./img/icon/m/${MB_every.pid}.png" alt="暂无" style="height: 110px;"></td>
            <td style="font-size: 14px;">${MB_every.level}</td>
            <td style="font-size: 14px;">${MB_every.name}</td>
            <td style="font-size: 14px;">${MB_every.monsKind}</td>
            <td>${MB_every.spaceName}</td>
            <td><img src="./img/monster/${MB_every.mapWhere[0]}.png" alt="暂无" style="height: 180px;"></td>
            <td>${MB_every.showTime}</td>
        </tr>`
    })
    
    M_htmlStr += `<th width="15%">样貌</th>
    <th width="5%">等级</th>
    <th width="12%">名称</th>
    <th width="10%">种系</th>
    <th width="15%">分布区域</th>
    <th width="30%">地图点位</th>
    <th width="20%">触发事件</th><tr>
    </tr></tbody>
    </table>${buttomTag}`
    
    
    document.getElementsByClassName('window')[0].innerHTML = M_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[1].style.backgroundColor = '#35353555';
        table.rows[i].cells[3].style.backgroundColor = '#35353555';
        table.rows[i].cells[5].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        table.rows[i].cells[4].setAttribute('title', '分布范围');
        table.rows[i].cells[3].setAttribute('title', '抵抗属性');
        table.rows[i].cells[2].setAttribute('title', '弱点属性');
        table.rows[i].cells[1].setAttribute('title', '名称');
        // table.rows[i].cells[5].setAttribute('title', '筋力');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    let tableB = document.getElementsByTagName('table')[1];
    
    for (var i = 1; i < tableB.rows.length-2; i++) {
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
    
    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部地域 全部种系 共有 ${table.rows.length+tableB.rows.length-5} 条数据`
    // document.getElementsByClassName('window')[0].innerHTML += MB_htmlStr
    showStart()
    $('.BchoiseBoxLevelWhere div').click(function(){
        $('.BchoiseBoxLevelWhere div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWhere div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWhere div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        Mwhere = this.innerText
        choiseMKind(Mwhere, MkindName)
    })
    $('.BchoiseBoxLevelWM div').click(function(){
        $('.BchoiseBoxLevelWM div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWM div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWM div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        MkindName = this.innerText
        choiseMKind(Mwhere, MkindName)
    })
    
document.getElementsByClassName('MshowMoreTag')[0].onclick=function(){
    if(document.getElementById('MonsterKindShowAll').style.height!='160px'){
    document.getElementById('MonsterKindShowAll').style.height = '160px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[收起]'}
    else{
    document.getElementById('MonsterKindShowAll').style.height = '28px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[展开]'}
}
}