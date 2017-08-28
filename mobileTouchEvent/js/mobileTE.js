console.log("hello");
var dWidth = $(document).width();
var $thisWrap = $("#wrap"),
	$thisBox = $(".moveBox"),
	first_point = 0,
	move_point = 0,
	move = false;

$thisWrap.on('touchstart',tStart);
$thisWrap.on('touchmove',tMove);
$thisWrap.on('touchend',tEnd);
function tStart(e) {
	var event = e.originalEvent;
	first_point = event.touches[0].pageX;
	if(first_point>dWidth-30){
		move = true;
		e.preventDefault();
		console.log(first_point)
	}else{
		move = false;
	}
}
function tMove(e) {
	if(move == false)return;
	var event = e.originalEvent;
	move_point = event.touches[0].pageX;
	if(move_point > dWidth/2 ){
		e.preventDefault();
		$thisBox.css("left",move_point);
	}
	console.log(move_point);
}
function tEnd(e) {
	if(move == false)return;
	e.preventDefault();
	console.log("Fin");
}