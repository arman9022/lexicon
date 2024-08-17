$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    speed: 300,
    centerPadding: '20px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
  });
});
$(document).ready(function(){
  $('.bundle-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

$(".testimonial-slider").slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ] 
});
$(".university-slider").slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});