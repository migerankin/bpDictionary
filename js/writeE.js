// writeE()
function writeE(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    
    var E_htmlStr = `<p class="windowTitle">| E - 强化幻想</p>
    <p class="Topword">强化幻想按形状类型分为五类。单击列名可进行升、降序排列。单击幻想图标可查看其制作材料及获取途径。<br>名称前标注有 * 号的为活动限定幻想。</p>

    <div class="EchoiseBox">
        <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">三叶</div>
        <div>山岳</div>
        <div>矢尻</div>
        <div>风车</div>
        <div>水瓶</div>
        <p class="B_E_searchNum">三叶幻想有 null 条数据</p>
    </div>
    <table id="Etable">
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
        E_htmlStr += `<tr>
        <td style="font-size: 12px;"><img src="./img/icon/e/${E_every.pid}.png" alt="暂缺" title="${index}"></td>
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
    })
    
    E_htmlStr += `<tr>
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
    <th width="18%">词缀</th>
    <th width="12%">词缀效果</th>
    <th width="5%">类型</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = E_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
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

$('.EchoiseBox div').click(function(){
    $('.EchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
    $('.EchoiseBox div').css('color','rgb(55, 194, 192)')
    $('.EchoiseBox div').css('border-color','rgb(55, 194, 192)')
    this.style.backgroundColor='rgb(55, 194, 192)'
    this.style.color='rgb(38, 41, 46)'
    this.style.borderColor='rgb(55, 194, 192, 0)'
    choiseE(this.innerText)
    // if($(this).css('background-color')=='rgb(55, 194, 192)'){
    //     this.style.backgroundColor='rgb(55, 194, 192, 0)'
    //     this.style.color='rgb(55, 194, 192)'
    //     this.style.borderColor='rgb(55, 194, 192)'
    //     choiseE(this.innerText,0)
    // }else{
    //     this.style.backgroundColor='rgb(55, 194, 192)'
    //     this.style.color='rgb(38, 41, 46)'
    //     this.style.borderColor='rgb(55, 194, 192, 0)'
    //     choiseE(this.innerText,1)
    // }
})
    choiseE('三叶')
    $('#Etable img').click(function(){
        drawMakeThingWindow(E_value[this.title])
    })
}
function drawMakeThingWindow(thingArray){
    var sc_list = []
    var windowHtml = ``
    thingArray.madeIt.sucai_C.forEach((sc)=>{
        for (let i = 0; i<SC_value.length; i++){
            if (sc == SC_value[i].name){
                sc_list.push(i);
                break;
            }
        }
    })
    if(thingArray.madeIt.sucai_B==''){
        var sucai_num = 0
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.name.split('<br>')[1]}</p>
        </div>
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">图纸获取</p>
            <p class="tuzhi_how">${thingArray.madeIt.tuzhi}</p>
        </div>
        <div class="ThingWindow_madeBox">
            <p class="madeBox_title">消耗货币</p>
            <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
            <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
            <p class="madeBox_title">小怪材料</p>
            <table>
            <tbody>
                <tr>
                    <th width="10%">名称</th>
                    <th width="5%">数量</th>
                    <th width="8%">获取方式</th>
                    <th width="15%">分布区域</th>
                    <th width="20%">获取对象</th>
                    <th width="50%">地图点位</th>
                </tr>`
        // SC_value.forEach((SC_every)=>{
        //     if(thingArray.madeIt.sucai_C.includes(SC_every.name)){
        //         if(SC_every.mappic=='1'){
        //             windowHtml += `<tr class="canclick">
        //                 <td style="font-size: 14px;">${SC_every.name}</td>
        //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
        //                 <td style="font-size: 14px;">${SC_every.kind}</td>
        //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
        //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
        //                 <td><img src="./img/map/${SC_every.pid}.png" alt="暂无" style="height: 200px;"></td>
        //             </tr>`
        //         }else if(SC_every.mappic=='2'){
        //             var imgSrcString  =``
        //             for(var i=0;i<SC_every.mapWhere.length;i++){
        //                 imgSrcString += `<img src="./img/map/`+SC_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
        //             } 
        //             windowHtml += `<tr class="canclick">
        //             <td style="font-size: 14px;">${SC_every.name}</td>
        //             <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
        //             <td style="font-size: 14px;">${SC_every.kind}</td>
        //             <td style="font-size: 14px;">${SC_every.obtain}</td>
        //             <td style="font-size: 14px;">${SC_every.sfrom}</td>
        //                 <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
        //             </tr>`
        //         }else{
        //             windowHtml += `<tr>
        //                 <td style="font-size: 14px;">${SC_every.name}</td>
        //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
        //                 <td style="font-size: 14px;">${SC_every.kind}</td>
        //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
        //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
        //                 <td>-</td>
        //             </tr>`
        //         }
        //     }
        // })
        for (let i = 0;i<sc_list.length;i++){
            if(SC_value[sc_list[i]].mappic=='1'){
                windowHtml += `<tr class="canclick">
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                    <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                    <td><img src="./img/map/${SC_value[sc_list[i]].pid}.png" alt="暂无" style="height: 200px;"></td>
                </tr>`
            }else if(SC_value[sc_list[i]].mappic=='2'){
                var imgSrcString  =``
                for(var y=0;y<SC_value[sc_list[i]].mapWhere.length;y++){
                    imgSrcString += `<img src="./img/map/`+SC_value[sc_list[i]].mapWhere[y]+`.png" alt="暂无" style="height: 150px;">`
                }
                windowHtml += `<tr class="canclick">
                <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
                </tr>`
            }else{
                windowHtml += `<tr>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                    <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                    <td>-</td>
                </tr>`
            }
        }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        // draggableElement.style.top = window.innerHeight-450+'px'
        // draggableElement.style.left = window.innerWidth-805+'px'
    }else if(thingArray.madeIt.sucai_B!=''&&thingArray.madeIt.sucai_B!='wepen'){
        var sucai_num = 0
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.name.split('<br>')[1]}</p>
        </div>
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">特殊掉落物需求</p>
            `
            var isMB=0
    
            MB_value.forEach((MB_every)=>{
                // console.log(MB_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B);
                if(MB_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B){
                    windowHtml += `<div class="ThingWindow_madeBox" style="height: 180px;"><table><tbody>
                    <tr style="height: 20px; font-size: 14px;">
                        <th width="15%">样貌</th>
                        <th width="5%">等级</th>
                        <th width="15%">名称</th>
                        <th width="10%">种系</th>
                        <th width="15%">分布区域</th>
                        <th width="20%">地图点位</th>
                        <th width="12%">触发事件</th>
                        <th width="20%">数量</th>
                    </tr>`
                    windowHtml += `<tr>
                        <td><img src="./img/icon/m/${MB_every.pid}.png" alt="暂无" style="height: 80px;"></td>
                        <td style="font-size: 14px;">${MB_every.level}</td>
                        <td style="font-size: 14px;">${MB_every.name}</td>
                        <td style="font-size: 14px;">${MB_every.monsKind}</td>
                        <td style="font-size: 14px;">${MB_every.spaceName}</td>
                        <td><img src="./img/monster/${MB_every.mapWhere[0]}.png" alt="暂无" style="height: 120px;"></td>
                        <td style="font-size: 14px;">${MB_every.showTime}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_B_num}</td>
                    </tr>`
                    isMB=1
                }
            })
            if(isMB==0){
            M_value.forEach((M_every)=>{
                // console.log(M_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B);
                if(M_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B){
                    windowHtml += `<div class="ThingWindow_madeBox" style="height: 220px;"><table><tbody>
                    <tr style="height: 20px; font-size: 14px;">
                        <th width="6%">样貌</th>
                        <th width="30%">名称</th>
                        <th width="30%">主要掉落区域</th>
                        <th width="20%">各地图点位<p style="font-size:12px; opacity: .5">（根据左侧主要掉落区域的提示找地点）</p></th>
                        <th width="10%">数量</th>
                    </tr>`
                    var imgSrcString = ``
                    for(var i=0;i<M_every.mapWhere.length;i++){
                        imgSrcString += `<img src="./img/monster/`+M_every.mapWhere[i]+`.png" alt="暂无" style="height: 120px;">`
                    }
                    windowHtml += `<tr class="canclick" style="height: 120px;">
                        <td><img src="./img/icon/m/${M_every.pid}.png" alt="暂无" style="height: 70px;"></td>
                        <td style="font-size: 14px;">${M_every.name}</td>
                        <td>${thingArray.madeIt.otherWords}</td>
                        <td class="manyImgBar" style="max-width: 350px;">${imgSrcString}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_B_num}</td>
                    </tr>`
                    isMB=1
                }
            })
            }
            if(isMB==0){
                    windowHtml += `<p class="ThingWindow_q">${thingArray.madeIt.otherWords}</p>`
                    setTimeout(function(){
                        document.getElementsByClassName('madeBox_title')[0].innerHTML = '制作开启条件'
                    })
                }
            if(thingArray.madeIt.sucai_C[0]!='-'){
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
                    <p class="madeBox_title">小怪材料</p>
                    <table>
                    <tbody>
                        <tr>
                            <th width="15%">名称</th>
                            <th width="5%">数量</th>
                            <th width="8%">获取方式</th>
                            <th width="15%">分布区域</th>
                            <th width="15%">获取对象</th>
                            <th width="50%">地图点位</th>
                        </tr>`
                // SC_value.forEach((SC_every)=>{
                //     if(thingArray.madeIt.sucai_C.includes(SC_every.name)){
                //         if(SC_every.mappic=='1'){
                //             windowHtml += `<tr class="canclick">
                //                 <td style="font-size: 14px;">${SC_every.name}</td>
                //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //                 <td style="font-size: 14px;">${SC_every.kind}</td>
                //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
                //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //                 <td><img src="./img/map/${SC_every.pid}.png" alt="暂无" style="height: 200px;"></td>
                //             </tr>`
                //         }else if(SC_every.mappic=='2'){
                //             var imgSrcString  =``
                //             for(var i=0;i<SC_every.mapWhere.length;i++){
                //                 imgSrcString += `<img src="./img/map/`+SC_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
                //             }
                //             windowHtml += `<tr class="canclick">
                //             <td style="font-size: 14px;">${SC_every.name}</td>
                //             <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //             <td style="font-size: 14px;">${SC_every.kind}</td>
                //             <td style="font-size: 14px;">${SC_every.obtain}</td>
                //             <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //             <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
                //             </tr>`
                //         }else{
                //             windowHtml += `<tr>
                //                 <td style="font-size: 14px;">${SC_every.name}</td>
                //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //                 <td style="font-size: 14px;">${SC_every.kind}</td>
                //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
                //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //                 <td>-</td>
                //             </tr>`
                //         }
                //     }
                // })
                for (let i = 0;i<sc_list.length;i++){
                    if(SC_value[sc_list[i]].mappic=='1'){
                        windowHtml += `<tr class="canclick">
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td><img src="./img/map/${SC_value[sc_list[i]].pid}.png" alt="暂无" style="height: 200px;"></td>
                        </tr>`
                    }else if(SC_value[sc_list[i]].mappic=='2'){
                        var imgSrcString  =``
                        for(var y=0;y<SC_value[sc_list[i]].mapWhere.length;y++){
                            imgSrcString += `<img src="./img/map/`+SC_value[sc_list[i]].mapWhere[y]+`.png" alt="暂无" style="height: 150px;">`
                        }
                        windowHtml += `<tr class="canclick">
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                        <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
                        </tr>`
                    }else{
                        windowHtml += `<tr>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>-</td>
                        </tr>`
                    }
                }
            }else{
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>`
            }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        // draggableElement.style.top = window.innerHeight-450+'px'
        // draggableElement.style.left = window.innerWidth-810+'px'
    }else if(thingArray.madeIt.sucai_B!=''&&thingArray.madeIt.sucai_B=='wepen'){
        var sucai_num = 0
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.kind}</p>
        </div>
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">图纸获取</p>
            <p class="ThingWindow_q">${thingArray.madeIt.tuzhi}</p>`
        if(thingArray.madeIt.sucai_C_num.length!=0){
            windowHtml+=`<p class="madeBox_title">副本掉落物需求</p>`
            for(i in thingArray.madeIt.sucai_F){
                windowHtml += `<p class="ThingWindow_q">${thingArray.madeIt.sucai_F_num[i]}&nbsp;&nbsp;&nbsp;×&nbsp;&nbsp;&nbsp;${thingArray.madeIt.sucai_F[i]}&nbsp;&nbsp;&nbsp;&nbsp;${WSC_value[thingArray.madeIt.sucai_F[i]]}</p>`
            }
        }
            if(thingArray.madeIt.sucai_C[0]!='-'){
                windowHtml+=`
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
                    <p class="madeBox_title">小怪材料</p>
                    <table>
                    <tbody>
                        <tr>
                            <th width="15%">名称</th>
                            <th width="5%">数量</th>
                            <th width="8%">获取方式</th>
                            <th width="15%">分布区域</th>
                            <th width="15%">获取对象</th>
                            <th width="50%">地图点位</th>
                        </tr>`
                // SC_value.forEach((SC_every)=>{
                //     if(thingArray.madeIt.sucai_C.includes(SC_every.name)){
                //         if(SC_every.mappic=='1'){
                //             windowHtml += `<tr class="canclick">
                //                 <td style="font-size: 14px;">${SC_every.name}</td>
                //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //                 <td style="font-size: 14px;">${SC_every.kind}</td>
                //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
                //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //                 <td><img src="./img/map/${SC_every.pid}.png" alt="暂无" style="height: 200px;"></td>
                //             </tr>`
                //         }else if(SC_every.mappic=='2'){
                //             var imgSrcString  =``
                //             for(var i=0;i<SC_every.mapWhere.length;i++){
                //                 imgSrcString += `<img src="./img/map/`+SC_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
                //             }
                //             windowHtml += `<tr class="canclick">
                //             <td style="font-size: 14px;">${SC_every.name}</td>
                //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //                 <td style="font-size: 14px;">${SC_every.kind}</td>
                //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
                //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //                 <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
                //             </tr>`
                //         }else{
                //             windowHtml += `<tr>
                //                 <td style="font-size: 14px;">${SC_every.name}</td>
                //                 <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                //                 <td style="font-size: 14px;">${SC_every.kind}</td>
                //                 <td style="font-size: 14px;">${SC_every.obtain}</td>
                //                 <td style="font-size: 14px;">${SC_every.sfrom}</td>
                //                 <td>-</td>
                //             </tr>`
                //         }
                //     }
                // })
                for (let i = 0;i<sc_list.length;i++){
                    if(SC_value[sc_list[i]].mappic=='1'){
                        windowHtml += `<tr class="canclick">
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td><img src="./img/map/${SC_value[sc_list[i]].pid}.png" alt="暂无" style="height: 200px;"></td>
                        </tr>`
                    }else if(SC_value[sc_list[i]].mappic=='2'){
                        var imgSrcString  =``
                        for(var y=0;y<SC_value[sc_list[i]].mapWhere.length;y++){
                            imgSrcString += `<img src="./img/map/`+SC_value[sc_list[i]].mapWhere[y]+`.png" alt="暂无" style="height: 150px;">`
                        }
                        windowHtml += `<tr class="canclick">
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                        <td class="manyImgBar" style="max-width: 300px;">${imgSrcString}</td>
                        </tr>`
                    }else{
                        windowHtml += `<tr>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].obtain}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>-</td>
                        </tr>`
                    }
                }
            }else{
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>`
            }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        // draggableElement.style.left = window.innerWidth-810+'px'
    }

}