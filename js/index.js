$(function () {

    // 给window添加卷曲事件，让顶部固定导航出现
    // 页面卷曲到一定的高度，让左下边的固定导航显示
    let oltop = $(".Tmall-slideshow-ol").offset().top
    let bushui = $(".Tmall-moisturizing").offset().top

    // 卷曲到指定高度,固定导航栏显示
    let tmall1 = 1260
    let tmall2 = 1952
    let tmall3 = 2619
    let tmall4 = 3450
    let tmall5 = 4130
    let tmall6 = 4930
    let tmall7 = 5620
    let tmall8 = 6410
    let toparr = [1260, 1952, 2619, 3450, 4130, 4930, 5620, 6410]
    $(window).on("scroll", function () {
        let windowtop = $(this).scrollTop()
        // 顶部搜索框的显示于隐藏
        console.log(windowtop)
        if (windowtop > bushui) {
            $(".Tmall-top-input").slideDown(300)
        }
        if (windowtop < bushui) {
            $(".Tmall-top-input").slideUp(300)
        }

        // 左下角固定导航的显示于隐藏
        if (windowtop > oltop) {
            $(".tmall-navleft").show(500)
        }
        if (windowtop < oltop) {
            $(".tmall-navleft").hide(500)
        }

        // 点击顶部div回到页面回到顶部
        $(".tmall-navleft-top-db").on("click", function () {
            $(document).scrollTop(0)

        })


        // 卷曲到指定高度,固定导航栏显示
        if (windowtop > tmall1) {
            $(".tmall-navleft li").eq(0).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall2) {
            $(".tmall-navleft li").eq(1).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall3) {
            $(".tmall-navleft li").eq(2).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall4) {
            $(".tmall-navleft li").eq(3).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall5) {
            $(".tmall-navleft li").eq(4).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall6) {
            $(".tmall-navleft li").eq(5).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall7) {
            $(".tmall-navleft li").eq(6).addClass("li-6").siblings().removeClass("li-6")
        }
        if (windowtop > tmall8) {
            $(".tmall-navleft li").eq(7).addClass("li-6").siblings().removeClass("li-6")
        }
    })

    let navnum = [0, 1, 2, 3, 4, 5, 6, 7]
    let navarr = ["#64c333", "#000000", "#ea5f8d", "#0aa6e8", "#64c333", "#f15453", "#19c8a9", "#000000"]
    // 经过左下角固定导航栏显示不同的颜色
    $(".tmall-navleft li").hover(
        function () {
            let navindex = $(this).index()
            console.log(navindex)
            $(this).toggleClass(`li-${navnum[navindex]}`)
            console.log(`li-${navnum[navindex]}`)
        }

        // function () {
        //     let navindex = $(this).index()
        //     $(this).css({
        //         backgroundColor: navarr[navindex]
        //     })
        // },
        // function () {
        //     $(this).css({
        //         backgroundColor: "#626262"
        //     })
        // }
    )

    // 鼠标点击左下角固定导航栏里的li显示不同的颜色,其他li颜色消失
    $(".tmall-navleft li").on("click", function () {
        let navindex = $(this).index()
        $(this).addClass(`li-${navnum[navindex]}`).siblings().removeClass(`li-${navnum[navindex]}`)
        $("html").animate({
            scrollTop: `${toparr[navindex]}`
        })
    })










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
            $(this).css("opacity", .7)
        },
        function () {
            $(this).css("opacity", 1)
        }
    )

    // 第六行 品牌 鼠标经过li变暗，隐藏文字显示

    $(".Tmall-trademark ul li").hover(
        function () {
            $(this).find(".Tmall-trademark-zzc").show()
            $(this).find(".Tmall-trademark-hide-a1").show()
            $(this).find(".Tmall-trademark-hide-a2").show()
        },
        function () {
            $(".Tmall-trademark-zzc").hide()
        }
    )

    $(".spanover").eq(1).hide()
    // 第七行 今日疯抢 经过显示图片
    $(".Tmall-supermarket-bottom-right-box1-top").on("mouseenter", "span", function () {

        var jrfnum = $(this).index()

        $(this).addClass("lvlv").siblings("span").removeClass("lvlv")
        $(".spanover").eq(jrfnum).show().siblings(".spanover").hide()
        $(".Tmall-supermarket-bottom-right-box1-bottom-right img").eq(jrfnum).fadeOut(10).siblings("img").fadeIn(10)
        clearInterval(jrftime)
    })

    $(".Tmall-supermarket-bottom-right-box1-top").on("mouseleave", "span", function () {
        jrftime = setInterval(jrffn, 2000)
    })

    $(".Tmall-supermarket-bottom-right-box1").hover(
        function () {
            $(".Tmall-supermarket-bottom-right-box1-bottom-yy").show()
        },
        function () {
            $(".Tmall-supermarket-bottom-right-box1-bottom-yy").hide()
        }
    )

    // // 今日疯抢定时器
    var jrfindex = 0

    function jrffn() {
        if (jrfindex == $(".Tmall-supermarket-bottom-right-box1-bottom-right img").length - 1) {
            jrfindex = 0
        } else {
            jrfindex++
        }
        $(".spanover").eq(jrfindex).show().siblings(".spanover").hide()
        $(".Tmall-supermarket-bottom-right-box1-top span").eq(jrfindex).addClass("lvlv").siblings("span").removeClass("lvlv")
        $(".Tmall-supermarket-bottom-right-box1-bottom-right img").eq(jrfindex).fadeOut(100).siblings("img").fadeIn(100)
    }

    let jrftime = setInterval(jrffn, 2000)




    // 第八行 经过显示红边框
    $(".Tmall-supermarket-bottom-right-box-ys").hover(
        function () {
            $(this).find(".Tmall-supermarket-bottom-right-box-img-yy").show()
            $(this).addClass("redborder8").siblings().removeClass("redborder8")
        },
        function () {
            $(".Tmall-supermarket-bottom-right-box-img-yy").hide()
            $(this).removeClass("redborder8")
        }
    )




})