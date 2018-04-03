var coloum1; var coloum2;  var coloum3;

var imgCount = 1;
var fileCount = 65;

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

var switchContainer = true;

function generateImages(){	///Generates all the images ; No formatting
    
    var photoContainer = generatePhoto(false);

    switch(imgCount%3){
        case 1:
            coloum1.appendChild(photoContainer);
            break;

        case 2:
            coloum2.appendChild(photoContainer);
            break;

        case 0:
            console.log('hidden: '  + imgCount);
            coloum3.appendChild(photoContainer);   
            var photoShownOnMed = generatePhoto(true);
            if(switchContainer){
                console.log('container 1');
                coloum1.appendChild(photoShownOnMed);
                switchContainer = !switchContainer;
            } 
            else { 
                console.log('container 2');
                coloum2.appendChild(photoShownOnMed);
                switchContainer = !switchContainer;
            }     
            break;
    }

    imgCount++;

    if(imgCount <= fileCount){
        generateImages();           // If there are still more files to set up then set them up
    } 

	$(window).scrollTop(0);
	
	return;	
}

function generatePhoto(showOnMedToggle){

    var photoContainer = document.createElement("div");		    /// The container for this image
    if(showOnMedToggle == false) {
        photoContainer.setAttribute("class", "row center");		/// The classes for the container 
    }
    else{
        photoContainer.setAttribute("class" , "row center " + showOnMed + hideOnSmallAndLarge);
    }

	var photo = document.createElement("img");
    photo.setAttribute("class", imageClasses);
	photo.setAttribute("src", "./images/img_" + imgCount + ".jpg");
    photo.setAttribute("id", "img"+imgCount);
    
    photoContainer.appendChild(photo);

    return photoContainer;
}