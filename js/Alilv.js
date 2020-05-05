$(function () {


    $(window).on("scroll", function () {
        // let dotop = $(this).scrollTop()
        console.log($(this).scrollTop())
        // if ($(this).scrollTop > 1)
    })



    // 第四行
    $(".advantage li").hover(
        function () {
            $(this).stop().animate({
                "marginTop": "40px"
            }, 200)
            $(this).find("p").height(38).siblings("p").height(15)
        },
        function () {
            $(this).stop().animate({
                "marginTop": "100px"
            }, 200)
        }
    )




















    // lunbo
    $('#slides').slides({
        preload: false,
        preloadImage: 'images/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: false,
        animationStart: function (current) {

            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationStart on slide: ', current);
            };
        },
        animationComplete: function (current) {

            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationComplete on slide: ', current);
            };
        },
        slidesLoaded: function () {

        }
    });

    $(function () {
        //回调函数计数
        var callbackIndex = 0;
        $('.silder-box-1').mySilder({
            width: 660, //容器的宽度 必选参数!!!!!!
            height: 300, //容器的高度 必选参数!!!!!!
            auto: false, //是否自动滚动
            autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
            direction: 'x', //滚动方向,默认X方向
            autoType: 'left', //滚动方向，auto为true时生效
            few: 1, //一次滚动几个，默认滚动1张
            showFew: 2, //显示几个,就不用调css了,默认显示一个
            clearance: 20, //容器之间的间隙，默认为 0
            silderMode: 'linear', //滚动方式
            timeGap: 350, //动画间隙，完成一次动画需要多长时间，默认700ms
            buttonPre: '.silder-button.btl', //上一个，按钮
            buttonNext: '.silder-button.btr', //下一个，按钮
            jz: true, //点击时，是否等待动画完成
            runEnd: function () { //回调函数
                callbackIndex++;
                $('.cj em').text(callbackIndex);
            }
        });


        $('.silder-box-2').mySilder({
            width: 200, //容器的宽度 必选参数!!!!!!
            height: 200, //容器的高度 必选参数!!!!!!
            direction: 'y', //滚动方向,默认X方向
            few: 1, //一次滚动几个，默认滚动1张
            showFew: 2, //显示几个,就不用调css了,默认显示一个
            clearance: 10, //容器之间的间隙，默认为 0
            silderMode: 'linear', //滚动方式
            timeGap: 350, //动画间隙，完成一次动画需要多长时间，默认700ms
            auto: true, //是否自动滚动 
            autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次
            buttonPre: '.silder-button.btl', //上一个，按钮
            buttonNext: '.silder-button.btr', //下一个，按钮
            jz: true //点击时，是否等待动画完成
        });

        $('.silder-box-3').mySilder({
            width: 400, //容器的宽度 必选参数!!!!!!
            height: 400, //容器的高度 必选参数!!!!!!
            direction: 'x', //滚动方向,默认X方向
            few: 1, //一次滚动几个，默认滚动1张
            showFew: 2, //显示几个,就不用调css了,默认显示一个
            clearance: 10, //容器之间的间隙，默认为 0
            silderMode: 'easeInBack', //滚动方式
            timeGap: 350, //动画间隙，完成一次动画需要多长时间，默认700ms
            auto: true, //是否自动滚动 
            autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次
            buttonPre: '.silder-button.btl', //上一个，按钮
            buttonNext: '.silder-button.btr', //下一个，按钮
            jz: true //点击时，是否等待动画完成
        });

        /*------------------
        ------------------滚动方式
        linear swing jswing 
        easeInQuad  easeOutQuad  easeInOutQuad 
        easeInCubic  easeOutCubic  easeInOutCubic 
        easeInQuart  easeOutQuart  easeInOutQuart  
        easeInQuint  easeOutQuint  easeInOutQuint 
        easeInSine  easeOutSine   easeInOutSine 
        easeInExpo  easeOutExpo  easeInOutExpo 
        easeInCirc  easeOutCirc  easeInOutCirc 
        easeInElastic  easeOutElastic  easeInOutElastic  
        easeInBack  easeOutBack  easeInOutBack 
        easeInBounce  easeOutBounce  easeInOutBounce
        ------------------
        -----------------*/

    });

})