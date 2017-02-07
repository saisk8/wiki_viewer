$(document).ready(function() {
    $("#query").val(""); //Empty the search field when the page loads
    $("#search").on("click", function() {
        search();
        $("#random").addClass("hide");
        $("#text").addClass("hide")
    })

})

function search() {

}
