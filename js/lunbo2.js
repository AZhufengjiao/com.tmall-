$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let num = 1
    $(".swiper-button-next").on("click", function () {
        num++
        if (num > $(".carousel-indicator-dots li").length) {
            num = $(".carousel-indicator-dots li").length
        }

    })
    $(".swiper-button-prev").on("click", function () {
        num--
        if (num < 0) {
            num = 0
        }
    })

    $(".lunbozimg s").html(`${num}`)
})