var $column1, $column2, $column3;

var imageClasses = " resp-img panel-img z-depth-4 hoverable";
var hideOnSmallAndLarge = " hide-on-small-only hide-on-large-only";
var showOnMed = " show-on-medium";

var switchContainer = true;

var fileCount = 87;

$(function () { 
    $column1 = $("#firstCol");
    $column2 = $("#secondCol");
    $column3 = $("#thirdCol");

    generateImages();
}); 

///Generates all the images
function generateImages() {

    for (var imgCount = 1; imgCount <= fileCount; imgCount++) {
        var $photoContainer = generatePhoto(false, imgCount);

        switch (imgCount % 3) {
            case 1:
                $column1.append($photoContainer);
                break;

            case 2:
                $column2.append($photoContainer);
                break;

            case 0:
                $column3.append($photoContainer);
                var photoShownOnMed = generatePhoto(true, imgCount);
                if (switchContainer) {
                    $column1.append(photoShownOnMed);
                    switchContainer = !switchContainer;
                }
                else {
                    $column2.append(photoShownOnMed);
                    switchContainer = !switchContainer;
                }
                break;
        }
    }

    $(window).scrollTop(0);
}

function generatePhoto(showOnMedToggle, imgCount) {

    var classStr = (showOnMedToggle) ? "row center " + showOnMed + hideOnSmallAndLarge : "row center" ;

    var $photoContainer = $('<div>', {"class": classStr.valueOf()})

    var $photo = $('<img>', {"src": ("./images/img (" + imgCount + ").jpg"), "class": imageClasses, "id":"img" + imgCount  });
    
    $photoContainer.append($photo);

    return $photoContainer;
}
