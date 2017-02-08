$(document).ready(function() {
    $("#query").val(""); //Empty the search field when the page loads
    $("#search").on("click", function() {
        search();
        $("#random").addClass("hide");
        $("#text").addClass("hide")
    })

})

function search() {
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback",
        dataType: 'jsonp',
        data: {
            action: "query",
            list: "search",
            srsearch: $("#query").val(),
            srinfo: "suggestion",
            srlimit: "10",
            format: "json"
        },
        xhrFields: {
            withCredentials: true
        },
        success: display,
        error: function() {
            $("random").removeClass("hide");
            $("text").removeClass("hide");

        }
    });
}
