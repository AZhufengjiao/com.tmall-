$(function () {
    // 第一行 淘宝首部导航 经过左边地址显示与隐藏
    $(".Tmall-nav-left").hover(
        function () {
            $(this).find("ul").show()
        },
        function () {
            $(".Tmall-nav-left ul").hide()
        }
    )

    // 右边经过显示里面的隐藏
    // 首部导航栏经过，隐藏部分显示
    $(".Tmall-nav-right-ul li").hover(
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").show()
        },
        function () {
            $(".Tmall-nav-right-ul-li-bottom").hide()
        }
    )


    // 第三行 淘宝搜索栏  点击x让二维码隐藏
    $(".tbInputRight").on("click", "span", function () {
        $(".tbInputRight").hide()
    })

    $(".topA").hover(
        function () {
            $(".registerTop li a").removeClass("borders")
            $(this).addClass("borders")
            // $(this).find("ul>li>div").show().siblings("div").hide()
        }
    )

    $(".topA").hover(
        function () {
            $(".registerTop ul li div").hide()
            $(this).next().show()
        }
    )

    // 循环轮播图右边的精灵图
    $(".registerCenter ul li").each(function (index, item) {
        let indexss = -index * 44
        $(this).find("span").css({
            "backgroundPosition": `0 ${indexss}px`
        })
    })

    // 
    $(".registerBottm li").hover(
        function () {
            $(".hide-div").hide()
            $(this).find(".hide-div").show()
        },
        function () {
            $(this).find(".hide-div").hide()
        }
    )

    // $(".registerCenter ul li").hover(
    //     function () {
    //         $(".hideDov").show()
    //         $(".hideDov li").css({
    //             border: `none`
    //         })
    //         $(".registerCenter ul li").removeClass("colors")
    //         $(this).addClass("colors")

    //     }
    // )

    // $(".hideDov i").on("click", function () {
    //     $(".hideDov ").hide()
    // })

    // 经过第五行图片。图片颜色变暗
    $(".agjImgxx").hover(
        function () {
            $(this).css("opacity", ".8")
        },
        function () {
            $(this).css("opacity", ".9")
        }
    )

    // 定位
    $(document).on("scroll", function () {
        let dT = $(this).scrollTop()
        if (dT > $(".slideshowTop").offset().top) {
            $(".dwei").show()
            fn(0)
        }
        if (dT > $(".live").offset().top + 200) {
            fn(1)
        }
        if (dT > $(".qualityL").offset().top) {
            fn(2)
        }
        if (dT > $(".best").offset().top) {
            fn(3)
        }
        if (dT > $(".lives").offset().top) {
            fn(4)
        }

        // 返回顶部显示
        if (dT > $(".gStuff").offset().top) {
            $(".dwei li").eq(5).show()

        }

        // 点击回到顶部
        $(".dwei li").eq(5).on("click", function () {
            $("body,html").animate({
                scrollTop: 0
            })
        })

        // 点击回到原位
        $(".dwei li").eq(0).on("click", function () {
            $(document).scrollTop($(".slideshowTop").offset().top + 500)
        })

        $(".dwei li").eq(1).on("click", function () {
            $(document).scrollTop($(".live").offset().top)
        })
        $(".dwei li").eq(2).on("click", function () {
            $(document).scrollTop($(".qualityL").offset().top)
        })
        $(".dwei li").eq(3).on("click", function () {
            $(document).scrollTop($(".best").offset().top)
        })
        $(".dwei li").eq(4).on("click", function () {
            $(document).scrollTop($(".lives").offset().top)
        })

        $(".dwei").on("click", "li", function () {
            $(this).addClass("colorss").siblins("li").removeClass("colorss")
        })

        function fn(num) {
            $(".dwei li").removeClass("colorss")
            $(".dwei li").eq(num).addClass("colorss")
        }

    })

})