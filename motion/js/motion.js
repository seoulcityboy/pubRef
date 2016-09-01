$(function () {
    $(window).scroll(function () {
        var topVal = $(this).scrollTop();
        console.log(topVal);
        if(topVal>160){
            $(".wing").addClass("on");
        }else{
            $(".wing").removeClass("on");
        }
    });
});