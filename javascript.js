var $mainImages = $(".main-page-images");
var $doc = $('<div id="overlay"></div>');
var $navButtons = $('<input type="button" class="navButtons" id="toLeft" value="<"><input type="button" class="navButtons" id="toRight" value=">"/><input type="button" class="navButtons" id="toExit" value="X"/>');
var $secondMainPage = $("#second-main-page");
var $old_html = $mainImages.html();
var $images = $(".images");
var $navForImages = $("#navForImages");
var $array=[];



$images.on("click",imagesMove);

function imagesMove(){
	var $this = $(this);
	if($images!=$this){
		fillArray()
	}
	//makes it easier to add/remove buttons and images from overlay//
	$doc.append($navButtons);
	$doc.append($this);
	$mainImages.append($doc);
	$mainImages.animate({"margin-right":'+=600'},1000,"linear");
	$(this).unbind("click");
};

	
$mainImages.on("click", '#toExit', exitButton);

function exitButton(){
		$mainImages.delay(400).animate({"margin-right":'-=600'},1000,"linear");
		catchAll();
	};

	
//removes items from overlay and resets main-page-images//
function catchAll(){
		$doc.empty();
		$mainImages.html($old_html);
		$(".images").on("click", imagesMove);
};

//fills array with images that are not $(this)//

function fillArray(){
	var counter = 1;
	while(counter<$images.length){
		$array.push($images.addClass("navimages"));
		$navForImages.append($array);
		counter++
	}
}

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