$(window).on("load", start);
 
function start(){

   // $("body").css("background-color", "pink");

    $("nav a:first").click();

}



$(document).on("click", "#nav a[href]", nav); 

function nav(e){

    // e.preventDefault();

    var href = $(this).attr("href");
    $("body").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast", 1);
}

