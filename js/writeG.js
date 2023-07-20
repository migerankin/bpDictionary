// writeG()
function writeG(){
    nowPage = 0
    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    document.getElementsByClassName('window')[0].style.paddingTop = '20px'
    draggableElement.style.top = window.innerHeight-450+'px'
    draggableElement.style.left = window.innerWidth+'px'
    var Ghtml = `<div class="mainPic" style="background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(./img/pagemain${(Math.floor(Math.random() * 3)+1)}.png) 80% 40%;background-size: 100% auto;"></div>
    <div class="mainTitle">BLUE PROTOCOL DICTIONARY</div>
    <div style="background-color: rgba(247, 255, 255, 0.968); padding: 5px 0; width: 95%; margin: 0 auto; border-radius: 3px;" class="allbox">
        <div class="nowActivity" style="justify-content: start;">
            <div class="mainMessage"><p>/ 近期实装</p></div>
            <div style="flex-direction: column; column; width: 100%;">`
            var newWeapon = `<div class="newThings"><p>武器</p><div>`
            var newB = `<div class="newThings"><p>战斗幻想</p><div>`
            var newE = `<div class="newThings"><p>强化幻想</p><div>`
            var newPeople = `<div class="newThings"><p>职业</p><div>`
            var kachi = ``
            var VacTitle = ``
            var VacPic = ``
            var willThings = ``
            var kachiNum = 0
            G_value.forEach((G_every, index) => {
                if(G_every.isShow=='1'&&G_every.kind=='newThings'){
                    if(G_every.kindSecond=='2'){
                        newWeapon += `<img src="./img/activity/${G_every.picId}.png" onclick="searchMessage('${G_every.EBWname}', 6)" class="newThingsImgBtn" alt="暂缺" title="${G_every.EBWname}">`
                    }else if(G_every.kindSecond=='1'){
                        newPeople += `<span class="newZY">${G_every.words}<span>`
                    }else if(G_every.kindSecond=='3'){
                        newE += `<img src="./img/activity/${G_every.picId}.png" alt="暂缺" onclick="searchMessage('${G_every.EBWname}', 1)" class="newThingsImgBtn" title="${G_every.EBWname}">`
                    }else if(G_every.kindSecond=='4'){
                        newB += `<img src="./img/activity/${G_every.picId}.png" alt="暂缺" onclick="searchMessage('${G_every.EBWname}', 2)" class="newThingsImgBtn" title="${G_every.EBWname}">`
                    }
                }
                if(G_every.isShow==1&&G_every.kind=='nowActivity'){
                    if(G_every.kindSecond=='2'){
                        VacPic = `<img src="./img/activity/${G_every.picId}.png" alt="暂缺">`
                        VacTitle = G_every.words
                    }
                    if(G_every.kindSecond=='1'){
                        kachi += `<img src="./img/activity/${G_every.picId}.png" alt="暂缺" style="margin-left: 0;">`
                        kachiNum +=1
                    }
                }
                if(G_every.isShow==1&&G_every.kind=='willThings'){
                        if(G_every.urlOut!=''&&G_every.justWord==''){
                            willThings += `<div class="newThings qbao">
                            <p>${G_every.words}</p>
                            <div style="position: relative;"><a href="${G_every.urlOut}" target="_blank""><img src="./img/icon/vdo.png" style="height: 40px; position: absolute; margin: 74px 145px;"><img src="./img/activity/${G_every.picId}.png" alt="暂缺" style="cursor: pointer;" class="vdoImg"></a></div>
                        </div>`
                        }else if(G_every.urlOut!=''&&G_every.justWord!=''){
                            willThings += `<div class="newThings qbao">
                            <p>${G_every.words}</p>
                            <div style="width: 78%; display: flex; border: none; padding: 0; justify-content: space-between;">
                            <div style="position: relative; width: auto; margin-left: 0;"><a href="${G_every.urlOut}" target="_blank""><img src="./img/icon/vdo.png" style="height: 40px; position: absolute; margin: 74px 145px;"><img src="./img/activity/${G_every.picId}.png" alt="暂缺" style="cursor: pointer; class="vdoImg""></a>
                            </div>
                            <p style="font-size: 18px; line-height: 25px; width: 45%; box-sizing: border-box; padding: 0 20px;">${G_every.justWord}</p>
                            </div>
                        </div>`
                        }else if(G_every.picId==''){
                            willThings += `<div class="newThings qbao">
                            <p>${G_every.words}</p>
                            <p style="font-size: 18px; line-height: 25px; width: 78%; box-sizing: border-box; padding: 0 20px; margin-left: 40px;">${G_every.justWord}</p>
                        </div>`
                        }else{
                            willThings += `<div class="newThings qbao">
                            <p>${G_every.words}</p>
                            <div><img src="./img/activity/${G_every.picId}.png" alt="暂缺"></div>
                        </div>`
                        }
                }
            });
            if(newWeapon!=`<div class="newThings"><p>武器</p><div>`){
                Ghtml+=newWeapon+`</div></div>`
            }
            if(newB!=`<div class="newThings"><p>战斗幻想</p><div>`){
                Ghtml+=newB+`</div></div>`
            }
            if(newE!=`<div class="newThings"><p>强化幻想</p><div>`){
                Ghtml+=newE+`</div></div>`
            }
            if(newPeople!=`<div class="newThings"><p>职业</p><div>`){
                Ghtml+=newPeople+`</div></div>`
            }
            Ghtml+=`</div>
        </div>
        <div class="nowActivity">
            <div class="mainMessage"><p>/ 主题活动</p></div>
            <div class="AcMessage">${VacTitle}</div>
            <div style="width: 70%; display: flex;">
                <div class="AcImg">${VacPic}</div>
                <div class="KcImg">${kachi}</div>
            </div>
        </div>
        <div class="nowActivity">
            <div class="mainMessage"><p>/ 情报</p></div>
            <div style="flex-direction: column; width: 100%;">
                ${willThings}
            </div>
        </div>`
        var commentBoxs = ``
        var borderColors = ``
        for(var i=0; i<10; i++){
            if(returnArray[i].newsCategory.newsCategoryId==1)borderColors=`#00ffd3`
            else if(returnArray[i].newsCategory.newsCategoryId==3)borderColors=`#ff7900`
            else if(returnArray[i].newsCategory.newsCategoryId==4)borderColors=`#ff2a00`
            else if(returnArray[i].newsCategory.newsCategoryId==5)borderColors=`#ffc800`
            else if(returnArray[i].newsCategory.newsCategoryId==2)borderColors=`#0086ff`
            commentBoxs += `<a class="commentBox" href="https://blue-protocol.com/news/${returnArray[i].newsId}" target="_blank">
                <p class="commentTime" style="border-color: ${borderColors};">${returnArray[i].createdAt.split('T')[0].replace('-','.').replace('-','.')}</p>
                <p class="commentText">${returnArray[i].title.replace('【',' [ ').replace('】',' ] ')}</p>
            </a>`
        }
        // console.log(returnArray);
        Ghtml += `
        <div class="nowActivity">
            <div class="mainMessage"><p>/ 官方公告</p></div>
            <div style="flex-direction: column; width: 100%;">
                ${commentBoxs}
                <a href="https://blue-protocol.com/news/" target="_blank" class="commentMore">更多 /</a>
            </div>
        </div>`
        Ghtml += `</div>
        ${buttomTag}
        </div>
        </div>
    </div>`
    
    document.getElementsByClassName('window')[0].innerHTML = Ghtml

    var i = kachiNum
    
    var marginLEFT = parseInt(document.getElementsByClassName('KcImg')[0].getElementsByTagName('img')[0].style.marginLeft.replace('px',''))
    interevalPic = setInterval(function(){
        if(kachiNum>1){
            document.getElementsByClassName('KcImg')[0].getElementsByTagName('img')[0].style.marginLeft = marginLEFT-350+'px'
            marginLEFT -= 350
            kachiNum-=1
        }else{
            document.getElementsByClassName('KcImg')[0].getElementsByTagName('img')[0].style.marginLeft = '0px'
            marginLEFT = 0
            kachiNum = i
        }
    },4500)
}
