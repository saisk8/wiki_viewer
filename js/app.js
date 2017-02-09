$(document).ready(function() {
    $("#query").val(""); //Empty the search field when the page loads
    $("#search").on("click", function() {
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

function display(data) {
    $(".results").html("");
    var html_content = "";
    $.each(data.query.search, function(index, result) {
        html_content += '<div class="row">';
        html_content += '<div class="col s12 m12">';
        html_content += '<div class="card blue-grey darken-1">';
        html_content += '<div class="card-content white-text">'
        html_content += '<span class="card-title">';
        html_content += result.title + "</span>";
        html_content += "<p>" + result.snippet + "</p>";
        html_content += '</div>';
        html_content += '<div class="card-action">';
        html_content += "<a href='https://en.wikipedia.org/wiki/" + result.title.replace(" ", "_") + "'>";
        html_content += ' Link</a>';
        html_content += ' </div> </div> </div> </div>';

        $(".results").append(html_content);
    });
}
