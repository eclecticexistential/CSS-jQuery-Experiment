var $mainImages = $(".main-page-images");
var $doc = $('<div id="overlay"></div>');
var $navButtons = $('<input type="button" class="navButtons" id="toLeft" value="<"><input type="button" class="navButtons" id="toRight" value=">"/><input type="button" class="navButtons" id="toExit" value="X"/>');
var $secondMainPage = $("#second-main-page");
var $navForImages = $("#navForImages");
var $old_html = $mainImages.html();
var $old_nav = $navForImages.html();
var $images = $(".images");
var $array=[];
var $arrayImages=$('<img class="navimages" src="http://placeimg.com/100/100/arch" alt="architecture"><img class="navimages" src="http://placeimg.com/100/100/people" alt="people"><img class="navimages" src="http://placeimg.com/100/100/tech" alt="tech"><img class="navimages" src="http://placeimg.com/100/100/arch/grayscale" alt="arch grayscale"><img class="navimages" src="http://placeimg.com/100/100/people/sepia" alt="people sepia"><img class="navimages" src="http://placeimg.com/100/100/arch/sepia" alt="arch sepia">');
var $navImages = $(".navimages");
var $actArrImg = [];
var $allOf = $(".here>div");

//add text block on second page//

function makeVisible(){
		$allOf.first().addClass("selected");
		$secondMainPage.append($(".selected"));
}


$images.on("click",imagesMove);

function imagesMove(){
	fillArray();
	makeVisible()
	$navForImages.append($actArrImg);
	//makes it easier to add/remove buttons and images from overlay//
	$doc.append($navButtons);
	$doc.append($(this));
	$mainImages.append($doc);
	$mainImages.animate({"margin-right":'+=600'},1000,"linear");
	$doc.children("img").unbind("click");
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
	for(i=0;i<$images.length;i++){
		$array.push($images[i]);
	}
	for(i=0;i<$arrayImages.length;i++){
		$actArrImg.push($arrayImages[i]);
	}
}

//alters image on overlay//

function changeStyle(n){
	var x = $doc.children("img").attr("alt");
	var y;
	for(i=0;i<$array.length;i++){
		if($($array[i]).attr('alt')==x){
			y=i;
		}
	}
	var z = y+n;
	if(z>$array.length-1){z=0};
	if(z<0){z=$array.length-1};
	$doc.children($images).remove();
	$doc.append($navButtons);
	$doc.append($array[z])
	$doc.children("img").unbind("click");
}


//alter text blocks//

function updateVisible(){
		if($allOf.first().hasClass("selected")){
			$allOf.first().removeClass("selected");
			}
	}


//alters mini icon array to move images//

function changeMain(m){
	if(m<0){
	var first = $actArrImg.shift();
	$actArrImg.push(first);
	$navForImages.append($actArrImg);
	}
	if(m>0){
	var last=$actArrImg.pop();
	$actArrImg.unshift(last);
	$navForImages.append($actArrImg);
	}
	updateVisible();
}


//overlay buttons to move images on both sides //

$mainImages.on("click", '#toLeft', function(){
	changeStyle(-1);
	changeMain(-1);
});

$mainImages.on("click", '#toRight', function(){
	changeStyle(1);
	changeMain(1);
});