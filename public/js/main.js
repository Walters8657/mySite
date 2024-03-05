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
    $("#funToolsHider").hide();
})

$("#resumeLink").click(function() {
    $("#resumeHider").show();
    $("#showcaseHider").hide();
    $("#funToolsHider").hide();
})

$("#funToolsLink").click(function() {
    $("#funToolsHider").show();
    $("#showcaseHider").hide();
    $("#resumeHider").hide();
})