$(function () {
    // 首部导航栏经过，隐藏部分显示
    $(".Tmall-nav-right-ul li").hover(
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").show()
        },
        function () {
            $(".Tmall-nav-right-ul-li-bottom").hide()
        }
    )

    // 第三行 经过span添加样式
    // 经过span,显示隐藏部分
    $(".sup-search-right-left-box-letter span").hover(
        function () {
            $(this).addClass("ycborder").siblings().removeClass("ycborder")
            $(".sup-search-right-tab1-right").hide()
            $(this).find(".sup-search-right-tab1-right").show()

        }
    )

    // 鼠标经过h2 显示盒子     // 经过h2让i旋转
    $(".sup-search-right-left").hover(
        function () {
            $(".sup-search-right-left-box").toggle()
        }
    )




    // 点击h3里隐藏盒子的位名，赋值给h3
    $(".sup-search-right-left-box-letter").on("click", "a", function () {
        let ahtml = $(this).html()
        $(".h2-html").html(ahtml)

    })
    $(".sup-search-right-left-box-hot").on("click", "a", function () {
        let ahtml = $(this).html()
        $(".h2-html").html(ahtml)

    })

    // 

    // 第四行 鼠标经过盒子显示
    $(".sup-classify-right").hover(
        function () {
            $(this).animate({
                width: 186
            }, 300, function () {
                $(".sup-classify-right-hide-box").slideDown(200)
            })
            $(".sup-classify-right-sj i:nth-child(1)").animate({
                top: -10
            }, 100)
            $(".sup-classify-right-sj i:nth-child(2)").animate({
                top: 0
            }, 100)
        },
        function () {
            $(".sup-classify-right-hide-box").slideUp(300)
            $(this).animate({
                width: 140
            }, 500)
            $(".sup-classify-right-sj i:nth-child(1)").animate({
                top: 0
            }, 100)
            $(".sup-classify-right-sj i:nth-child(2)").animate({
                top: 10
            }, 100)
        }
    )


    // 第五行 左tab栏 经过li 出现红色背景
    $(".sup-slideshow-left li").hover(
        function () {
            $(this).css({
                background: "#e31a3a"
            })
            $(this).find(".sup-slideshow-left-fj").css({
                color: "#fff"
            })
            $(this).find("h3 i").css({
                color: "#fff"
            })
            $(this).find("h3").css({
                color: "#fff"
            })
            $(this).find(".sup-slideshow-left-a a").css({
                color: "#fff",
                opacity: .7
            })
            $(this).find(".sup-slideshow-hide").show()
            $(this).find(".sup-slideshow-left-be").show()
            $(this).find(".sup-slideshow-left-hide-box").show()
        },
        function () {
            $(".sup-slideshow-left-hide-box").hide()
            $(this).css({
                background: "#fff"
            })
            $(this).find(".sup-slideshow-left-fj").css({
                color: "#e22a40"
            })
            $(this).find("h3 i").css({
                color: "#e22a40"
            })
            $(this).find("h3").css({
                color: " #515151"
            })
            $(this).find(".sup-slideshow-left-a a").css({
                color: "#999999",
                opacity: 1
            })
            $(".sup-slideshow-hide").hide()
            $(".sup-slideshow-left-be").hide()
        }

    )


    // 轮播图
    let slinum = 0
    var letsol = 0
    $(".sup-slideshow-center").hover(function () {
        $(".sup-slideshow-center-right").show()
        $(".sup-slideshow-center-left").show()
        clearInterval(timer)
    }, function () {
        $(".sup-slideshow-center-right").hide()
        $(".sup-slideshow-center-left").hide()
        timer = setInterval(function () {
            $(".sup-slideshow-center-right").click()
        }, 2000)

    })

    // 点击右键
    $(".sup-slideshow-center-right").click(function () {
        slinum++
        if (slinum > $(".sup-slideshow-center ul>li").length - 1) {
            slinum = 0
        }
        $(".sup-slideshow-center ul>li").eq(slinum).fadeIn(200).siblings("li").fadeOut(200)
        $(".sup-slideshow-center ol>li").eq(slinum).addClass("shenghong").siblings("li").removeClass("shenghong")
    })

    // 点击左键
    $(".sup-slideshow-center-left").click(function () {
        slinum--
        if (slinum < 0) {
            slinum = $(".sup-slideshow-center ul>li").length - 1
        }
        $(".sup-slideshow-center ul>li").eq(slinum).fadeIn(200).siblings("li").fadeOut(200)
        $(".sup-slideshow-center ol>li").eq(slinum).addClass("shenghong").siblings("li").removeClass("shenghong")
    })

    // 经过ol里的li让指定图片显示
    $(".sup-slideshow-center ol>li").hover(
        function () {
            setol = $(this).index()
            $(this).addClass("shenghong").siblings("li").removeClass("shenghong")
            slinum = setol
            $(".sup-slideshow-center ul>li").eq(slinum).fadeIn(200).siblings("li").fadeOut(200)
        }
    )

    // 添加定时器
    let timer = setInterval(function () {
        $(".sup-slideshow-center-right").click()
    }, 2000)












})