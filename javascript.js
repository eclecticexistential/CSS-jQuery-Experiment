var $mainImages = $(".main-page-images");
var $doc = $('<div id="overlay"></div>');
var $navButtons = $('<input type="button" class="navButtons" id="toLeft" value="<"><input type="button" class="navButtons" id="toRight" value=">"/><input type="button" class="navButtons" id="toExit" value="X"/>');
var $secondMainPage = $("#second-main-page");
var $navForImages = $("#navForImages");
var $old_html = $mainImages.html();
var $old_nav = $navForImages.html();
var $images = $(".images");
var $array=[];
//var $arrayImagesExtra=$('<img class="navimages" src="http://placeimg.com/100/100/arch" alt="architecture"><img class="navimages" src="http://placeimg.com/100/100/people" alt="people"><img class="navimages" src="http://placeimg.com/100/100/tech" alt="tech"><img class="navimages" src="http://placeimg.com/100/100/arch/grayscale" alt="arch grayscale"><img class="navimages" src="http://placeimg.com/100/100/people/sepia" alt="people sepia"><img class="navimages" src="http://placeimg.com/100/100/arch/sepia" alt="arch sepia">');
var $navImages = $(".navimages");
var $actArrImg = [];
var $allOf = $(".here>div");
var $arrayImages=$('<img class="navimages" id="0" src="EmiliaClarke.png" alt="Emilia Clarke"><img class="navimages" id="1" src="AllisonRandal.png" alt="Allison Randal"><img class="navimages" id="2" src="DanaiGurira.png" alt="Danai Gurira"><img class="navimages" id="3" src="RosarioDawson.png" alt="Rosario Dawson"><img class="navimages" id="4" src="LeftEye.png" alt="Left Eye - TLC"><img class="navimages" id="5" src="AnnMargaret.png" alt="Ann Margaret"><img class="navimages" id="6" src="GraceHopper.png" alt="Grace Hopper"><img class="navimages" id="7" src="YoaniSanchez.png" alt="Yoani Sanchez">');


//fills array with images//

function fillArray(){
	for(i=0;i<$images.length;i++){
		$array.push($images[i]);
	}
	for(i=0;i<$arrayImages.length;i++){
		$actArrImg.push($arrayImages[i]);
	}
}


fillArray();


//add text block on second page//

function makeVisible(){
		if(event.target.tagName=="IMG"){
			indexOf = $.inArray(event.target,$images);
					putIn2nd(indexOf);
				}
			}

// needed for second click through cycle on main page otherwise event.target doesn't match//
function willItBlend(){
		if(event.target.tagName=="IMG"){
			for(i=0;i<$images.length;i++){
			if(event.target.id==i){
				indexOf=i;
				putIn2nd(indexOf);
				}
			}
		}
}


function putIn2nd(){
	if($allOf.hasClass("selected")){
		$allOf.removeClass("selected");
			$(".here").append($allOf);
		}
		if($.inArray(indexOf,$allOf)){
				if(!$($allOf[indexOf]).hasClass("selected")){
					$secondMainPage.append($($allOf[indexOf]).addClass("selected"));
				} 
			}
		}

//make the $doc image disappear from navimage array on first click//

function removeNavImage(){
	if(event.target.tagName=="IMG"){
			indexOf = $.inArray(event.target,$images);
			$($actArrImg[indexOf]).hide();
	}
}

$images.on("click",imagesMove).on("click",makeVisible);

function imagesMove(){
	$navForImages.append($actArrImg);
	//makes it easier to add/remove buttons and images from overlay//
	$doc.append($navButtons);
	$doc.append($(this));
	removeNavImage(event.target);
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
		$(".images").on("click", imagesMove).on("click",willItBlend);
};



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

//change text block with left and right buttons//

function updateTextByBtn(m){
	for(i=0;i<$allOf.length;i++){
			if($($allOf[i]).hasClass("selected")){
				var $addNewPos = i+m;
				if($addNewPos>$allOf.length-1){
					$addNewPos=0;
				}
				if($addNewPos<0){
					$addNewPos=$allOf.length-1;
				}
					$(".here").append($allOf[i]);
					$($allOf[i]).removeClass("selected");
					$secondMainPage.append($($allOf[$addNewPos]).addClass("selected"));
				break;
			}
		}
}


//alters mini icon array to move images//

function changeMain(m){
	$($actArrImg).not(":visible").show();
		for(i=0;i<$allOf.length;i++){
			if($($allOf[i]).hasClass("selected")){
				$($actArrImg[i]).show();
				var $newPos = i+m;
					if($newPos>$actArrImg.length-1){$newPos=0;}
					if($newPos<0){$newPos=$actArrImg.length-1;}
						$($actArrImg[$newPos]).hide();
			}
		}
}


//overlay buttons to move images on both sides //

$mainImages.on("click", '#toLeft', function(){
	changeStyle(-1);
	changeMain(-1);
	updateTextByBtn(-1);
});

$mainImages.on("click", '#toRight', function(){
	changeStyle(1);
	changeMain(1);
	updateTextByBtn(1);
});