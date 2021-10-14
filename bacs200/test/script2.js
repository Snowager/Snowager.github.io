var degree = 0;
$(window).on('swipe', function(event) {
    var durationC = 200;
    $('.cube').animate({degree: '+=90'}, {
        duration: durationC,
        step: function(degree,fx) {
        $(this).css('-webkit-transform', 'rotateY('+degree+'deg)');
        },
        
    },'linear');
});

