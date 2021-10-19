var degree = 0;
var photoList = ['photo/dog1.jpg', 'photo/dog2.jpg', 'photo/dog3.jpg', 'photo/dog4.jpg', 'photo/dog5.jpg', 'photo/dog6.jpg', 'photo/dog7.jpg', 'photo/dog8.jpg', 'photo/dog9.jpg', 'photo/dog10.jpg', 'photo/dog11.jpg']
var iterator = 0;
var dogindex = ['0', '1', '2', '3'];
var dogiterator = 0;
$(document).on('click', '.button2', function(event) {
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
    console.log("test");
});
$(document).on('click', '.button1', function(event) {
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