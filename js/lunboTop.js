$(function () {
    var box = new PictureCarousel('#box', {
        direction: 'left', //轮播方向：left，right
        interval: 3000, //单位ms,轮播持续时间
        duration: 50, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
        autoplay: true, //是否自动播放
        display: 1, //同时显示的滑块数量
        arrow: true, //是否显示左右箭头
        dots: true, //是否显示指示点
        listData: [ //插入图片等的数据
            {
                src: 'images/tb/lunboTop1.webp',
                alt: '1'
            },
            {
                src: 'images/tb/lunboTop2.jpg',
                alt: '2'
            },
            {
                src: 'images/tb/lunboTop3.jpg',
                alt: '3'
            },
            {
                src: 'images/tb/lunboTop4.jpg',
                alt: '4'
            },
            {
                src: 'images/tb/lunboTop5.webp',
                alt: '5'
            }
        ]
    });
    box.init();
})