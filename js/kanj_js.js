﻿/// <reference path="jquery-1.11.1.min.js" />

$(document).ready(function () {
    var a = "";
    a += '<div class="loding_wai"><div class="loading"> <b></b><ul>'
    a += '<li><span style="background:#FFCA08"></span></li>';
    a += '<li><span style="background:#0099D2"></span></li>';
    a += '<li><span style="background:#A3248F"></span></li>';
    a += '<li><span style="background:#A6CE3A"></span></li>';
    a += '<li><span style="background:#C40F3A"></span></li>';
    a += '<li><span style="background:#466F83"></span></li>';
    a += '<li><span style="background:#00A77B"></span></li>';
    a += '<li><span style="background:#F15C22"></span></li>';
    a += '</ul></div></div>';
    $("body").prepend(a);
});
document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething() {
    $(".loding_wai").height($(window).height());
    if (document.readyState == "complete") //当页面加载状态
    {
        $(".loding_wai").hide();
        var a =parseInt( $(window).height());
        var b =parseInt( $(".kj_top").height());
        var c = parseInt($(".kj_botn").height());
        var d = parseInt($(".kanj_kaishi ").height()) + 80;
        var e = a - b - c;
        if (e >d) {
            d = e;
        }
        $(".kanj_nr_bj").css({
            "min-height": e+"px",
            "background-size": "100% " + d + "px",
          
        })
    }
}

function jz_gdl() {
    alert();
    $("body").css("overflow-y", "hidden");
    $("body").css("height", $(window).height() + "px");    var a = $(window).width();
    var move = function (e) {
        e.preventDefault && e.preventDefault();
        e.returnValue = false;
        e.stopPropagation && e.stopPropagation();
        return false;
    }
    var start = function (e) {
        pos.y = e.targetTouches[0].pageY;
        pos.x = e.targetTouches[0].pageX;
    }
    var end = function (e) {
        //stop the zoom in event be motivated ,for the handle equipment's dobule click event.
        move(e);
        y = e.targetTouches[0].pageY;
        x = e.targetTouches[0].pageX;
        if (Math.abs(pos.y - y) < 3 || Math.abs(pos.x - x) < 3) {
            setTimeout(function () { fireEvent(e.target, 'click'); }, 2);
        }
        pos = null;
        return false;
    }

    document.documentElement.style.overflow = 'hidden'; //低版本需要
    document.body.style.overflow = 'hidden';//mobile 低版本不生效
    eventUtil.addEvent(window, 'touchmove', move);
    eventUtil.addEvent(document.body, 'touchstart', start);
    eventUtil.addEvent(document.body, 'touchend', end);

}