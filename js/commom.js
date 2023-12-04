const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    loop: true, // ループ有効
    slidesPerView: 4, // 一度に表示する枚数
    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
        delay: 0, // 途切れなくループ
    },
});


