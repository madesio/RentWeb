$('.carCarouselx').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
        }
      }
     ]
     
  });