var click = ('ontouchstart' in document.documentElement)  ? 'touchstart' : 'mousedown';

$(".images").on(click,function(){
	var $mainImages = $(".main-page-images");
	var $doc = $('<div id="overlay"></div>');
	$doc.append($(this));
	$mainImages.append($doc);
	$mainImages.delay(400).animate({"margin-right":'+=600'},2000,"linear",function(){
		$(this).after();
	});
})

//image onclick should get bigger
	//image should move to the left
		//nav buttons should appear on enlarged image
			//other images should move to small circles on right
				//content about person should appear below small circles
					//images should slide with nav
						//bio should slide as well