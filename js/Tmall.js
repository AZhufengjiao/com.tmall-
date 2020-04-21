$(function () {
    $(".Tmall-nav-right-ul li").hover(
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").show()
        },
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").hide()
        }
    )

    // 经过首页输入框显示
    $(".Tmall-input-right-text").on("focus", function () {
        // $(".Tmall-input-right-box").show()
        $(this).on("input", function () {
            // if ($(this).val() == 1231) {
            $(".Tmall-input-right-box").show()
            // }
        })
    })

    // 离开首页输入框隐藏
    $(".Tmall-input-right-text").on("blur", function () {
        $(".Tmall-input-right-box").hide()
        $(".Tmall-input-right-text").val("")
    })

    // 轮播图
    let Tmallarr = ["#9beeb0", "#e8e8e8", "#fea293", "#e8e8e8", "#fa8624", "#00a1ff"]
    let num = 0
    // 点击右键
    $(".Tmall-slideshow-right").on("click", function () {
        num++
        if (num > $(".Tmall-slideshow-ul li").length - 1) {
            num = 0
        }
        $(".Tmall-slideshow-ul li").eq(num).fadeIn(100).siblings().fadeOut(100)
        $(".Tmall-slideshow-ol li").eq(num).addClass("op").siblings("li").removeClass("op")
        $(".Tmall-slideshow").css({
            backgroundColor: Tmallarr[num]
        })
    })
    // 点击左键
    $(".Tmall-slideshow-left").on("click", function () {
        num--
        if (num < 0) {
            num = $(".Tmall-slideshow-ul li").length - 1
        }
        $(".Tmall-slideshow-ul li").eq(num).fadeIn(500).siblings().fadeOut(500)
        $(".Tmall-slideshow-ol li").eq(num).addClass("op").siblings("li").removeClass("op")
        $(".Tmall-slideshow").css({
            backgroundColor: Tmallarr[num]
        })
    })

    $(".Tmall-slideshow-ul li").each(function (index, item) {
        $(".Tmall-slideshow-ol").append("<li></li>")
        // 点击ol里的li
        $(".Tmall-slideshow-ol li").eq(0).addClass("op")
        $(".Tmall-slideshow-ol li").eq(index).on("mouseenter", function () {
            $(this).addClass("op").siblings("li").removeClass("op")
            num = index
            $(".Tmall-slideshow-ul li").eq(num).fadeIn(500).siblings().fadeOut(500)
            $(".Tmall-slideshow").css({
                backgroundColor: Tmallarr[num]
            })
        })
    })

    let times = setInterval(function () {
        $(".Tmall-slideshow-right").click()
    }, 3000)

    // 轮播图左边导航经过变玫红色
    $(".meihong").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )

    // 轮播图左边导航经过变天蓝色
    $(".tianlan").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )

    // 轮播图左边导航经过变紫蓝色
    $(".zilan").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )

    // 轮播图左边导航经过变红色
    $(".hong").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )

    // 轮播图左边导航经过变绿色
    $(".lv").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )

    // 轮播图左边导航经过变黄色
    $(".huang").hover(
        function () {
            $(this).find("i").toggleClass("colormei")
            $(this).find("a").toggleClass("colormei")
            $(this).find("span").toggleClass("colormei")
        }
    )


    // 鼠标结果天猫首页左边tab栏显示对应的介绍
    $(".Tmall-slideshow-left-nav-ul").on("mouseenter", 'li', function () {
        let index = $(this).index()
        $(".Tmall-slideshow-hide").show()
        $(".Tmall-slideshow-hide-box").eq(index).show()
    })
    $(".Tmall-slideshow-left-nav-ul").on("mouseleave", 'li', function () {
        // let index = $(this).index()
        $(".Tmall-slideshow-hide").hide()
        $(".Tmall-slideshow-hide-box").hide()
    })

    // 经过第五行 品牌闪购 图片变淡
    $(".Tmall-brand-bottom").hover(
        function () {
            console.log(123)
            $(this).css("opacity", .7)
        },
        function () {
            $(this).css("opacity", 1)
        }
    )



})