$(function () {
    $(".Tmall-nav-right-ul li").hover(
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").show()
        },
        function () {
            $(this).find(".Tmall-nav-right-ul-li-bottom").hide()
        }
    )

    $(".Tmall-input-right-text").on("focus", function () {
        // $(".Tmall-input-right-box").show()
        $(this).on("input", function () {
            if ($(this).val() == 1231) {
                $(".Tmall-input-right-box").show()
            }
        })
    })
    $(".Tmall-input-right-text").on("blur", function () {
        $(".Tmall-input-right-box").hide()
        $(".Tmall-input-right-text").val("")
    })

    // 轮播图
    let num = 0
    // 点击右键
    $(".Tmall-slideshow-right").on("click", function () {
        num++
        if (num > $(".Tmall-slideshow-ul li").length - 1) {
            num = 0
        }
        $(".Tmall-slideshow-ul li").eq(num).fadeIn(100).siblings().fadeOut(100)
        $(".Tmall-slideshow-ol li").eq(num).addClass("op").siblings("li").removeClass("op")
    })
    // 点击左键
    $(".Tmall-slideshow-left").on("click", function () {
        num--
        if (num < 0) {
            num = $(".Tmall-slideshow-ul li").length - 1
        }
        $(".Tmall-slideshow-ul li").eq(num).fadeIn(500).siblings().fadeOut(500)
        $(".Tmall-slideshow-ol li").eq(num).addClass("op").siblings("li").removeClass("op")
    })

    $(".Tmall-slideshow-ul li").each(function (index, item) {
        $(".Tmall-slideshow-ol").append("<li></li>")
        // 点击ol里的li
        $(".Tmall-slideshow-ol li").eq(0).addClass("op")
        $(".Tmall-slideshow-ol li").eq(index).on("mouseenter", function () {
            $(this).addClass("op").siblings("li").removeClass("op")
            num = index
            $(".Tmall-slideshow-ul li").eq(num).fadeIn(500).siblings().fadeOut(500)
        })
    })

    let times = setInterval(function () {
        $(".Tmall-slideshow-right").click()
    }, 3000)

})