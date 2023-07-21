var currentTimeStamp = Date.now();

// 指定目标时间的时间戳（2023年7月19日17点22分10秒）
var targetTimeStamp = new Date('2023-07-19T17:22:10').getTime();

// 计算时间间隔（以秒为单位）
var timeDifferenceInSeconds = Math.floor((currentTimeStamp - targetTimeStamp) / 1000);

var dayOrNight = 0
var startSecond = 0

startSecond = timeDifferenceInSeconds % 1500
dayOrNight = Math.floor(timeDifferenceInSeconds / 1500 % 2) // 1为晚上，0为白天

// console.log(startSecond);
// console.log(dayOrNight);

//////什么时候变化
var secondsToAdd = (1500-startSecond) * 1000;

// 计算1000秒后的时间戳
var futureTimeStamp = currentTimeStamp + secondsToAdd;
var futureTimeStampelse = currentTimeStamp + secondsToAdd + 1500000;

// 创建一个新的Date对象来表示1000秒后的时间
var futureDate = new Date(futureTimeStamp);
var futureDateelse = new Date(futureTimeStampelse);

// console.log(futureDate);

var c = document.getElementById('canvas')
var ctx = c.getContext('2d')
    var precent = 100
    //绘制轨道
    function drawTrack() {
        ctx.save();
        ctx.beginPath()
        ctx.strokeStyle = '#373737'
        ctx.lineCap = 'butt'
        ctx.lineWidth = 39
        ctx.arc(150, 150, 100, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath();
        ctx.restore();
    }

    //绘制进度环
    function drawProgress(startSecond) {
        ctx.save();
        ctx.beginPath()
        ctx.lineCap = 'butt'
        ctx.lineWidth = 54
        ctx.strokeStyle = 'rgb(237, 246, 246)'
        // context.arc(x,y,r,sAngle,eAngle,counterclockwise);   //x坐标,y坐标,半径,起始角,结束角,顺时针/逆时针
        ctx.arc(150, 150, 100, -Math.PI / 2, -Math.PI / 2 + 2 * startSecond * Math.PI)
        ctx.stroke()
        ctx.closePath();
        ctx.restore();
    }
    // (function draw() {
    //     num += 1
    //     if (num < precent){
    //         window.requestAnimationFrame(draw)
    //     }
    //     else
    //         num = precent
    //     // ctx.clearRect(0, 0, 300, 300)
    //     drawTrack()
    //     drawProgress(num)
    // }())
    setInterval(function(){
        ctx.clearRect(0, 0, 300, 300);

        drawTrack()
        drawProgress(startSecond/1500)
        // startSecond+=1
        // console.log(startSecond);
        // console.log(dayOrNight);
        now = new Date()
        currentTimeStamp = Date.now();

        // 计算时间间隔（以秒为单位）
        timeDifferenceInSeconds = Math.floor((currentTimeStamp - targetTimeStamp) / 1000);

        startSecond = timeDifferenceInSeconds % 1500
        dayOrNight = Math.floor(timeDifferenceInSeconds / 1500 % 2) // 1为晚上，0为白天

        secondsToAdd = (1500-startSecond) * 1000;

        // 计算1000秒后的时间戳
        futureTimeStamp = currentTimeStamp + secondsToAdd;
        futureTimeStampelse = currentTimeStamp + secondsToAdd + 1500000;

        // 创建一个新的Date对象来表示1000秒后的时间
        futureDate = new Date(futureTimeStamp);
        futureDateelse = new Date(futureTimeStampelse);

        if(startSecond/1500>=1){
            startSecond = 0
        }
        console.log(futureDate);

        document.getElementById('nowTime').innerHTML = `北京时间<br><b style="color: #edf5f5;">${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}</b>`
        if(dayOrNight==1){
            document.getElementById('nextFirst').innerHTML = `天亮时间<br><b>${futureDate.getHours().toString().padStart(2, '0')}:${futureDate.getMinutes().toString().padStart(2, '0')}:${futureDate.getSeconds().toString().padStart(2, '0')}</b>`
            document.getElementById('nextSecond').innerHTML = `再次天黑<br><b>${futureDateelse.getHours().toString().padStart(2, '0')}:${futureDateelse.getMinutes().toString().padStart(2, '0')}:${futureDateelse.getSeconds().toString().padStart(2, '0')}</b>`
            document.getElementById('nowDay').innerHTML = `<font style="font-size:14px;">夜晚</font>`
            document.getElementsByClassName('canvasBox')[0].style.boxShadow = '0 0 30px 5px rgba(0, 0, 0, 0.24)'
            document.getElementById('nowDay').style.borderBottomColor = 'rgba(65, 72, 80, 0.768)'
        }else if(dayOrNight==0){
            document.getElementById('nextFirst').innerHTML = `天黑时间<br><b>${futureDate.getHours().toString().padStart(2, '0')}:${futureDate.getMinutes().toString().padStart(2, '0')}:${futureDate.getSeconds().toString().padStart(2, '0')}</b>`
            document.getElementById('nextSecond').innerHTML = `再次天亮<br><b>${futureDateelse.getHours().toString().padStart(2, '0')}:${futureDateelse.getMinutes().toString().padStart(2, '0')}:${futureDateelse.getSeconds().toString().padStart(2, '0')}</b>`
            document.getElementById('nowDay').innerHTML = `<font style="color: #edf5f5; font-size: 14px; margin-top: -20px;">白天</font>`
            document.getElementsByClassName('canvasBox')[0].style.boxShadow = '0 0 30px 5px rgba(255, 255, 255, 0.1)'
            document.getElementById('nowDay').style.borderBottomColor = 'rgba(192, 215, 208, 0.768)'
        }
    },1000)