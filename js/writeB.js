
var BBox = '全部'
var BElement = '全部'
// writeB()
function writeB(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    BBox = '全部'
    BElement = '全部'
    var B_htmlStr = `
    <p class="windowTitle">| B - 战斗幻想</p>
<p class="Topword">战斗幻想具有三类功能及七类属性。单击列名可进行升、降序排列。单击幻想图标可查看其制作材料及获取途径。<br>名称前标注有 * 号的为活动限定幻想。</p>

<div class="BchoiseBox">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>攻击型</div>
    <div>回复型</div>
    <div>辅助型</div>
</div>
<div class="BchoiseBoxElement">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>冰</div>
    <div>雷</div>
    <div>光</div>
    <div>暗</div>
    <div>火</div>
    <div>土</div>
    <div>无</div>
    <p class="B_E_searchNum">全部类型 全部属性 共有 null 条数据</p>
</div>
<table>
    <tbody>
        <tr>
            <th width="9%">图标</th>
            <th width="15%">名称</th>
            <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
            <th width="3%">属性</th>
            <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">攻击</th>
            <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
            <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">筋力</th>
            <th width="3%" onclick="rewrite(7)" style="cursor: pointer;">耐久</th>
            <th width="3%" onclick="rewrite(8)" style="cursor: pointer;">器用</th>
            <th width="3%" onclick="rewrite(9)" style="cursor: pointer;">知力</th>
            <th width="3%" onclick="rewrite(10)" style="cursor: pointer;">精神</th>
            <th width="16%">词缀</th>
            <th width="12%">词缀效果</th>
            <th width="12%">技能</th>
            <th width="3%" onclick="rewrite(14)" style="cursor: pointer;">冷却</th>
            <th width="5%">类型</th>
        </tr>`
    
    B_value.forEach((B_every, index)=>{
        B_htmlStr += `<tr>
        <td style="font-size: 12px;" id="Btable"><img src="./img/icon/b/${B_every.pid}.png" alt="暂缺" title="${index}"></td>
        <td style="font-size: 14px; padding: 0 5px;">${B_every.name}</td>
        <td>${B_every.lev}</td>
        <td style="font-size: 13px;">${B_every.element}</td>
        <td>${B_every.atk}</td>
        <td>${B_every.def}</td>
        <td>${B_every.j}</td>
        <td>${B_every.n}</td>
        <td>${B_every.q}</td>
        <td>${B_every.z}</td>
        <td>${B_every.s}</td>
        <td style="font-size: 13px; padding: 0 5px;">${B_every.end}</td>
        <td style="font-size: 13px;">${B_every.endexp}</td>
        <td style="font-size: 13px; padding: 8px 5px;">${B_every.skill}</td>
        <td style="font-size: 13px;">${B_every.cd}</td>
        <td style="font-size: 13px;">${B_every.kind}</td>
    </tr>`
    })
    
    B_htmlStr += `<tr>
    <th width="9%">图标</th>
    <th width="15%">名称</th>
    <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
    <th width="3%">属性</th>
    <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">攻击</th>
    <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
    <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">筋力</th>
    <th width="3%" onclick="rewrite(7)" style="cursor: pointer;">耐久</th>
    <th width="3%" onclick="rewrite(8)" style="cursor: pointer;">器用</th>
    <th width="3%" onclick="rewrite(9)" style="cursor: pointer;">知力</th>
    <th width="3%" onclick="rewrite(10)" style="cursor: pointer;">精神</th>
    <th width="16%">词缀</th>
    <th width="12%">词缀效果</th>
    <th width="12%">技能</th>
    <th width="3%" onclick="rewrite(14)" style="cursor: pointer;">冷却</th>
    <th width="5%">类型</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = B_htmlStr

    let table = document.getElementsByTagName('table')[0];

    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部类型 全部属性 共有 ${table.rows.length-2} 条数据`
    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[2].style.backgroundColor = '#43434360';
        table.rows[i].cells[3].style.backgroundColor = '#43434360';
        table.rows[i].cells[4].style.backgroundColor = '#35353533';
        table.rows[i].cells[5].style.backgroundColor = '#35353533';
        table.rows[i].cells[4].setAttribute('title', '攻击力');
        table.rows[i].cells[5].setAttribute('title', '防御力');
        table.rows[i].cells[6].setAttribute('title', '筋力');
        table.rows[i].cells[7].setAttribute('title', '耐久');
        table.rows[i].cells[8].setAttribute('title', '器用');
        table.rows[i].cells[9].setAttribute('title', '知力');
        table.rows[i].cells[10].setAttribute('title', '精神力');
    }

    
    $('.BchoiseBox div').click(function(){
        $('.BchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBox div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBox div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        BBox = this.innerText
        choiseBKind(BBox, BElement)
    })
    $('.BchoiseBoxElement div').click(function(){
        $('.BchoiseBoxElement div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxElement div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxElement div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        BElement = this.innerText
        choiseBKind(BBox, BElement)
    })
    $('#Btable img').click(function(){
        drawMakeThingWindow(B_value[this.title])
    })
}