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

    console.log($(".agjImgxx"))
    $(".agjImgxx").hover(
        function () {

        }
    )

})