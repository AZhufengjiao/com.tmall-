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

    // 鼠标经过h2 显示盒子
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

})