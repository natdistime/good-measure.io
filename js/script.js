$(window).on("load", start);
 
function start(){

   // $("body").css("background-color", "pink");

        
}



$(document).on ("click", "#nav a[href]", nav); 

function nav(e) {

    //e.preventDefault();

    var href = $(this).attr("href");
    alert(href);
    //$("#content").load("modules/" + href);
}
