var $mainImages = $(".main-page-images");
var $doc = $('<div id="overlay"><input type="button" class="navButtons" id="toLeft" value="<"><input type="button" class="navButtons" id="toRight" value=">"/><input type="button" class="navButtons" id="toExit" value="X"/></div>');
var $secondMainPage = $("#second-main-page");


$(".images").on("click",function(){
	$doc.append($(this));
	$mainImages.append($doc);
	$mainImages.delay(400).animate({"margin-right":'+=600'},1000,"linear");
	$(this).unbind("click");
		$secondMainPage.animate({"margin-left":'+=760'},500,"linear", function(){
		$secondMainPage.css("visibility",'visible');
	});
});

	$mainImages.on("click", '#toExit', function(){
		$mainImages.delay(400).animate({"margin-right":'-=600'},1000,"linear");
		$secondMainPage.css("z-index",'-1').delay(700).animate({"margin-right":'-=760'},500,"linear", function(){
		$secondMainPage.delay(400).css("visibility","hidden");
	});
		$mainImages.unbind();
		$doc.hide();
	});



$mainImages.on("click", '#toLeft', function(){
	alert("Hi");
});

$mainImages.on("click", '#toRight', function(){
	alert("Hi");
});



//image onclick should get bigger
	//image should move to the left
		//nav buttons should appear on enlarged image
			//other images should move to small circles on right
				//content about person should appear below small circles
					//images should slide with nav
						//bio should slide as well