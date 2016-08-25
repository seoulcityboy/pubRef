$(function(){


});
function rolling(target) {
	var $target = target,
		$base = $target.find("ul"),
		$prev = $target.find('.prev'),
		$next = $target.find('.next'),
		$pagingN =$target.find(".paging"),
		$area =$base.find("li"),
	 	$stop = $target.find('.stop'),
	 	$play = $target.find('.play'),
		listLength = $area.length,
		$width = $area.width(),
		count=1;
	console.log($width);

	// 초기세팅
	$base.css("width",  $width * listLength + "px");
	$base.find("li:last").prependTo($base);
	$base.css("margin-left", "-" + $width + "px");
	$base.find('li').each(function(){
		$pagingN.prepend("<a href='#'></a>");
	});
	$pagingN.find("a:first").addClass("on");

	$pagingN.find("a").on('click',function(){
		var idxNum= ($(this).index())+1;
		console.log(idxNum);
		return false;
	});

	// 다음
	$next.on('click',function(){
		/*not(:animated) 첨부 시 애니메이션 실행 중복방지*/
		$target.find("ul:not(:animated)").clearQueue().animate({"marginLeft":"-=" + $width + "px"},"slow",function(){
			$base.find("li:first").appendTo($base); // 첫번째 컨텐츠 뒤로 이동
			$base.css("margin-left", "-" + $width +"px");
			if(count==listLength){
				count=1;
			}else{
				count++;
			}
			paging(count);
		});

		return false;
	});

	// 이전
	$prev.on('click', function(){
		$target.find("ul:not(:animated)").clearQueue().animate({"marginLeft":"+=" + $width + "px"},"slow",function(){
			$base.find("li:last").prependTo($base); //마지막 컨텐츠 앞으로 이동
			$base.css("margin-left", "-" + $width +"px");
			if(count==1){
				count=listLength;
			}else{
				count--;
			}
			paging(count);
		});
		return false;
	});
	auto();

	/* 재생 일시정지 */
	 function auto(){
	     var timer = window.setInterval(function(){ $next.click(); }, 5000 ); // 자동으로 메뉴 이동 실행
	     $stop.on('click', function(){ window.clearInterval(timer); });
	     $play.on('click', auto);
	 }
	function paging(num){
		var num = num-1;
		$pagingN.find("a").removeClass("on");
		$pagingN.find("a").eq(num).addClass("on");
	}
}