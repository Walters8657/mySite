function openCMSSquare() {
    $("#SpeedometerParagraph").css("position", "absolute");
    $("#ScheduleParagraph").css("position", "absolute");
    
    $("#SpeedometerParagraph").insertBefore("#CMSParagraph");
    $("#ScheduleParagraph").insertBefore("#CMSParagraph");

    $("#SpeedometerParagraph").fadeOut();
    $("#ScheduleParagraph").fadeOut();
    
    $("#CMSParagraph").css("position", "static");        
    $("#CMSParagraph").fadeIn();
}

function openSpeedometerSquare() {
    $("#CMSParagraph").css("position", "absolute");
    $("#ScheduleParagraph").css("position", "absolute");
    
    $("#CMSParagraph").insertBefore("#SpeedometerParagraph");
    $("#ScheduleParagraph").insertBefore("#SpeedometerParagraph");

    $("#CMSParagraph").fadeOut();
    $("#ScheduleParagraph").fadeOut();
    
    $("#SpeedometerParagraph").css("position", "static");   
    $("#SpeedometerParagraph").fadeIn();
}

function openScheduleSquare() {
    $("#CMSParagraph").css("position", "absolute");
    $("#SpeedometerParagraph").css("position", "absolute");
    
    $("#CMSParagraph").insertBefore("#ScheduleParagraph");
    $("#SpeedometerParagraph").insertBefore("#ScheduleParagraph");
    
    $("#CMSParagraph").fadeOut();
    $("#SpeedometerParagraph").fadeOut();
    
    $("#ScheduleParagraph").css("position", "static");   
    $("#ScheduleParagraph").fadeIn();
}

if(location.pathname == "/") { //Run only on index page    
    $( "#CMSSquare" ).click(function() {
        openCMSSquare();
    });

    $( "#SpeedometerSquare" ).click(function() {
        openSpeedometerSquare();
    });

    $( "#ScheduleSquare" ).click(function() {
        openScheduleSquare();
    });
}

//Gets the current pages nav link and underlines it
currentLink = document.querySelectorAll('a[href="'+document.location.pathname+'"]');
currentLink.forEach(function(link) {
    link.className += ' navActivePage';
});



