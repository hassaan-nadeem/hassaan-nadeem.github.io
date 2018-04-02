var imgCount = 1;
var totalImageCount = 65;

var switchContainer = true;

var coloum1; var coloum2;  var coloum3;

window.onload = function() {
    container = document.getElementById("main");

    coloum1 = document.getElementById("firstCol");
    coloum2 = document.getElementById("secondCol");
    coloum3 = document.getElementById("thirdCol");

    var imagesCreated = generateImages();
    	
};

var imageClasses = " resp-img panel-img z-depth-4 hoverable";
var hideOnSmallAndLarge =  " hide-on-small-only hide-on-large-only";
var showOnMed = " show-on-medium";

function generateImages(){	///Generates all the images ; No formatting
	
	var photoContainer1 = document.createElement("div");				///The container for this image
	photoContainer1.setAttribute("class", "row center");		///The classes for the container ; Note that this has m12 this is for the responsive layout

	var photo1 = document.createElement("img");													///The first image in the row
	photo1.setAttribute("class", imageClasses);		///The first image's classes
	photo1.setAttribute("src", "./images/img_" + imgCount + ".jpg");							///The first image's photo
	photo1.setAttribute("id", "img"+imgCount);													///Add the id so we can find it afterwards
	imgCount++;																					///Increment the imgCount so we grab the next image in the next container

	photoContainer1.appendChild(photo1);												///Append the photo to the photo's container

	var photoContainer2 = document.createElement("div");			///Then repeat for the other two containers for a 3 panel layout. Note m6: This is for the responsive layout
	photoContainer2.setAttribute("class", "row center");

	var photo2 = document.createElement("img");
	photo2.setAttribute("class", imageClasses);
	photo2.setAttribute("src", "./images/img_" + imgCount + ".jpg");
	photo2.setAttribute("id", "img"+imgCount);
	imgCount++;

    photoContainer2.appendChild(photo2);
    
    
    var photoContainer3 = document.createElement("div");
    photoContainer3.setAttribute("class", "row center");

    var photo3 = document.createElement("img");
    photo3.setAttribute("class", imageClasses );
    photo3.setAttribute("src", "./images/img_" + imgCount + ".jpg");
    photo3.setAttribute("id", "img"+imgCount);
    
    photoContainer3.appendChild(photo3);

    var tempPhotoContainer = document.createElement("div");
    tempPhotoContainer.setAttribute("class" , "row center " + showOnMed + hideOnSmallAndLarge);

    var tempPhoto = document.createElement("img");													///The first image in the row
    tempPhoto.setAttribute("class", imageClasses );		///The first image's classes
    tempPhoto.setAttribute("src", "./images/img_" + imgCount + ".jpg");							///The first image's photo
    tempPhoto.setAttribute("id", "img"+imgCount);													///Add the id so we can find it afterwards
    imgCount++;
    
    if(switchContainer){
        coloum1.appendChild(tempPhotoContainer);
        switchContainer = false;
    }
    else{
        coloum2.appendChild(tempPhotoContainer);
        switchContainer = true;
    }

	
	coloum1.appendChild(photoContainer1);						///Append the photo containers to the row
    coloum2.appendChild(photoContainer2);
    coloum3.appendChild(photoContainer3);
    
	var completion;

	if(imgCount + 3 <= totalImageCount)				///If there are 3 more images available for adding to the page then add them in a row below the one just created
		completion = generateImages();
	else {
		completion = true;
	}

	$(window).scrollTop(0);
	
	return completion;				///Return the boolean that states that we have finished
}
