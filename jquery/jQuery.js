$(document).ready(function() {
    "use strict";

    $('button').click(function(){
    alert("Your query was submitted successfully! ✌✌");
    location.reload(true);
    });

    $('nav > span > a').click(function(){
        $('a').removeClass("active");
        $(this).addClass("active");
  });
});