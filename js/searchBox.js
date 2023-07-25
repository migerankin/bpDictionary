
    var search = document.getElementsByClassName("blue-input")[0];
    var selectedId = document.getElementById("selectedId")
    var TextAnswerBoxColor = ''
function showList(){
    if(nowPage==0){
        TextAnswerBoxColor = '#000000'
    }else{
        TextAnswerBoxColor = 'aliceblue'
    }
	var res = searchByIndexOf(search.value,E_value);
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor};" onclick="searchMessage('${res[i]}',1)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">E幻想</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
    res = searchByIndexOf(search.value,B_value)
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor}" onclick="searchMessage('${res[i]}',2)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">B幻想</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
    res = searchByIndexOf(search.value,M_value)
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor}" onclick="searchMessage('${res[i]}',3)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">小怪</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
    res = searchByIndexOf(search.value,MB_value)
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor}" onclick="searchMessage('${res[i]}',4)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">Boss</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
    res = searchByIndexOf(search.value,SC_value)
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor}" onclick="searchMessage('${res[i]}',5)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">材料</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
    res = searchByIndexOf(search.value,W_value)
    for(var i=0;i<res.length;i++){
		var li = document.createElement("li");
		li.innerHTML = `<div style="color: ${TextAnswerBoxColor}" onclick="searchMessage('${res[i]}',6)">${res[i]}<p style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%);">武器</p></div>`;
		document.getElementById("drop").appendChild(li);
	}
	
}
 
search.oninput = function getMoreContents() {	
 
	//删除ul
	var drop = document.getElementById("drop");
	selectedId.removeChild(drop);
	//把ul添加回来
	var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);
	
	showList();
}
 
// 添加获取焦点事件
search.onfocus = function(){
    	// 初始下拉列表
        var originalUl = document.createElement("ul");
        originalUl.id = "drop";
        selectedId.appendChild(originalUl);
        $('.blue-input').css('opacity','1')
        // $('.blue-input').css('width','280px')
	showList();
}
 
//添加失去焦点事件
search.onblur = function(){
//	console.log("soutsout")
document.getElementById("drop").style.opacity = '0'
// document.getElementById("drop").style.width = '220px'
// $('.blue-input').css('width','220px')
    setTimeout(function(){
        var drop = document.getElementById("drop");
	    selectedId.removeChild(drop);
$('.blue-input').css('opacity','.8')
    },200)
}
 
 
 
