$("#cmsReadMore").click(function() {
    $("#cmsReadMore").css("margin", "0");
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