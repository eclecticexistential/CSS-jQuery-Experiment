var $mainImages = $(".main-page-images");
var $doc = $('<div id="overlay"></div>');
var $navButtons = $('<input type="button" class="navButtons" id="toLeft" value="<"><input type="button" class="navButtons" id="toRight" value=">"/><input type="button" class="navButtons" id="toExit" value="X"/>');
var $secondMainPage = $("#second-main-page");
var old_html = $mainImages.html();



$(".images").on("click", imagesMove);

function imagesMove(){
	$doc.append($navButtons);
	$doc.append($(this));
	$mainImages.append($doc);
	$mainImages.delay(400).animate({"margin-right":'+=600'},1000,"linear");
	$(this).unbind("click");
		$secondMainPage.animate({"margin-left":'+=760'},500,"linear", function(){
		$secondMainPage.css("visibility",'visible');
	});
};
	
$mainImages.on("click", '#toExit', exitButton);

function exitButton(){
		$mainImages.delay(400).animate({"margin-right":'-=600'},1000,"linear");
		$secondMainPage.css("z-index",'-1').delay(1000).animate({"margin-left":'-=1'},1000,"linear", function(){
		$secondMainPage.animate({"margin-left":'-=760'},1000,"linear").css("visibility","hidden");
	});
	catchAll();
	};
	
function catchAll(){
		$doc.empty();
		$mainImages.html(old_html);
		$(".images").on("click", imagesMove);
};


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