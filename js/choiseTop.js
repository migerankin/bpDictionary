var setTimeOutboxhide

$('.title2:not(:eq(3)):not(:eq(2))').click(function(){
    // $('.titleboxOutside').eq(0).off("mouseleave");
    // document.getElementsByClassName('title2')[2].innerHTML = '幻想<img src="./img/icon/barbtm.svg" class="barbtm">'
    // document.getElementsByClassName('title2')[3].innerHTML = '武器<img src="./img/icon/barbtm.svg" class="barbtm">'
    $('.title2').css('border-bottom-color','#25ffa800')
    $(this).css('border-bottom-color','#ffffff')
})
$('.title3').click(function(){
    // document.getElementsByClassName('title2')[2].innerHTML = '幻想<img src="./img/icon/barbtm.svg" class="barbtm">'
    // document.getElementsByClassName('title2')[3].innerHTML = '武器<img src="./img/icon/barbtm.svg" class="barbtm">'
    // document.getElementsByClassName('title2')[2].innerHTML = $(this).text()
    $('.title2').css('border-bottom-color','#25ffa800')
    document.getElementsByClassName('title2')[2].style.borderBottomColor = '#ffffff'
})
$('.title4').click(function(){
    // document.getElementsByClassName('title2')[2].innerHTML = '幻想<img src="./img/icon/barbtm.svg" class="barbtm">'
    // document.getElementsByClassName('title2')[3].innerHTML = '武器<img src="./img/icon/barbtm.svg" class="barbtm">'
    // document.getElementsByClassName('title2')[3].innerHTML = $(this).text()
    $('.title2').css('border-bottom-color','#25ffa800')
    document.getElementsByClassName('title2')[3].style.borderBottomColor = '#ffffff'
})


$('.titleboxOutside').eq(0).hover(function(){
    clearTimeout(setTimeOutboxhide)
    $('.titlebox').eq(0).css('display','block')
    // $('.title2').eq(2).css('border-bottom-color','#25ffa800')
    setTimeOutboxhide = setTimeout(function(){
        $('.titlebox').eq(0).css('margin-top','0')
        $('.titlebox').eq(0).css('opacity','1')
    })
},function(){
    clearTimeout(setTimeOutboxhide)
    $('.titlebox').eq(0).css('margin-top','5px')
    $('.titlebox').eq(0).css('opacity','0')
    setTimeOutboxhide = setTimeout(function(){
        $('.titlebox').eq(0).css('display','none')
    },300)
})
$('.titleboxOutside').eq(1).hover(function(){
    clearTimeout(setTimeOutboxhide)
    $('.titlebox').eq(1).css('display','block')
    // $('.title2').eq(2).css('border-bottom-color','#25ffa800')
    setTimeOutboxhide = setTimeout(function(){
        $('.titlebox').eq(1).css('margin-top','0')
        $('.titlebox').eq(1).css('opacity','1')
    })
},function(){
    clearTimeout(setTimeOutboxhide)
    $('.titlebox').eq(1).css('margin-top','5px')
    $('.titlebox').eq(1).css('opacity','0')
    setTimeOutboxhide = setTimeout(function(){
        $('.titlebox').eq(1).css('display','none')
    },300)
})