
var startTime = new Date().getTime();
var set_time = 0;
var wsbl = 0;
var nextTime = 10;
var b = 4;
var intDiff = 0;
var bajie = 1;
var day = 0,
    hour = 0,
    minute = 0,
    second = 0;
weimiao = 0//时间默认值
var count = 0;

function daojishi() {



    $(".dao_time").each(function () {

        if ($(this).parent().parent().next().html() == undefined) {
            count++;
            var offset = new Date().getTime() - (startTime + count * 10);
            nextTime = 10 - offset;
            if (nextTime < 0)
                nextTime = 1;         
        }

        set_time =parseInt( $(this).attr("data-data"));//结束时间的微秒
        var a =parseInt( new Date().valueOf() / 10);//当前时间的微秒
        intDiff = parseInt(set_time - a) / 100;//倒计时总秒数量
        if (intDiff <= 0) {
            $(this).text("马上揭晓");
            return;
        }

        if (intDiff >= 0) {
            minute = parseInt(intDiff / 60) - (hour * 60);
            second = parseInt(intDiff) - (hour * 60 * 60) - (minute * 60);
            weimiao = parseInt((set_time - a) % 100);
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            if (weimiao <= 9) weimiao = '0' + weimiao;
            $(this).find('.time_fen').text(minute);
            $(this).find('.time_miao').text(second);
            $(this).find('.time_seimiao').text(weimiao);
        }

      


    });
    setTimeout(daojishi, nextTime);
    console.log( nextTime);

};
setTimeout(daojishi, 10);