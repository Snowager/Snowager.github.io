var degree = 0;
var photoList = ['photo/dog1.jpg', 'photo/dog2.jpg', 'photo/dog3.jpg', 'photo/dog4.jpg', 'photo/dog5.jpg', 'photo/dog6.jpg', 'photo/dog7.jpg', 'photo/dog8.jpg', 'photo/dog9.jpg', 'photo/dog10.jpg']
var iterator = 0;
var dogindex = ['0', '1', '2', '3'];
var bubbleindex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
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
    if (iterator >= 10) {
        iterator = 0;
    }
    if (dogiterator >= 4) {
        dogiterator = 0;
    }
    $("#"+dogindex[dogiterator]).attr("src", photoList[iterator]);
    $(".b"+bubbleindex[iterator]).css("background-color", "rgb(49, 15, 240)");
    for (var x = 0; x < bubbleindex.length; x++) {
        if (x != iterator) {
            $(".b"+bubbleindex[x]).css("background-color", "rgb(255, 255, 255)");    
        }
    }
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
        iterator = 9;
    }
    if (dogiterator <= -1) {
        dogiterator = 3;
    }
    $("#"+dogindex[dogiterator]).attr("src", photoList[iterator]);
    $(".b"+bubbleindex[iterator]).css("background-color", "rgb(49, 15, 240)");
    for (var x = 0; x < bubbleindex.length; x++) {
        if (x != iterator) {
            $(".b"+bubbleindex[x]).css("background-color", "rgb(255, 255, 255)");    
        }
    }
});