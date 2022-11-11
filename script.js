//Инициализируем Swiper

new Swiper('.image-slider', {

    navigation:{

        //Отображение стрелочек вперёд назад

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination',
        
        clickable: true,

        dynamicBullets: true,

        

    },
    //Изменение кол-ва отображаемых слайдов
    
    

    slidesPerView: 5,
});



