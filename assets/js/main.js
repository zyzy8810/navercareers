$(function () { //문서로드 후 실행 최후실행 1번만!!


// gnb.active 되었을때 슬라이드
  $('.gnb .nav-item').hover(function(){
    if($(this).find('.sub-list').length){
      $('.header').addClass('on')
      $(this).find('.sub-list').addClass('on');
    }
  },function(){
    $('.header').removeClass('on')
      $(this).find('.sub-list').removeClass('on');
  });


// 메인슬라이드
  var swiper = new Swiper(".main-slide", {
    cssMode: true,
    slidePerview: 1,
    spaceBetween: 0,
    autoplay: {
      delay:5000,
    },
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });


// select 색상 변경
  $('.sc-teams select').change(function(){
    $(this).css('color','#000')
  })

  // .people-slide
  var contSlide1 = new Swiper(".people-slide", {
    slidesPerView: 1,
    spaceBetween:30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      768:{
        slidesPerView: 1.1,
      },
    }
  });

// .benefits-slide
var contSlide2 = new Swiper(".benefits-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

//side-nav
  $('.header .btn-menu').click(function(){
    $('.side-nav,.header .btn-menu').toggleClass('on');
  })

  $('.side-search,.btn-close').click(function(){
    $('.side-jobs').toggleClass('on');
  })

  //셀렉트 토글
  $('.sc-teams .group-search .select-area .select-corp').click(function(){
    $('.sc-teams .group-search .select-corp').toggleClass('on');
  })
  $('.sc-teams .group-search .select-area .select-career').click(function(){
    $('.sc-teams .group-search .select-career').toggleClass('on');
  })

  // 푸터 토글
  $('.related').click(function(){
    $('.related-list').toggleClass('on');
  });


  //.side-nav 미디어쿼리
  $('.side-nav .nav').click(function(e) {
    e.preventDefault();
    $(this).parent('.side-nav .nav-item').toggleClass("active");
    $(this).siblings('.side-nav .sub-list').toggle();
    $(this).children('.side-nav .sub-list').addClass("active")
  })


  //search-jobs 미디어쿼리
  $('.side-jobs .select-item .select').click(function (e) {
    e.preventDefault();
    $(this).siblings('.side-jobs .sub-list').toggle();
    $(this).children('.side-jobs .sub-list').addClass("active")
    $(this).children('.side-jobs .select-item .arrow').toggleClass("on")
  })

  $('.side-jobs .sub-item .sub').click(function (e) {
    e.preventDefault();
    $(this).parent('.side-nav .nav-item').toggleClass("active");
    $(this).siblings('.side-jobs .sub-item .select-box').toggle();
    $(this).children('.side-jobs .sub-item .select-box').addClass("active")
    $(this).children('.side-jobs .select-item .sub-item .arrow').toggleClass("on")
  })

  //체크박스 토글 추가
  $('.all-chk').click(function () {
    var target = $(this).data('chk');
    var targetInputs = $(target).find('input');
    targetInputs.each(function () {
      $(this).prop('checked', !$(this).prop('checked'));
    });
    
    var areAllChecked = targetInputs.length === targetInputs.filter(':checked').length;
    $(this).prev().prop('checked', areAllChecked);
  });

  $('.btn-clear').on('click', function () {
    $('input').prop('checked', false);
    // 체크 해제 후 배경색을 #000으로 변경
    $('input+label').css('background-color', '#fff');
  });

});