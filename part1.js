/*global $*/
$("body").keydown(function(event){
    debugger;
    if (event.which === 37) {
        $("#littlebox").css("left", $("#littlebox").offset().left - 10);
    //moves right
    } else if (event.which === 39) {
        $("#littlebox").css("left", $("#littlebox").offset().left + 10);
    }
});