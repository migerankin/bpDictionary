
var WMkind = '全部'
var WMLevel = '全部'
var WMWord = '全部'
// writeWM()
function writeWM(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    WMkind = '全部'
    WMLevel = '全部'
    WMWord = '全部'
    var WM_htmlStr = `
    <p class="windowTitle">| 武器插头图鉴</p>
<p class="Topword">武器插头根据其产生的效果分为两类，一类为对基础属性的提升，一类为对特点职业的技能的提升。<br>不同级别（G1、G2、G3）的插头起到的提升幅度区间不同，同级别插头也会因镶嵌在武器上时随机的星级不同起到不同的提升效果。</p>

<div class="BchoiseBox">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div style="width: 90px;">基础属性</div>
    <span style="height: 30px; width: 0.5px; background-color: #37c2c0; margin: 0 8px; opacity: .4;"></span>
    <div>剑盾</div>
    <div>双斧</div>
    <div>弓箭</div>
    <div>法杖</div>
    <div>锤子</div>
</div>
<div class="BchoiseBoxElement">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>G1</div>
    <div>G2</div>
    <div>G3</div>
</div>
<div class="BchoiseBoxLevel BchoiseBoxLevelWM" style="flex-wrap: wrap; padding-bottom: 10px;">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>HP</div>
    <div>ST</div>
    <div>攻击力</div>
    <div>防御力</div>
    <div>回复力</div>
    <div>造成伤害增加</div>
    <div>冷却时间缩短</div>
    <div>属性积蓄值增加</div>
    <p class="B_E_searchNum">全部类型 全部级别 全部词条 共有 null 条数据</p>
</div>
<table>
    <tbody>
        <tr>
            <th width="15%">名称</th>
            <th width="15%">类别</th>
            <th width="5%">级别</th>
            <th width="40%">效果</th>
            <th width="40%">获取副本</th>
        </tr>`
    var kind = ``
    var word = ``
    WM_value.forEach((WM_every, index)=>{
        if(WM_every.kind=='1')kind=`基础属性`
        else if(WM_every.kind=='2'&&WM_every.zy=='1')kind=`职业技巧·剑盾`
        else if(WM_every.kind=='2'&&WM_every.zy=='2')kind=`职业技巧·双斧`
        else if(WM_every.kind=='2'&&WM_every.zy=='3')kind=`职业技巧·弓箭`
        else if(WM_every.kind=='2'&&WM_every.zy=='4')kind=`职业技巧·法杖`
        else if(WM_every.kind=='2'&&WM_every.zy=='5')kind=`职业技巧·锤子`
        if(WM_every.kind=='1'&&WM_every.level=='G1')word=WMwhere_value[0].toGet
        else if(WM_every.kind=='1'&&WM_every.level=='G2')word=WMwhere_value[1].toGet
        else if(WM_every.kind=='1'&&WM_every.level=='G3')word=WMwhere_value[2].toGet
        else if(WM_every.kind=='2'&&WM_every.level=='G1')word=WMwhere_value[3].toGet
        else if(WM_every.kind=='2'&&WM_every.level=='G2')word=WMwhere_value[4].toGet
        if(WM_every.kind=='1'){
        WM_htmlStr += `<tr style="padding: 0px;">
        <td style="font-size: 16px;">${WM_every.name}</td>
        <td style="font-size: 16px;">${kind}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${WM_every.level}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${WM_every.xg}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235); padding: 10px;">${word}</td>
    </tr>`
        }else{
            WM_htmlStr += `<tr style="padding: 0px;">
        <td style="font-size: 16px;">${WM_every.name}</td>
        <td style="font-size: 16px;">${kind}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235);">${WM_every.level}</td>
        <td style="font-size: 16px;color: rgb(235, 235, 235); padding: 2px 0 15px;"><img src="./img/icon/s/${WM_every.imgNum}.png" style="display: inline-block; height: 45px;margin-bottom: -3px;"><div>${WM_every.xg.split('・')[0]}</div><div">${WM_every.xg.split('・')[1]}</div></td>
        <td style="font-size: 16px;color: rgb(235, 235, 235); padding: 10px;">${word}</td>
    </tr>`
        }
    })
    
    WM_htmlStr += `<tr>
    <th width="9%">图标</th>
    <th width="15%">名称</th>
    <th width="5%">级别</th>
    <th width="40%">效果</th>
    <th width="40%">获取副本</th>

</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = WM_htmlStr

    let table = document.getElementsByTagName('table')[0];

    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部类型 全部级别 全部词条 共有 ${table.rows.length-2} 条数据`
    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        if(table.rows[i].cells[2].innerText=='G1')table.rows[i].style.backgroundColor = '#30303000';
        else if(table.rows[i].cells[2].innerText=='G2')table.rows[i].style.backgroundColor = '#30303055';
        else if(table.rows[i].cells[2].innerText=='G3')table.rows[i].style.backgroundColor = '#30303099';
        // table.rows[i].cells[5].style.backgroundColor = '#353535';
    }

    
    $('.BchoiseBox div').click(function(){
        $('.BchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBox div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBox div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WMkind = this.innerText
        choiseWMKind(WMkind, WMLevel, WMWord)
    })
    $('.BchoiseBoxElement div').click(function(){
        $('.BchoiseBoxElement div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxElement div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxElement div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WMLevel = this.innerText
        choiseWMKind(WMkind, WMLevel, WMWord)
    })
    $('.BchoiseBoxLevel div').click(function(){
        $('.BchoiseBoxLevel div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevel div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevel div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        WMWord = this.innerText
        choiseWMKind(WMkind, WMLevel, WMWord)
    })
}