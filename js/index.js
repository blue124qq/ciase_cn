var NextStartDateTime = "";
var NewsStartDateTime = "";

function InitslickView() {
    $('.single-item').slick({
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    });
    $('.newSlide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: $("#newPrev"),
        nextArrow: $("#newNext")
    });

    $(document.body).resize();
}
var timeoutObj;
var preTop = 0;
var isFirstShowNavDBA = true;
function InitNavView() {
    var $nav = $("div.nav");
    var $navDbd = $("div.nav li.dbd");
    var $rightArrow = $('#rightArrow');

    $nav.hide();
    $navDbd.hide();
    $rightArrow.hide();
    $(window).on("scroll", function () {
        var _top = $(document).scrollTop();
        if (_top >= 400) {
            $nav.show();
            $rightArrow.show();
            if ($(".nav li:hover").length == 0 && isFirstShowNavDBA) {
                $(".nav .dba").addClass("hoverLi");
                clearTimeout(timeoutObj);
                timeoutObj = setTimeout(hideNavDBA, timeoutInterval * 1000);
                isFirstShowNavDBA = false;
            }
        } else {
            $nav.hide();
            $rightArrow.hide();
            $(".nav .dba").removeClass("hoverLi");
            isFirstShowNavDBA = true;
        }

        if (_top >= 600) {
            $navDbd.show();
        } else {
            $navDbd.hide();
        }
    });
    $nav.mouseover(function () {
        $(".nav .dba").removeClass("hoverLi");
        clearTimeout(timeoutObj);
    });
    //浮动到顶部按钮事件
    $("li.dbd").on("click", function () {
        $(document).scrollTop(10)
    });
}


function InitTimeView() {
    var a = new Date();
    a = new Date(a.setDate(a.getDate() - 1));
    var b = new Date(NextStartDateTime);
    var c = b - a;
    var d = parseInt(c / 1000 / 3600 / 24);
    var dayStr = d.toString();
    var arr = ["N_ten", "N_one", "N_two", "N_three", "N_four", "N_five", "N_six", "N_seven", "N_eight", "N_nine"];
    var surplusDayObj = $(".surplusDay");
    surplusDayObj.html("");
    for (var i = 0; i < dayStr.length; i++) {
        surplusDayObj.append($("<s>").addClass(arr[dayStr[i]]));

    }
}


function hidden() {
    //首页
    //默认情况下样式
    $(".slick-prev, .slick-next").attr("style", "visibility: hidden");
    //鼠标移入样式
    $(".banner, .slick-track, .slick-prev, .slick-next").mouseover(function () {
        $('.slick-prev, .slick-next').attr("style", "visibility: visible");
    });
    //鼠标移开样式
    $(".banner, .slick-track").mouseout(function () {
        $(".slick-prev, .slick-next").attr("style", "visibility: hidden");
    });
    
}

