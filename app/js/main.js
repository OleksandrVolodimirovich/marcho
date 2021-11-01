$(function(){

  //filter shop-content list 
  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });
  
  //selects
  $('.select-style').styler();

  // filter-price
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });  

    // star reiting
  $('.star').rateYo({ 
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
  });

  //slick slaider
  $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
  });


/*
    // promo timer
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
        total,
        days,
        hours,
        minutes, 
        seconds
        };
    }
    
    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__timer');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');
    
        function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
        }
    
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);// -> такий код не надає змоги завдати час через адмін панель, і час обнулюється через очистку кеш
    //const deadline = $('.promo__timer').attr('data-time'); //-> зробив зміну часу через Html(в mozilla не працює), можна редагувати через адмін панель
    //const deadline = '2021-10-30'; //для тесту, але працює в mozilla
    initializeClock('promo__timer', deadline);

*/




});