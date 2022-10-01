// function showMoreCMS() {
//     document.getElementById("cmsReadMoreContent").className = "";
//     document.getElementById("cmsReadMore").className = "hideElement";
// }

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