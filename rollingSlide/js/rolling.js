$(function(){


});
function rolling(target) {
	var $target = target,
		$base = $target.find("ul"),
		$objLi = $base.find(" >li"),
		$prev = $target.find('.prev'),
		$next = $target.find('.next'),
		$pagingN =$target.find(".paging"),
		$area =$base.find("li"),
		$stop = $target.find('.stop'),
		$play = $target.find('.play'),
		listLength = $area.length-1,
		$width = $area.width(),
		count= 0,
		$eqList = $objLi.eq(count);


	// 초기세팅
	$objLi.eq(count).addClass("on");
	$eqList.next().addClass("sideR");
	$objLi.last().addClass("sideL"); //마지막 컨텐츠 앞으로 이동

	$base.find('li').each(function(){
		$pagingN.prepend("<a href='#'></a>");
	});
	$pagingN.find("a:first").addClass("on");



	// 페이지 이동
	$pagingN.find("a").on('click',function(){
		if(count==$(this).index()){

		}else if(count < $(this).index()){
			count= $(this).index();
			$target.find("ul:not(:animated)").clearQueue().animate({"margin-left":"-=" + $width + "px"},"slow",function(){
				reset();
				$eqList = $objLi.eq(count);
				$objLi.eq(count).addClass("on");
				if(count==listLength){
					$objLi.first().addClass("sideR");
				} else {
					$eqList.next().addClass("sideR");
				}
				if(count==0){
					$objLi.last().addClass("sideL"); //마지막 컨텐츠 앞으로 이동
				} else {
					$eqList.prev().addClass("sideL");
				}
				paging(count);
			});
		}else if(count > $(this).index()){
			count= $(this).index();
			$target.find("ul:not(:animated)").clearQueue().animate({"marginLeft":"+=" + $width + "px"},"slow",function() {
				reset();
				$eqList = $objLi.eq(count);
				$objLi.eq(count).addClass("on");
				if (count == listLength) {
					$objLi.first().addClass("sideR");
				} else {
					$eqList.next().addClass("sideR");
				}
				if (count == 0) {
					$objLi.last().addClass("sideL"); //마지막 컨텐츠 앞으로 이동
				} else {
					$eqList.prev().addClass("sideL");
				}
				paging(count);
			});
		}

		return false;
	});

	// 다음
	$next.on('click',function(){
		/*not(:animated) 첨부 시 애니메이션 실행 중복방지*/
		$target.find("ul:not(:animated)").clearQueue().animate({"margin-left":"-=" + $width + "px"},"slow",function(){
			reset();
			if(count==listLength){
				count=0;
			}else{
				count++;
			}
			$eqList = $objLi.eq(count);
			$objLi.eq(count).addClass("on");
			if(count==listLength){
				$objLi.first().addClass("sideR");
			} else {
				$eqList.next().addClass("sideR");
			}
			if(count==0){
				$objLi.last().addClass("sideL"); //마지막 컨텐츠 앞으로 이동
			} else {
				$eqList.prev().addClass("sideL");
			}
			paging(count);
		});

		return false;
	});

	// 이전
	$prev.on('click', function(){

		$target.find("ul:not(:animated)").clearQueue().animate({"marginLeft":"+=" + $width + "px"},"slow",function(){
			reset();
			if(count==0){
				count=listLength;
			}else{
				count--;
			}
			$eqList = $objLi.eq(count);
			$objLi.eq(count).addClass("on");
			if(count==listLength){
				$objLi.first().addClass("sideR");
			} else {
				$eqList.next().addClass("sideR");
			}
			if(count==0){
				$objLi.last().addClass("sideL"); //마지막 컨텐츠 앞으로 이동
			} else {
				$eqList.prev().addClass("sideL");
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
		var num = num;
		$pagingN.find("a").removeClass("on");
		$pagingN.find("a").eq(num).addClass("on");
	}
	function reset(){
		$objLi.removeClass("sideL");
		$objLi.removeClass("sideR");
		$objLi.removeClass("on");
		$base.css("margin-left", "0");
	}
}