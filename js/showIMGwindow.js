var isshowWindowClose = 0
var nowPage = 0
function showStart(){
    $('.IMGshowWindow').css('display','none')
    isshowWindowClose=0
    $('.canclick img').click(function(){
        $('.IMGshowWindow').css('height','400px')
        $('.IMGshowWindow').css('display','block')
        $('.IMGshowWindow').attr('src',this.src)
    })
    $('.IMGshowWindow').click(function(){
        $('.IMGshowWindow').css('display','none')
    })
    $(".IMGshowWindow").on("wheel", function(event) {
        event.preventDefault();
        var delta = event.originalEvent.deltaY;
        var scale = delta > 0 ? 0.9 : 1.4;
        $(this).css("transform", "translateX(-50%) translateY(-50%) scale(" + scale + ")");
      });
}
function showFuBenWhereIs(FuBenNumber){
    $('.IMGshowWindow').attr('src','./img/fb/'+FuBenNumber+'.png')
    $('.IMGshowWindow').css('display','block')
    isshowWindowClose=1
}
var buttomTag = ` <div class="outBox">
    <div class="outBox_firstdiv">
        <div class="outtitle"><p>| 站外传送门</p></div>
        <div class="outBlock"><a href="https://blue-protocol.cn/" target="_blank">蓝色协议中文站</a></div>
        <div class="outBlock"><a href="https://blueprotocol.swiki.jp/index.php" target="_blank">蓝色协议 swiki</a></div>
        <div class="outBlock"><a href="https://game8.jp/blue-protocol" target="_blank">蓝色协议 game8</a></div>
        <div class="outBlock"><a href="https://bp.incin.net/map#cty001" target="_blank">蓝色协议大地图</a></div>
    </div>
    <div class="outBox_firstdiv secondDiv">
        <div class="outtitle"><p>| JavaScript 文件下载</p></div>
        <div class="outBlock"><a href="javascript:downloadFile('./js/data_w.js', 'weapon.js');">武器数据</a></div>
        <div class="outBlock"><a href="javascript:downloadFile('./js/data_b.js', 'b_imagine.js');">战斗幻想数据</a></div>
        <div class="outBlock"><a href="javascript:downloadFile('./js/data_e.js', 'e_imagine.js');">强化幻想数据</a></div>
        <div class="outBlock"><a href="javascript:downloadFile('./js/data_sc.js', 'material.js');">材料数据</a></div>
        <div class="outBlock"><a href="javascript:downloadFile('./js/data_m.js', 'monster.js');">小怪及 Boss 数据</a></div>
    </div>
    <div class="outBox_firstdiv secondDiv">
        <div class="outtitle"><p>| 反馈与勘误</p></div>
        <div class="outBlock"><a href="https://tieba.baidu.com/p/8517189533" target="_blank">贴吧</a></div>
        <div class="outBlock"><a href="https://bbs.nga.cn/read.php?tid=37098764&page=1" target="_blank">NGA 论坛</a></div>
    </div>
</div>`
var interevalPic