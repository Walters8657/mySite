var speedoImg1 = document.getElementById("speedoImg1");
var speedoImg2 = document.getElementById("speedoImg2");
var speedoImg3 = document.getElementById("speedoImg3");

var cahsmImg1 = document.getElementById("cahsmImg1");
var cahsmImg2 = document.getElementById("cahsmImg2");

var expandImgDiv = document.getElementById("expandImages");

var expandedSpeedo1 = document.getElementById("expandSpedo1");
var expandedSpeedo2 = document.getElementById("expandSpedo2");
var expandedSpeedo3 = document.getElementById("expandSpedo3");

var expandScheduler1 = document.getElementById("expandScheduler1");
var expandScheduler2 = document.getElementById("expandScheduler2");

var images = [speedoImg1, speedoImg2, speedoImg3, cahsmImg1, cahsmImg2]; //Stores the actual image elements to click on
var expandedImages = [expandSpedo1, expandSpedo2, expandSpedo3, expandScheduler1, expandScheduler2]; //Stores the actual expanded image elements

function showProjectImg(imgName) { //Shows container div with darker blured background as well as the img with the passed in ID
    expandImgDiv.classList.add('showExpandedImgDiv');
    for (var i = 0; i < images.length; i++) {
        if(imgName == images[i].id) {
            expandedImages[i].classList.add('showExpandedImg');
        }
    };
};

function hideProjectImages() { //Removes the classes that display larger images
    expandImgDiv.classList.remove('showExpandedImgDiv');
    for (var i = 0; i < images.length; i++) {
        expandedImages[i].classList.remove('showExpandedImg');
    };
};