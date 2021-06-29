if(location.pathname == "/") { //Run only on index page    
      
    var images = document.getElementsByClassName("previewImg");
    
    var expandImgDiv = document.getElementById("expandImages"); //Select div that contains big images
    var expandedImages = document.getElementsByClassName("expandedImg"); //Stores the actual expanded image elements
    
    function showProjectImg(imgName) { //Shows container div with darker blured background as well as the img with the passed in ID
        expandImgDiv.classList.add('showExpandedImgDiv');
        for (var i = 0; i < images.length; i++) {
            if(imgName == images[i].id) {
                expandedImages[i].classList.add('showExpandedImg'); //Show clicked on image
            }
        };
    };
    
    function hideProjectImages() { //Removes the classes that display larger images
        expandImgDiv.classList.remove('showExpandedImgDiv');
        for (var i = 0; i < images.length; i++) {
            expandedImages[i].classList.remove('showExpandedImg'); //Hide expanded image
        };
    };
}

//Gets the current pages nav link and underlines it
currentLink = document.querySelectorAll('a[href="'+document.location.pathname+'"]');
currentLink.forEach(function(link) {
    link.className += ' navActivePage';
});



