var scWhere = `全地图`
var scKind = `全种类`
function writeSC(){
    nowPage = 1
    scWhere = `全地图`
    scKind = `全种类`
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
//     <div class="goToId">
//     <div onclick="scrollToSection('zhiwu')">植物</div>
//     <div onclick="scrollToSection('kuangwu')">矿物</div>
//     <div onclick="scrollToSection('shuiqi')">水栖</div>
//     <div onclick="scrollToSection('xiaoguai')">小怪</div>
//     <div onclick="scrollToSection('qita')">其他</div>
// </div>`
    var SC_htmlStr = `<p class="windowTitle">| 幻想与武器素材</p>
    <p class="Topword">该列表仅包含大地图及自由探索地图中的小怪掉落物和植物、矿物及水栖采集物，不包含大地图及自由探索地图中的 Boss 掉落物和多人副本特殊产物。<br>在获取方式为“小怪掉落”的条例中，地图点位为该小怪的分布图；在植物、矿物及水栖采集物的条例中，地图点位为拥有必出采集点的稀有采集物的必出采集点；其他类别的条例和植物、矿物及水栖采集物中的非稀有采集物和暂不具备必出采集点的稀有采集物则不在地图点位中进行标注。</p>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWhere" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -20px; margin-top: -5px;">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);  width: auto;">全地图</div>
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
</div>
<div class="BchoiseBoxLevel BchoiseBoxLevelWM" style="flex-wrap: wrap; padding-bottom: 0px; border: none;">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全种类</div>
    <div>植物采集</div>
    <div>矿物采集</div>
    <div>水栖采集</div>
    <div>小怪掉落</div>
    <div>其他</div>
    <p class="B_E_searchNum">全部地域 全部类型 共有 null 条数据</p>
</div>
    <table>
        <tbody>
            <tr>
                <th width="10%">名称</th>
                <th width="8%">获取方式</th>
                <th width="15%">分布区域</th>
                <th width="20%">获取对象</th>
                <th width="50%">地图点位</th>
            </tr>`
    var imgSrcString = ``
    SC_value.forEach((SC_every)=>{
        if(SC_every.pid=='7901'){
            var trNameId = `<tr id="qita" class="canclick">`
        }else if(SC_every.pid=='7006'){
            var trNameId = `<tr id="zhiwu" class="canclick">`
        }else if(SC_every.pid=='7207'){
            var trNameId = `<tr id="kuangwu" class="canclick">`
        }else if(SC_every.pid=='7401'){
            var trNameId = `<tr id="shuiqi" class="canclick">`
        }else if(SC_every.pid=='7501'){
            var trNameId = `<tr id="xiaoguai" class="canclick">`
        }else{
            var trNameId = `<tr class="canclick">`
        }
        if(SC_every.mappic=='1'){
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>${SC_every.obtain}</td>
                <td>${SC_every.sfrom}</td>
                <td><img src="./img/map/${SC_every.pid}.png" alt="暂无" style="height: 200px;"></td>
            </tr>`
        }else if(SC_every.mappic=='2'){
            for(var i=0;i<SC_every.mapWhere.length;i++){
                imgSrcString += `<img src="./img/map/`+SC_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
            }
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>${SC_every.obtain}</td>
                <td>${SC_every.sfrom}</td>
                <td class="manyImgBar">${imgSrcString}</td>
            </tr>`
        }else{
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>${SC_every.obtain}</td>
                <td>${SC_every.sfrom}</td>
                <td>-</td>
            </tr>`
        }
        
    })
    
    SC_htmlStr += `<tr>
    <th width="10%">名称</th>
    <th width="8%">获取方式</th>
    <th width="15%">分布区域</th>
    <th width="20%">获取对象</th>
    <th width="50%">地图点位</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = SC_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[0].style.backgroundColor = '#35353555';
        table.rows[i].cells[2].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        table.rows[i].cells[2].setAttribute('title', '分布范围');
        table.rows[i].cells[3].setAttribute('title', '获取对象');
        // table.rows[i].cells[5].setAttribute('title', '筋力');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部地域 全部种类 共有 ${table.rows.length-2} 条数据`

    showStart()
    $('.BchoiseBoxLevelWhere div').click(function(){
        $('.BchoiseBoxLevelWhere div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWhere div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWhere div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        scWhere = this.innerText
        choiseSCwhere(scWhere, scKind)
    })
    $('.BchoiseBoxLevelWM div').click(function(){
        $('.BchoiseBoxLevelWM div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWM div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWM div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        scKind = this.innerText
        choiseSCwhere(scWhere, scKind)
    })
}