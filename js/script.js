$(function () {
    verticalAlignArrows()
})

$(window).on('resize', function(){
    verticalAlignArrows()
});

function verticalAlignArrows() {
  const slide_height = $(".slide img").height()
  const arrow_dynamic_height = (slide_height - 30) / 2
  $(".arrow-left, .arrow-right").css({"top": `${arrow_dynamic_height}px`})
}
