var container;
var imgCount = 1;
var totalImageCount = 65;

window.onload = function() {
	container = document.getElementById("main");
	var imagesCreated = generateImages();

	if(imagesCreated)
		centerImages(1, false);

	setTimeout(function() {
		centerImages(1, true);
	}, 25000);
	
};

window.onresize = function () {centerImages(1, true);};

function centerImages(imgC, resize) {
	
	if ($(window).width() < 992) {					///If it falls under the medium range
	
		var images = document.getElementsByClassName("portfolioImagesh");
		for (i = 0; i < images.length; i++) {
			images[i].style.marginTop = "10px";
		}
	 	return;
	}

	var img = Number(imgC);

	var img0 = document.getElementById("img" + img); img++;
	var img0Height;
	var img0Difference;

	var img1 = document.getElementById("img" + img); img++;
	var img1Height;
	var img1Difference;

	var img2 = document.getElementById("img" + img); img++;
	var img2Height;
	var img2Difference;

	var maxPixels;
	
	if (!resize) {
		$(img2).load(function () {  	//The third image should be the last one being rendered so using that as your basis will ensure that all the images are rendered
			///Grab the heights for all the images
	
			img0Height = $(img0).height();
			img1Height = $(img1).height();
			img2Height = $(img2).height();

			img0Height > img1Height ? maxPixels = img0Height : maxPixels = img1Height;		///Figures out which one is the largest image
			maxPixels > img2Height ? maxPixels = maxPixels : maxPixels = img2Height;

			var baseline = maxPixels / 2;		///Gets the baseline for the largest image

			img0Difference = Math.abs(baseline - (img0Height / 2));			///Gets the difference in baselines for all of these
			img1Difference = Math.abs(baseline - (img1Height / 2));
			img2Difference = Math.abs(baseline - (img2Height / 2));
				
			///Now add margins to center all the images to the largest image's baseline
			img0.style.marginTop = img0Difference + "px";
			img1.style.marginTop = img1Difference + "px";
			img2.style.marginTop = img2Difference + "px";
		});
	}
	else {
		$(img2).ready(function () {  	//The third image should be the last one being rendered so using that as your basis will ensure that all the images are rendered
			///Grab the heights for all the images

			img0Height = $(img0).height();
			img1Height = $(img1).height();
			img2Height = $(img2).height();

			img0Height > img1Height ? maxPixels = img0Height : maxPixels = img1Height;		///Figures out which one is the largest image
			maxPixels > img2Height ? maxPixels = maxPixels : maxPixels = img2Height;

			var baseline = maxPixels / 2;		///Gets the baseline for the largest image

			img0Difference = Math.abs(baseline - (img0Height / 2));			///Gets the difference in baselines for all of these
			img1Difference = Math.abs(baseline - (img1Height / 2));
			img2Difference = Math.abs(baseline - (img2Height / 2));
				
			///Now add margins to center all the images to the largest image's baseline
			img0.style.marginTop = img0Difference + "px";
			img1.style.marginTop = img1Difference + "px";
			img2.style.marginTop = img2Difference + "px";
		});
	}
	
	if(img + 3 <= 52)			///If there is another row to check, check it
		centerImages(img,resize);
}

function generateImages(){	///Generates all the images ; No formatting
	
	var row = document.createElement("div");	///Row element for the photos
	row.setAttribute("class", "row");

	var photoContainer1 = document.createElement("div");				///The container for this image
	photoContainer1.setAttribute("class", "col s12 m12 l4 center");		///The classes for the container ; Note that this has m12 this is for the responsive layout

	var photo1 = document.createElement("img");													///The first image in the row
	photo1.setAttribute("class", "resp-img panel-img-margin z-depth-3 hoverable portfolioImagesh");		///The first image's classes
	photo1.setAttribute("src", "./images/img_" + imgCount + ".jpg");							///The first image's photo
	photo1.setAttribute("id", "img"+imgCount);													///Add the id so we can find it afterwards
	imgCount++;																					///Increment the imgCount so we grab the next image in the next container

	photoContainer1.appendChild(photo1);												///Append the photo to the photo's container

	var photoContainer2 = document.createElement("div");			///Then repeat for the other two containers for a 3 panel layout. Note m6: This is for the responsive layout
	photoContainer2.setAttribute("class", "col s12 m6 l4 center");

	var photo2 = document.createElement("img");
	photo2.setAttribute("class", "resp-img panel-img-margin z-depth-3 hoverable portfolioImagesh");
	photo2.setAttribute("src", "./images/img_" + imgCount + ".jpg");
	photo2.setAttribute("id", "img"+imgCount);
	imgCount++;

	photoContainer2.appendChild(photo2);

	var photoContainer3 = document.createElement("div");
	photoContainer3.setAttribute("class", "col s12 m6 l4 center");

	var photo3 = document.createElement("img");
	photo3.setAttribute("class", "resp-img panel-img-margin z-depth-3 hoverable portfolioImagesh");
	photo3.setAttribute("src", "./images/img_" + imgCount + ".jpg");
	photo3.setAttribute("id", "img"+imgCount);
	imgCount++;

	photoContainer3.appendChild(photo3);

	var divider = document.createElement("div");			///Divider div for seperating the rows
	divider.setAttribute("class","row divider");


	row.appendChild(photoContainer1);						///Append the photo containers to the row
	row.appendChild(photoContainer2);
	row.appendChild(photoContainer3);

	container.appendChild(row);								///Append the row to the main content container
	container.appendChild(divider);							///Append the divider to the main content container

	var completion;

	if(imgCount + 3 <= totalImageCount)				///If there are 3 more images available for adding to the page then add them in a row below the one just created
		completion = generateImages();
	else {
		return true;
	}

	$(window).scrollTop(0);
	
	return completion;				///Return the boolean that states that we have finished
}
