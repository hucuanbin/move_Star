﻿var startTime = new Date().getTime();
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
    $(".time_daoj").each(function () {
        set_time = parseInt($(this).attr("data-data"));//结束时间的秒
        var a = parseInt(new Date().valueOf() / 1000);//当前时间的秒
        intDiff = parseInt(set_time - a);//倒计时总秒数量
        if (intDiff <= 0) {
            return;
        }

        if (intDiff > 0) {
            day = parseInt(intDiff / (60 * 60 * 24));
            hour = parseInt(intDiff / (60 * 60))-24;
            minute = parseInt((intDiff / 60) - ((hour+day*24) * 60));
            second = parseInt(intDiff%60);
            if (day != 0) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $(this).find('.time_tian').text(day);
            $(this).find('.time_shi').text(hour);
            $(this).find('.time_fen').text(minute);
            $(this).find('.time_miao').text(second);
        }
    });
    setTimeout(daojishi, nextTime);
    // console.log(nextTime);
};
setTimeout(daojishi, 1000);