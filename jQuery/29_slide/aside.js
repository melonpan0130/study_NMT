$(function() {
    var aside = $("aside");
    var button = aside.find('button');
    var duration = 300;

    button.click(function() {
        aside.toggleClass('open');
        if(aside.hasClass('open')) {
            aside.stop().animate({
                left:'0px'
            }, duration);
            button.find('img').attr('src', './slide/btn_close.png');
        }
        else {
            aside.stop().animate({
                left:'-250px'
            }, duration);
            button.find('img').attr('src', './slide/btn_open.png');
        }
    })
})