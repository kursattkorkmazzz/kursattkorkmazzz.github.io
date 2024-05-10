$(document).ready(function () {
  $("#slider").bxSlider({
    auto: true,
    pause: 3000,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 10,
    moveSlides: 1,
    randomStart: true,
    pager: true,
    pagerType: "short",
    pagerSelector: "#pager",
  });
});
