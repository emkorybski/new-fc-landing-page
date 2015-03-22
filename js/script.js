/* Author:

*/

$(document).ready(function(){
    $("#toggle-terms").bind("click", function() {
        console.log("CLICKED");
        if ($("#terms").hasClass("content-inactive")){
            $("#terms").removeClass("content-inactive");
            $("#terms").addClass("content-active");
        }
        else if ($("#terms").hasClass("content-active")){
            $("#terms").removeClass("content-active");
            $("#terms").addClass("content-inactive");
        }
    });
});



