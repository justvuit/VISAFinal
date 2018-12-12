$(function() {
  $('.cls-a1').hover(function() {
    $('.person2').css('opacity', '.7');
  }, function() {
    // on mouseout, reset the background colour
    $('.person2').css('opacity', '1');
  });
});

$(function() {
  $('.cls-a2').hover(function() {
    $('.person1').css('opacity', '.7');
  }, function() {
    // on mouseout, reset the background colour
    $('.person1').css('opacity', '1');
  });
});

$(function() {
  $('.cls-a5').hover(function() {
    $('.person3').css('opacity', '.7');
  }, function() {
    // on mouseout, reset the background colour
    $('.person3').css('opacity', '1');
  });
});

// $(function() {
//   $('.person2').hover(function() {
//     $('.cls-a1').css('opacity', '.7');
//   }, function() {
//     // on mouseout, reset the background colour
//     $('.cls-a1').css('opacity', '1');
//   });
// });
//
// $(function() {
//   $('.person1').hover(function() {
//     $('.cls-a2').css('opacity', '.7');
//   }, function() {
//     // on mouseout, reset the background colour
//     $('.cls-a2').css('opacity', '1');
//   });
// });
//
// $(function() {
//   $('.person3').hover(function() {
//     $('.cls-a5').css('opacity', '.7');
//   }, function() {
//     // on mouseout, reset the background colour
//     $('.cls-a5').css('opacity', '1');
//   });
// });
