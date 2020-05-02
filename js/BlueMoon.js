$(function () {
    // 点击关闭 遮罩层消失
    // $(".shadeDiv").on("click", "s", function () {
    //     $(".shadeDiv").hide()
    //     $(".shade").hide()
    // })

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

    // 放大镜
    $("#exzoom").exzoom({
        autoPlay: false,
    }); //方法调用，务必在加载完后执行

    // 放大镜右边效果
    let nums = 1
    $(".zoomR").on("click", ".btn1", function () {
        nums++
        $(".zoomR h4 input").val(nums)
        $(".zoomR h4 button").css("background", "#fff")
        $(this).css("background", "#3390ff")
    })

    $(".zoomR").on("click", ".btn2", function () {
        nums--
        if (nums < 0) {
            nums = 0
        }
        $(".zoomR h4 input").val(nums)
        $(".zoomR h4 button").css("background", "#fff")
        $(this).css("background", "#3390ff")
    })

    // 失去焦点
    $(".zoomR .btn1").on("blur", function () {
        $(".zoomR h4 button").css("background", "#fff")
    })
    $(".zoomR .btn2").on("blur", function () {
        $(".zoomR h4 button").css("background", "#fff")
    })

    $(".zoomDB-footB span").on("click", function () {
        $(this).addClass("bj").siblings("span").removeClass("bj")
    })

    // 点击
    $(".zoomDB-footB").on("click", "span", function () {
        $(".zoomDB-footB span ul").hide()
        $(this).find("ul").show()
    })

    $(".zoomDB-footB span ul li").hover(
        function () {
            $(this).addClass("redbj").siblings("li").removeClass("redbj")
        }
    )

    $(".zoomR h2 s").on("click", function () {
        $(".zoomDB").show()
    })

    $(".zoomDB .chahao").on("click", function () {
        $(".zoomDB").hide()
        console.log(1)
    })
})