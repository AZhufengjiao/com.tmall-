$(function () {
    // 点击关闭 遮罩层消失
    $(".shadeDiv").on("click", "s", function () {
        $(".shadeDiv").hide()
        $(".shade").hide()
    })

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


    // bug处
    $(".zoomR h2 s").on("click", function () {
        $(".zoomDB").show()
        $(".zoomRycc").show()
    })

    $(".zoomRycc").on("click", function () {
        $(".zoomDB").hide()
    })

    // 第七行 买二免一
    $(".act-com li").on("click", function () {
        $(".act-com li i").hide()
        $(this).find("i").show()
        $(this).addClass("bordercol").siblings("li").removeClass("bordercol")
    })

    $(".smell a").on("click", function () {
        $(".smell a").find("i").hide()
        $(this).find("i").show().siblings("i").hide()
    })

    $(".evaluateB-zhui input[type=radio]").on("click", function () {
        $(this).prop("checked", true).siblings("input[type=radio]").prop("checked", false)
    })

    $(".evaluateB-zhui-R span").hover(
        function () {
            $(this).find("ul").show()
        },
        function () {
            $(this).find("ul").hide()
        }
    )

    $(".evaluateB-zhui-R ul").on("click", "li", function () {
        let num = $(this).html()
        $(".evaluateB-zhui-R span ul li").html(num).remove()
        $(".evaluateB-zhui-R span b").html(num)

    })

    //8
    $(".grade li").hover(
        function () {
            $(this).addClass("tlan").siblings("li").removeClass("tlan")
            $(".grade li").find(".gradeBox").hide()
            $(this).find(".gradeBox").show()
        }
    )

    // 左边经过显示
    $(".sup-classify h3").hover(
        function () {
            $(".sup-slideshow-left").show()
            $(".sup-slideshow-left").hover(
                function () {
                    $(".sup-slideshow-left").show()
                },
                function () {
                    $(".sup-slideshow-left").hide()
                }
            )
        },
        function () {
            $(".sup-slideshow-left").hide()
        }
    )

    // 给页面添加卷曲事件
    let sc = $(".sup-classify").offset().top
    $(document).on("scroll", function () {
        let thistop = $(this).scrollTop()

        if (thistop > sc) {
            $('.sup-classify').css({
                "position": "fixed",
                "top": 0,
                "border-bottom": "1px solid #2f2f2f"
            })
            $('.sup-classify').on("mouseenter", function () {
                $(".sup-slideshow-left").css({
                    "position": "fixed",
                    "top": 38,
                    "z-index": 200
                })
            })
            $('.sup-classify').on("mouseleave", function () {
                $(".sup-slideshow-left").show()
            })
            $(".sup-slideshow-left").on("mouseleave", function () {
                $(this).css({
                    "position": "static"
                })
            })
        }

        if (thistop < sc) {
            $('.sup-classify').css({
                "position": "static",
                "border-bottom": 0
            })
        }

    })


    // 完善第七行


    $(".act-com li:nth-child(1)").on("click", function () {
        $(".activity").find(".hideone").show()
        $(".activity").find(".hidetwo").show()
    })

    $(".act-com li:nth-child(3)").on("click", function () {
        $(".activity").find(".hideone").hide()
        $(".activity").find(".hidetwo").hide()
    })

    $(".act-com li:nth-child(2)").on("click", function () {
        $(".activity").find(".hidetwo").show()
        $(".activity").find(".hideone").hide()
    })
})