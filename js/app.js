$(document).ready(function() {
    //When the search icon is clicked
    $('#search').click(function() {
        var query = $('#query').val();
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + query;
            "method": "GET"
        }).done(function(response) {
            console.log(response);
        });
    });
});
