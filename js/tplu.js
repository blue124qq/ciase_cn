// JavaScript Document
 $(function () {
            InitslickView();
            InitNavView();
            InitTimeView();
            hidden();

            var click_num = 0;
            $('.btn').click(function () {
                if (click_num % 2 == 0) {
                    $('.nav ul').css('display', 'block');
                } else {
                    $('.nav ul').css('display', 'none');
                }
                click_num++;
            });

            $(".dba-btn").click(function () {

                $(this).toggleClass("clicked");
                $(this).parent().find("li:gt(0):lt(3)").toggleClass("hiddenWords");
            });
            var click_num2 = 0;
            $('#rightArrow').click(function () {
                if (click_num2 % 2 == 0) {
                    $('.nav ul').css('display', 'none');
                    $('#rightArrow span').html('');
                    $('#rightArrow .p').css('display', 'none');
                    $('#rightArrow .p2')
                        //.css("background-image", "url('/cn/images/whitei.png')")
                        .css("background-repeat", "no-repeat")
                        .css("background-position:", "center 12px")
                        .css("width", "30px")
                        .css("height", "30px")
                        .css("display", "block")
                        .css("margin", "12px").css("background-position", "center");
                } else {
                    $('.nav ul').css('display', 'block');
                    $('#rightArrow .p2').css("display", "none");
                    $('#rightArrow .p').css('display', 'block');
                    $('#rightArrow span').html('收起');
                }
                click_num2++;
            });
        });