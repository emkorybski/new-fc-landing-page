/* Author:

*/

$(document).ready(function(){
    $("#toggle-terms").bind("click", function() {
        //console.log("CLICKED");
        if ($("#terms").hasClass("content-inactive")){
            $("#terms").removeClass("content-inactive");
            $("#terms").addClass("content-active");
            $(this).hide();
        }
        /*
         else if ($("#terms").hasClass("content-active")){
         $("#terms").removeClass("content-active");
         $("#terms").addClass("content-inactive");
         }
         */
    });
    $("#close-terms").bind("click", function() {
        //console.log("CLICKED");
        if ($("#terms").hasClass("content-active")){
            $("#terms").removeClass("content-active");
            $("#terms").addClass("content-inactive");
            $(this).parent().hide();
            $("#toggle-terms").show();
        }
    });
});



