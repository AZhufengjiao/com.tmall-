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



})