//模糊查询:利用字符串的indexOf方法
function searchByIndexOf(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    if(keyWord == ""){
    	return [];
    }else{
    	var len = list.length;
	    var arr = [];
	    for(var i=0;i<len;i++){
	        //如果字符串中不包含目标字符会返回-1
	        if(list[i].name.indexOf(keyWord)>=0){
	            arr.push(list[i].name);
	        }
	    }
	    return arr;
    }
    
}
 function searchMessage(message, messageKind){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    clearInterval(interevalPic)
    nowPage = 1

    $('.title').css('border-bottom-color','#25ffa800')
    if(messageKind==1){
        var searchhtml = `<p class="windowTitle">| 查询 E强化幻想</p>
    <p class="Topword">单击幻想图标可查看其制作材料及获取途径。<br>名称前标注有 * 号的为活动限定幻想。</p>
    <table>
        <tbody>
            <tr>
                <th width="7%">图标</th>
                <th width="15%">名称</th>
                <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
                <th width="3%" onclick="rewrite(3)" style="cursor: pointer;">攻击</th>
                <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">防御</th>
                <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">筋力</th>
                <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">耐久</th>
                <th width="3%" onclick="rewrite(7)" style="cursor: pointer;">器用</th>
                <th width="3%" onclick="rewrite(8)" style="cursor: pointer;">知力</th>
                <th width="3%" onclick="rewrite(9)" style="cursor: pointer;">精神</th>
                <th width="16%">词缀</th>
                <th width="14%">词缀效果</th>
                <th width="5%">类型</th>
            </tr>`
    E_value.forEach((E_every, index)=>{
        if(E_every.name.split('<br>')[0]==message.split('<br>')[0]){
            searchhtml += `<tr>
            <td style="font-size: 12px;" id="Etable"><img src="./img/icon/e/${E_every.pid}.png" alt="暂无" title="${index}"></td>
            <td style="font-size: 14px; padding: 0 5px;">${E_every.name}</td>
            <td>${E_every.lev}</td>
            <td>${E_every.atk}</td>
            <td>${E_every.def}</td>
            <td>${E_every.j}</td>
            <td>${E_every.n}</td>
            <td>${E_every.q}</td>
            <td>${E_every.z}</td>
            <td>${E_every.s}</td>
            <td style="font-size: 13px; padding: 0 5px;">${E_every.end}</td>
            <td style="font-size: 13px;">${E_every.endexp}</td>
            <td style="font-size: 13px;">${E_every.kind}</td>
        </tr>`
        }
    })
    
    searchhtml += `</tbody>
    </table><div style="height: 200px;"></div>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = searchhtml

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[2].style.backgroundColor = '#43434360';
        table.rows[i].cells[3].style.backgroundColor = '#35353533';
        table.rows[i].cells[4].style.backgroundColor = '#35353533';
        table.rows[i].cells[3].setAttribute('title', '攻击力');
        table.rows[i].cells[4].setAttribute('title', '防御力');
        table.rows[i].cells[5].setAttribute('title', '筋力');
        table.rows[i].cells[6].setAttribute('title', '耐久');
        table.rows[i].cells[7].setAttribute('title', '器用');
        table.rows[i].cells[8].setAttribute('title', '知力');
        table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    $('#Etable img').click(function(){
        drawMakeThingWindow(E_value[this.title])
    })
    }else if(messageKind==2){
        var searchhtml = `
    <p class="windowTitle">| 查询 B战斗幻想</p>
    <p class="Topword">单击幻想图标可查看其制作材料及获取途径。<br>名称前标注有 * 号的为活动限定幻想。</p>
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
            if(B_every.name.split('<br>')[0]==message.split('<br>')[0]){
                searchhtml += `<tr>
                <td style="font-size: 12px;" id="Btable"><img src="./img/icon/b/${B_every.pid}.png" alt="暂无" title="${index}"></td>
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
            }
        })
        
        searchhtml += `</tbody>
        </table><div style="height: 200px;"></div>${buttomTag}`
        
        document.getElementsByClassName('window')[0].innerHTML = searchhtml

        let table = document.getElementsByTagName('table')[0];

        // 遍历表格的每一行，设置目标列的颜色
        for (var i = 1; i < table.rows.length; i++) {
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
        $('#Btable img').click(function(){
            drawMakeThingWindow(B_value[this.title])
        })
    }else if(messageKind==3){
        var searchhtml = `<p class="windowTitle">| 搜索 地图及自由探索小怪</p>
    <p class="Topword">地图点位上的红色标注为有可能刷新该怪物的地点，左键单击图片可将其放大并可用鼠标滚轮再次放大。<br>对于怪物的弱点与抵抗属性的机制，有两种情况造成的伤害将获得提升：一，装备怪物弱点属性的武器，造成任意属性（除开怪物的抵抗属性）的伤害；二，装备任意属性的武器，对怪物造成弱点属性的伤害。战斗幻想造成的伤害不受情况一的影响，即，不会因为你装备了怪物弱点属性的武器而获得伤害提升。<br>注意：<b>小怪的掉落物有区域分别，并非所有地图上的该种小怪都会掉落材料，</b>如有刷材料的需求请于“幻想与武器素材”列表中进行搜索或翻阅。</p>
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
            if(M_every.name==message){
                var imgSrcString = ``
                for(var i=0;i<M_every.mapWhere.length;i++){
                    imgSrcString += `<img src="./img/monster/`+M_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
                }
                searchhtml += `<tr class="canclick">
                    <td><img src="./img/icon/m/${M_every.pid}.png" alt="暂无" style="height: 100px;"></td>
                    <td style="font-size: 14px;">${M_every.name}</td>
                    <td style="font-size: 14px;">${M_every.monsKind}</td>
                    <td style="font-size: 14px;">${M_every.moreElem}</td>
                    <td style="font-size: 14px;">${M_every.lessElem}</td>
                    <td>${M_every.spaceName}</td>
                    <td class="manyImgBar">${imgSrcString}</td>
                </tr>`
            }
        })
        
        searchhtml += `</tbody></table><div style="height: 200px;"></div>${buttomTag}`

        document.getElementsByClassName('window')[0].innerHTML = searchhtml
        let table = document.getElementsByTagName('table')[0];

        // 遍历表格的每一行，设置目标列的颜色
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[1].style.backgroundColor = '#35353555';
            table.rows[i].cells[3].style.backgroundColor = '#35353555';
            // table.rows[i].cells[3].style.backgroundColor = '#353535';
            // table.rows[i].cells[4].style.backgroundColor = '#353535';
            table.rows[i].cells[2].setAttribute('title', '弱点属性');
            table.rows[i].cells[3].setAttribute('title', '分布范围');
            table.rows[i].cells[1].setAttribute('title', '名称');
            // table.rows[i].cells[5].setAttribute('title', '筋力');
            // table.rows[i].cells[6].setAttribute('title', '耐久');
            // table.rows[i].cells[7].setAttribute('title', '器用');
            // table.rows[i].cells[8].setAttribute('title', '知力');
            // table.rows[i].cells[9].setAttribute('title', '精神力');
        }
        showStart()
    }else if(messageKind==4){
        var searchhtml = `<p class="windowTitle">| 搜索 地图及自由探索 Boss</p><p class="Topword">地图点位上的红色标注为有可能刷新该怪物的地点，左键单击图片可将其放大并可用鼠标滚轮再次放大。<br>>Boss 刷新时将在同区域内的地图范围内进行图标广播。Boss 的刷新通常都具有数十分钟的冷却时间。</p>
        <table>
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
            if(MB_every.name==message){
                searchhtml += `<tr class="canclick">
                    <td><img src="./img/icon/m/${MB_every.pid}.png" alt="暂无" style="height: 110px;"></td>
                    <td style="font-size: 14px;">${MB_every.level}</td>
                    <td style="font-size: 14px;">${MB_every.name}</td>
                    <td style="font-size: 14px;">${MB_every.monsKind}</td>
                    <td>${MB_every.spaceName}</td>
                    <td><img src="./img/monster/${MB_every.mapWhere[0]}.png" alt="暂无" style="height: 180px;"></td>
                    <td>${MB_every.showTime}</td>
                </tr>`
            }
        })
        
        searchhtml += `</tbody></table><div style="height: 200px;"></div>${buttomTag}`
        
        
        document.getElementsByClassName('window')[0].innerHTML = searchhtml

        let tableB = document.getElementsByTagName('table')[1];
    
        for (var i = 1; i < tableB.rows.length; i++) {
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
        showStart()
    }else if(messageKind==5){
        var searchhtml = `<p class="windowTitle">| 查询 幻想与武器素材</p>
        <p class="Topword">在获取方式为“小怪掉落”的条例中，地图点位为该小怪的分布图；在植物、矿物及水栖采集物的条例中，地图点位为拥有必出采集点的稀有采集物的必出采集点；其他类别的条例和植物、矿物及水栖采集物中的非稀有采集物和暂不具备必出采集点的稀有采集物则不在地图点位中进行标注。</p>
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
        SC_value.forEach((SC_every, index)=>{
            if(SC_every.name==message){
                if(SC_every.mappic=='1'){
                    searchhtml += `<tr class="canclick">
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
                    searchhtml += `<tr class="canclick">
                        <td style="font-size: 14px;">${SC_every.name}</td>
                        <td style="font-size: 14px;">${SC_every.kind}</td>
                        <td>${SC_every.obtain}</td>
                        <td>${SC_every.sfrom}</td>
                        <td class="manyImgBar">${imgSrcString}</td>
                    </tr>`
                }else{
                    searchhtml += `<tr>
                        <td style="font-size: 14px;">${SC_every.name}</td>
                        <td style="font-size: 14px;">${SC_every.kind}</td>
                        <td>${SC_every.obtain}</td>
                        <td>${SC_every.sfrom}</td>
                        <td>-</td>
                    </tr>`
                }
            }
        })
        
        searchhtml += `</tbody></table><div style="height: 200px;"></div>${buttomTag}`
        
        document.getElementsByClassName('window')[0].innerHTML = searchhtml

        let table = document.getElementsByTagName('table')[0];

        // 遍历表格的每一行，设置目标列的颜色
        for (var i = 1; i < table.rows.length; i++) {
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
        showStart()
    }else if(messageKind==6){
        var W_htmlStr = `
        <p class="windowTitle">| 查询 角色武器</p> 
    <p class="Topword">单击列名可进行升、降序排列。单击武器图标可查看其制作材料、图纸及获取途径。</p>
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
            if(W_every.name==message){
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
            }
        })
        
        W_htmlStr += `</tbody>
        </table><div style="height: 200px;"></div>${buttomTag}`
        
        document.getElementsByClassName('window')[0].innerHTML = W_htmlStr

        let table = document.getElementsByTagName('table')[0];

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

        
        $('#Wtable img').click(function(){
            drawMakeThingWindow(W_value[this.title])
        })
    }
 }
//正则匹配
/*function searchByRegExp(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    var len = list.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for(var i=0;i<len;i++){
        //如果字符串中不包含目标字符会返回-1
        if(list[i].match(reg)){
            arr.push(list[i]);
        }
    }
    return arr;
}*/
