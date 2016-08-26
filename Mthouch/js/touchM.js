$(function () {
    var _firstP = 0,
        _moveVal = 0;
    $(".touchM").on("mousedown",function(e){
        e.preventDefault();
        var event = e.getOriginalEvent;
        _firstP =e.touches[0].clientX;
        console.log(_firstP);
    });
    /*$(".touchM").on("mousemove",function(e){
        e.preventDefault();
        var event = e.getOriginalEvent;
        console.log(_moveVal);
    });*/
    $(".touchM").on("mouseup",function(e){
        e.preventDefault();
        var event = e.touches[0].getOriginalEvent;
        _moveVal = _firstP - e.clientX;
        console.log(_moveVal);
        if(_moveVal==_firstP){

        }else if(_moveVal > 0){
            console.log("이전");
        }else if(_moveVal < 0){
            console.log("다음");
        }
    });
});
/*
offsetX 이벤트 대상 객체에서의 상대적 마우스 X좌표 위치를 반환 - 지역좌표 (IE만 지원)
offsetY 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE만 지원)

layerX 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE 지원 안함)
layerY 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE 지원 안함)

clientX 브라우저 페이지에서의 X좌표 위치를 반환하나 스크롤 무시하고 해당 페이지의 상단을 0 으로 잡음 - 글로벌 좌표
clientY 브라우저 페이지에서의 Y좌표 위치를 반환하나 스크롤 무시하고 해당 페이지의 상단을 0 으로 잡음 - 글로벌 좌표

pageX 브라우저 페이지에서의 X좌표 위치를 반환(스크롤 반영함) - 글로벌좌표(IE 지원 안함)
pageY 브라우저 페이지에서의 Y좌표 위치를 반환(스크롤 반영함) - 글로벌좌표(IE 지원 안함)

screenX 전체 모니터 스크린에서의 마우스 X좌표 위치를 반환
screenY 전체 모니터 스크린에서의 마우스 Y좌표 위치를 반환
*/
