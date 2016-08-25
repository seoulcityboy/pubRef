$(function(){
    $(".ma").on('click',function () {
        var bImg = $(this).attr('data-width');
        $(this).find("img").attr('src','../images/'+bImg).load(function () {
            var imgW = $(this).width();
            console.log(imgW);
        });
    });
});