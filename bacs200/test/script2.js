var degree = 0;
var photoList = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg', 'dog10.jpg', 'dog11.jpg']
var iterator = 0;
var dogindex = ['0', '1', '2', '3'];
var dogiterator = 0;
$(window).on('swipeleft', function(event) {
    var durationC = 150;
    $('.cube').animate({degree: '-=90'}, {
        duration: durationC,
        step: function(degree,fx) {
        $(this).css('-webkit-transform', 'rotateY('+degree+'deg)');
        },   
    },'swing');
    iterator +=1;
    dogiterator += 1;
    if (iterator >= 11) {
        iterator = 0;
    }
    if (dogiterator >= 4) {
        dogiterator = 0;
    }
    $("#"+dogindex[dogiterator]).attr("src", photoList[iterator]);
});
$(window).on('swiperight', function(event) {
    var durationC = 150;
    $('.cube').animate({degree: '+=90'}, {
        duration: durationC,
        step: function(degree,fx) {
        $(this).css('-webkit-transform', 'rotateY('+degree+'deg)');
        },  
    },'swing');
    iterator -=1;
    dogiterator -= 1;
    if (iterator <= -1) {
        iterator = 10;
    }
    if (dogiterator <= -1) {
        dogiterator = 3;
    }
    $("#"+dogindex[dogiterator]).attr("src", photoList[iterator]);
});
