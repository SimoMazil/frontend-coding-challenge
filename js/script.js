$(function () {
  $(".images-slides").slidesjs({
    navigation: {
      active: false
    },
    pagination: {
      active: false
    }
  });

  verticalAlignArrows()
})

$(window).on('resize', function(){
  verticalAlignArrows()
});

function verticalAlignArrows() {
  setTimeout(function () {
    const slide_height = $(".hover-events").height()
    const arrow_dynamic_height = (slide_height - 30) / 2
    $(".arrow-left, .arrow-right").css({"top": `${arrow_dynamic_height}px`})
  }, 50)
}
