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

    // 固定定位
    $(".sup-location a").hover(
        function () {
            let indexs = $(this).index()
            $(this).eq(indexs).addClass("colors")
        },
        function () {
            let indexs = $(this).index()
            $(this).eq(indexs).removeClass("colors")
        }
    )

    // 获取20个元素的offset().top
    // 1
    let snacks = $(".snacks").offset().top - 40
    // 2
    let liquor = $(".liquor").offset().top - 350
    // 3
    let milk = $(".milk").offset().top - 300
    // 4
    let relaxation = $(".relaxation").offset().top - 300
    // 5
    let biscuits = $(".biscuits").offset().top - 300
    // 6
    let drinks = $(".drinks").offset().top - 300
    // 7
    let health = $(".health").offset().top - 300
    // 8
    let rice = $(".rice").offset().top - 300
    // 9
    let oils = $(".oils").offset().top - 300
    // 10
    let clean = $(".clean").offset().top - 300
    // 11
    let hairdressing = $(".hairdressing").offset().top - 300
    // 12
    let nurse = $(".nurse ").offset().top - 300
    // 13
    let paper = $(".paper ").offset().top - 300
    // 14
    let family = $(".family ").offset().top - 300
    // 15
    let kitchen = $(".kitchen").offset().top - 300
    // 16
    let furniture = $(".furniture").offset().top - 300
    // 17
    let spin = $(".spin").offset().top - 300
    // 18
    let electric = $(".electric").offset().top - 300
    // 19
    let work = $(".work").offset().top - 300
    // 20
    let mother = $(".mother").offset().top - 300
    let arr = [snacks, liquor, milk, relaxation, biscuits, drinks, health, rice, oils, clean, hairdressing, nurse, paper, family, kitchen, furniture, spin, electric, work, mother]
    // 给页面添加卷曲事件
    let sc = $(".sup-slideshow-left").offset().top
    $(document).on("scroll", function () {
        let thistop = $(this).scrollTop()

        // 点击
        $(".sup-location").on("click", "a", function () {
            let indexa = $(this).index()
            $(document).scrollTop(`${arr[indexa]+20}`)
        })

        if (thistop > $(".sup-slideshow-left").offset().top) {
            $('.sup-classify').css({
                "position": "fixed",
                "top": 0,
                "border-bottom": "1px solid #2f2f2f"
            })


        }
        if (thistop < sc) {
            $('.sup-classify').css({
                "position": "static",
                "border-bottom": 0
            })
        }
        //  else {
        //     $('.sup-classify').css({
        //         "position": "static",
        //         "border-bottom": 0
        //     })
        // }

        if (thistop > $(".snacks").offset().top) {
            $('.sup-classify').on("mouseenter", function () {
                $(".sup-slideshow-left").css({
                    "position": "fixed",
                    "top": 38,
                    "z-index": 200
                })
            })

            $(".sup-slideshow-left").on("mouseleave", function () {
                $(this).css({
                    "position": "static"
                })
            })

        }

        if (thistop < $(".snacks").offset().top) {

            $('.sup-classify').on("mouseenter", function () {
                $(".sup-slideshow-left").css({
                    "position": "static"
                })
            })


            $(".sup-slideshow-left").css({
                "position": "static"
            })

        }



        // 1
        if (thistop > snacks) {
            fn(0)
            $(".sup-location").addClass("showhis")
        } else {
            $(".sup-location").removeClass("showhis")
        }

        // 2
        if (thistop > liquor) {
            fn(1)
        }

        // 3
        if (thistop > milk) {
            fn(2)
        }

        // 4
        if (thistop > relaxation) {
            fn(3)
        }

        // 5
        if (thistop > biscuits) {
            fn(4)
        }
        // 6
        if (thistop > drinks) {
            fn(5)
        }
        // 7
        if (thistop > health) {
            fn(6)
        }
        // 8
        if (thistop > rice) {
            fn(7)
        }
        // 9
        if (thistop > oils) {
            fn(8)
        }
        // 10
        if (thistop > clean) {
            fn(9)
        }
        // 11
        if (thistop > hairdressing) {
            fn(10)
        }
        // 12
        if (thistop > nurse) {
            fn(11)
        }

        //13
        if (thistop > paper) {
            fn(12)
        }

        // 14
        if (thistop > family) {
            fn(13)
        }

        // 15
        if (thistop > kitchen) {
            fn(14)
        }
        // 16
        if (thistop > furniture) {
            fn(15)
        }
        // 17
        if (thistop > spin) {
            fn(16)
        }
        // 18
        if (thistop > electric) {
            fn(17)
        }
        // 19
        if (thistop > work) {
            fn(18)
        }
        // 10
        if (thistop > mother) {
            fn(19)
        }

    })


    function fn(num) {
        $(".sup-location a").eq(num).addClass("colors").siblings("a").removeClass("colors")
    }






})