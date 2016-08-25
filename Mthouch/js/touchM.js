$(function () {
    $(".touchM").on("mousedown",function(e){
        e.preventDefault();
        console.log(e.clientX);
    });
});