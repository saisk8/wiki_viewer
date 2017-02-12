$(document).ready(function() {
    $("#query").val(""); //Empty the search field when the page loads
    $(".Reset").on("click", function() {
        $("#query").val("");
        $(".results").html("");
        $(".Reset").addClass("hide");
    })
    $("#search").on("click", function(e) {
        search();
        $("#random").css("display", "none");

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
        success: display

    });
}
// the display function, displays cards
function display(data) {
    $(".results").html("");
    $(".Reset").removeClass("hide");
    $.each(data.query.search, function(index, result) {
        var html_content = ""; // Initialize
        html_content += '<div class="row">';
        html_content += '<div class="col s12 m12">';
        html_content += '<div class="card">';
        html_content += '<div class="card-content">'
        html_content += '<span class="card-title  blue-text text-darken-2">';
        html_content += result.title + "</span>";
        html_content += "<p>" + result.snippet + "</p>";
        html_content += '</div>';
        html_content += '<div class="card-action">';
        html_content += "<a href='https://en.wikipedia.org/wiki/" + result.title.replace(" ", "_") + "'";
        html_content += 'target="_blank">';
        html_content += ' Link</a>';
        html_content += ' </div> </div> </div> </div>';

        $(".results").append(html_content);

    });
}
