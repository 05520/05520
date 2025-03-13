//滚动条效果

var progressbar = document.getElementsByClassName("progressBar-contain")[0].getElementsByClassName("progress-section");
var pageHeight = document.body.scrollHeight;
var scrollHeight = pageHeight / 10;

setTimeout(function () {
    $('.logo').fadeIn(5000)
}, 500);

window.onscroll = function () {
    var dis = document.documentElement.scrollTop || document.body.scrollTop;
    if (dis < scrollHeight) {
        $('.logo').fadeIn(3000)
        $('.progressBar').toggleClass('active');
        $('progressBar').fadeOut();
        $('.star_1').css('display','none')
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > scrollHeight && dis < 2.1 * scrollHeight) {
        $('.logo').fadeOut()
        if (dis > scrollHeight && dis < 1.5 * scrollHeight) {
            $('.star_1').css('display','block')
            $('.star_1').css('opacity','1')
            $('.star_2').css('opacity','0')
        } else if (dis > 1.5 * scrollHeight && dis < 2.1 * scrollHeight) {
            $('.star_2').css('display','block')
            $('.star_2').css('opacity','1')
            $('.star_1').css('opacity','0')
            $('.contentMain').fadeOut(3000);
        }
        $('.progressBar').addClass('active');
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 2.1 * scrollHeight && dis < 3.1 * scrollHeight) {
        $('.star_2').css('opacity','0')
        $('.progressBar').addClass('active');
        $('.contentMain').fadeIn(1200)
        $('.contentMain_1').fadeOut()
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 3.1 * scrollHeight && dis < 4.1 * scrollHeight) {
        $('.progressBar').addClass('active');
        $('.contentMain').fadeOut();
        $('.contentMain_2').fadeOut();
        $('.contentMain_1').fadeIn(1200);
        setTimeout(function () {
            $('.bg_4').fadeOut()
        }, 2000);
        setTimeout(function () {
            $('.bg_5').fadeIn()
        }, 2200);
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 4.1 * scrollHeight && dis < 5.1 * scrollHeight) {
        $('.progressBar').addClass('active');
        $('.contentMain_1').fadeOut();
        $('.contentMain_2').fadeIn(1200);
        $('.contentMain_3').fadeOut();
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 5.1 * scrollHeight && dis < 6.1 * scrollHeight) {
        $('.progressBar').addClass('active');
        $('.contentMain_2').fadeOut();
        $('.contentMain_3').fadeIn(1200);
        $('.contentMain_4').fadeOut();
        $('.biaozhi').fadeIn(3000);
        setTimeout(function () {
            $('.surf_1').fadeIn(2000)
        }, 1000);
        setTimeout(function () {
            $('.surf_2').fadeIn(1200)
        }, 1300);
        setTimeout(function () {
            $('.surf_3').fadeIn(1200)
        }, 1600);
        setTimeout(function () {
            $('.surf_4').fadeIn(1200)
        }, 1900);
        setTimeout(function () {
            $('.surf_5').fadeIn(1200)
        }, 2100);
        setTimeout(function () {
            $('.surf_6').fadeIn(1200)
        }, 2400);
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 6.1 * scrollHeight && dis < 6.1 * scrollHeight) {
        $('.ti').fadeOut(0)
    }
    else if (dis > 6.1 * scrollHeight && dis < 7.1 * scrollHeight) {
        $('.contentMain_3').fadeOut();
        $('.contentMain_4').fadeIn(1200);
        $('.progressBar').addClass('active');
        $('.contentMain_5').fadeOut();
        setTimeout(function () {
            $('.ti').fadeIn(1000)
            setTimeout(function () {
                $('.bg_5').fadeIn()
            }, 2000);
        }, 1200);
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 7.1 * scrollHeight && dis < 8.1 * scrollHeight) {
        $('.contentMain_4').fadeOut();
        $('.contentMain_5').fadeIn(1200);
        $('.ti').fadeOut()
        $('.progressBar').addClass('active');
        $('.footerImg_1').css('opacity','0')
        $('.footerImg_2').css('opacity','0')
        $('.footerImg_3').css('opacity','0')
        $('.footerImg_3_1').css('opacity','0')
        $('.footerImg_4').css('opacity','0')
        $('.footerImg_5').css('opacity','0')
        $('.footerImg_6').css('opacity','0')
        $('.footerImg_7').css('opacity','0')
        $('.footerImg_8').css('opacity','0')
        $('.footerImg_9').css('opacity','0')
        $('.footerImg_10').css('opacity','0')
        $('.footerImg_11').css('opacity','0')
        $('.footerImg_12').css('opacity','0')
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "white";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "none";
    }
    else if (dis > 8.1 * scrollHeight && dis < 9.1 * scrollHeight) {
        $('.progressBar').addClass('active');
        setTimeout(function () {
            $('.footerImg_6').css('opacity','1')
            $('.footerImg_7').css('opacity','1')
        }, 1000);
        setTimeout(function () {
            $('.footerImg_5').css('opacity','1')
            $('.footerImg_8').css('opacity','1')
        }, 2000);
        setTimeout(function () {
            $('.footerImg_3_1').css('opacity','1')
            $('.footerImg_4').css('opacity','1')
            $('.footerImg_9').css('opacity','1')
            $('.footerImg_10').css('opacity','1')
        }, 3000);
        setTimeout(function () {
            $('.footerImg_1').css('opacity','1')
            $('.footerImg_2').css('opacity','1')
            $('.footerImg_3').css('opacity','1')
            $('.footerImg_11').css('opacity','1')
            $('.footerImg_12').css('opacity','1')
        }, 4000);
        progressbar[0].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[1].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[2].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[3].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[4].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[5].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[6].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[7].getElementsByTagName("circle")[0].style.fill = "none";
        progressbar[8].getElementsByTagName("circle")[0].style.fill = "white";
    }
}
