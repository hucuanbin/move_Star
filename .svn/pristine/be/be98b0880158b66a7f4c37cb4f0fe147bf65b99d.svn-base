var startTime = new Date().getTime();
var set_time = 0;
var wsbl = 0;
var nextTime = 1000;
var b = 4;
var intDiff = 0;
var bajie = 1;
var day = 0,
    hour = 0,
    minute = 0,
    second = 0;
weimiao = 0//时间默认值
var count = 0;
var fen_1, fen_2, miao_1, miao_2;
function daojishi() {
    $(".dao_time").each(function () {
        set_time = parseInt($(this).attr("data-data"));//结束时间的秒
        var a = parseInt(new Date().valueOf() / 1000);//当前时间的秒
        intDiff = parseInt(set_time - a);//倒计时总秒数量
        if (intDiff <= 0) {
            return;
        }

        if (intDiff > 0) {
            minute = parseInt(intDiff / 60) - (hour * 60);
            second = parseInt(intDiff) - (hour * 60 * 60) - (minute * 60);
            fen_2 = minute % 10;
            fen_1 = parseInt(minute / 10);
            miao_2 = second % 10;
            miao_1 = parseInt(second / 10);
            $(".dao_time>b").attr("class", "");
            $("#fen_1").attr("class", "time_b" + fen_1);
            $("#fen_2").attr("class", "time_b" + fen_2);
            $("#miao_1").attr("class", "time_b" + miao_1);
            $("#miao_2").attr("class", "time_b" + miao_2);
        }
    });
    setTimeout(daojishi, nextTime);
    // console.log(nextTime);
};
setTimeout(daojishi, 1000);