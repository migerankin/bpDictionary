
var WKind = '全部'
var WElement = '全部'
var WLevel = '全部'
// writeW()
function writeW(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    WKind = '全部'
    WElement = '全部'
    WLevel = '全部'
    var W_htmlStr = `
    <p class="windowTitle">| 武器图鉴</p>
<p class="Topword">角色武器目前具有五种类型，七种元素以及七个等级段。单击列名可进行升、降序排列。<br>单击武器图标可查看其制作材料、图纸及获取途径。</p>

<div class="BchoiseBox">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>剑盾</div>
    <div>双斧</div>
    <div>弓箭</div>
    <div>法杖</div>
    <div>锤子</div>
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
</div>
<div class="BchoiseBoxLevel">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>50</div>
    <div>40</div>
    <div>35</div>
    <div>25</div>
    <div>10</div>
    <div>2</div>
    <div>1</div>
    <p class="B_E_searchNum">全部类型 全部属性 共有 null 条数据</p>
</div>
<table>
    <tbody>
        <tr>
            <th width="6%">图标</th>
            <th width="8%">名称</th>
            <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
            <th width="3%" onclick="rewrite(3)" style="cursor: pointer;">攻击</th>
            <th width="4%" onclick="rewrite(4)" style="cursor: pointer;">会心</th>
            <th width="3%">属性</th>
            <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">属性<br>攻击</th>
            <th width="2%" onclick="rewrite(7)" style="cursor: pointer;">筋力</th>
            <th width="2%" onclick="rewrite(8)" style="cursor: pointer;">耐久</th>
            <th width="2%" onclick="rewrite(9)" style="cursor: pointer;">器用</th>
            <th width="2%" onclick="rewrite(10)" style="cursor: pointer;">知力</th>
            <th width="2%" onclick="rewrite(11)" style="cursor: pointer;">精神</th>
            <th width="4%">种类</th>
            <th width="12%">特攻</th>
        </tr>`
    
    W_value.forEach((W_every, index)=>{
        W_htmlStr += `<tr style="padding: 0px;">
        <td style="font-size: 12px;" id="Wtable"><img src="./img/icon/w/${W_every.pid}.png" alt="暂缺" title="${index}"></td>
        <td style="font-size: 16px; padding: 0 5px;color: rgb(235, 235, 235);">${W_every.name}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.level}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.atk}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.huix}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.elem}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.elemAtk}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.j}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.n}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.q}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.z}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.s}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.kind}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${W_every.morePower}</td>
    </tr>`
    })
    
    W_htmlStr += `<tr>
    <th width="6%">图标</th>
    <th width="8%">名称</th>
    <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
    <th width="3%" onclick="rewrite(3)" style="cursor: pointer;">攻击</th>
    <th width="4%" onclick="rewrite(4)" style="cursor: pointer;">会心</th>
    <th width="3%">属性</th>
    <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">属性<br>攻击</th>
    <th width="2%" onclick="rewrite(7)" style="cursor: pointer;">筋力</th>
    <th width="2%" onclick="rewrite(8)" style="cursor: pointer;">耐久</th>
    <th width="2%" onclick="rewrite(9)" style="cursor: pointer;">器用</th>
    <th width="2%" onclick="rewrite(10)" style="cursor: pointer;">知力</th>
    <th width="2%" onclick="rewrite(11)" style="cursor: pointer;">精神</th>
    <th width="4%">种类</th>
    <th width="12%">特攻</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = W_htmlStr

    let table = document.getElementsByTagName('table')[0];

    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部类型 全部属性 共有 ${table.rows.length-2} 条数据`
    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[2].style.backgroundColor = '#39393988';
        table.rows[i].cells[3].style.backgroundColor = '#30303066';
        table.rows[i].cells[4].style.backgroundColor = '#30303066';
        // table.rows[i].cells[5].style.backgroundColor = '#353535';
        table.rows[i].cells[2].setAttribute('title', '等级');
        table.rows[i].cells[3].setAttribute('title', '攻击力');
        table.rows[i].cells[4].setAttribute('title', '会心');
        table.rows[i].cells[5].setAttribute('title', '属性');
        table.rows[i].cells[6].setAttribute('title', '属性攻击');
        table.rows[i].cells[7].setAttribute('title', '筋力');
        table.rows[i].cells[8].setAttribute('title', '耐久');
        table.rows[i].cells[9].setAttribute('title', '器用');
        table.rows[i].cells[10].setAttribute('title', '知力');
        table.rows[i].cells[11].setAttribute('title', '精神力');
    }

    
    $('.BchoiseBox div').click(function(){
        $('.BchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBox div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBox div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WKind = this.innerText
        choiseWKind(WKind, WElement, WLevel)
    })
    $('.BchoiseBoxElement div').click(function(){
        $('.BchoiseBoxElement div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxElement div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxElement div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WElement = this.innerText
        choiseWKind(WKind, WElement, WLevel)
    })
    $('.BchoiseBoxLevel div').click(function(){
        $('.BchoiseBoxLevel div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevel div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevel div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WLevel = this.innerText
        choiseWKind(WKind, WElement, WLevel)
    })
    $('#Wtable img').click(function(){
        drawMakeThingWindow(W_value[this.title])
    })


    

$('.moreMessage').hover(function(){
    var maxwidth = ``
    var messagehtml  = `<p class="moreTitle">${WTG_value[$(this).attr('title')].cName}</p>`
    if(WTG_value[$(this).attr('title')].mons_normol.length!=0){
        if($(this).attr('title')==5)maxwidth=`style="max-width: 500px;"`
        else if($(this).attr('title')==22)maxwidth=`style="max-width: 350px;"`
        messagehtml += `<div class="moreNormalBox"${maxwidth}>`
        for(var iii=0;iii<WTG_value[$(this).attr('title')].mons_normol.length;iii++){
            messagehtml += `<div><img src="./img/icon/m/${M_value[WTG_value[$(this).attr('title')].mons_normol[iii]].pid}.png" class="moreNormalImg"><p class="moreNormalName">${M_value[WTG_value[$(this).attr('title')].mons_normol[iii]].name}</p></div>`
        }
        messagehtml += `</div>`
    }
    if(WTG_value[$(this).attr('title')].mons_boss.length!=0){
        if($(this).attr('title')==5)maxwidth=`style="max-width: 250px;"`
        else if($(this).attr('title')==22)maxwidth=`style="max-width: 250px;"`
        messagehtml += `<div class="moreBossBox"${maxwidth}>`
    for(var iii=0;iii<WTG_value[$(this).attr('title')].mons_boss.length;iii++){
        messagehtml += `<div><img src="./img/icon/m/${MB_value[WTG_value[$(this).attr('title')].mons_boss[iii]].pid}.png" class="moreBossImg"><p class="moreBossName">${MB_value[WTG_value[$(this).attr('title')].mons_boss[iii]].name}</p></div>`
    }
    messagehtml += `</div>`
}

    $(this).after(`<div class="moreWindow">${messagehtml}</div>`);
},function(){
    $(this).parent().find('.moreWindow').css('display','none')
})
}