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

        // 第五行 左tab栏 经过li 出现红色背景
        $(".sup-slideshow-left li").hover()
    )

})