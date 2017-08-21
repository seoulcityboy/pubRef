console.log("hello");
var $thisWrap = $("#wrap"),
	$thisBox = $(".moveBox"),
	first_point = 0,
	move_point = 0;

$thisWrap.on('touchstart',tStart);
$thisWrap.on('touchmove',tMove);
$thisWrap.on('touchend',tEnd);
function tStart(e) {
	e.preventDefault();
	var event = e.originalEvent;
	first_point = event.touches[0].pageX;
	console.log(first_point)
}
function tMove(e) {
	e.preventDefault();
	var event = e.originalEvent;
	move_point = event.touches[0].pageX;
	$thisBox.css("left",move_point);
	console.log(move_point);
}
function tEnd(e) {
	e.preventDefault();
	$thisBox.css("left",move_point);
	console.log("Fin");
}