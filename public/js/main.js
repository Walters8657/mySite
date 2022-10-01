$("#cmsReadMore").click(function() {
    $("#cmsReadMore").hide();
    $("#cmsReadMoreContent").slideToggle();
})

$("#cmsReadLess").click(function() {
    $("#cmsReadMore").show();
    $("#cmsReadMoreContent").slideToggle();
})

$("#speedoReadMore").click(function() {
    $("#speedoReadMore").hide();
    $("#speedoReadMoreContent").slideToggle();
})

$("#speedoReadLess").click(function() {
    $("#speedoReadMore").show();
    $("#speedoReadMoreContent").slideToggle();
})

$("#homeLink").click(function() {
    $("#showcaseHider").show();
    $("#resumeHider").hide();
})

$("#resumeLink").click(function() {
    $("#resumeHider").show();
    $("#showcaseHider").hide();
})