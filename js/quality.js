$(function () {

    // 经过首部导航 隐藏盒子出现
    $(".Tmall-navRbox").hover(
        function () {
            $(this).find(".yc").show()
            $(this).siblings(".yc").show()
        },
        function () {
            $(".yc").hide()
        }
    )
    console.log($(".yc"))


    // 轮播
    var box = new PictureCarousel('#box', {
        direction: 'left', //轮播方向：left，right
        interval: 4000, //单位ms,轮播持续时间
        duration: 50, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
        autoplay: true, //是否自动播放
        display: 1, //同时显示的滑块数量
        arrow: false, //是否显示左右箭头
        dots: true, //是否显示指示点
        listData: [ //插入图片等的数据
            {
                src: 'images/quality/lunbo01.png',
                alt: '1'
            },
            {
                src: 'images/quality/lunbo02.jpg',
                alt: '2'
            }
        ]
    });
    box.init();
})