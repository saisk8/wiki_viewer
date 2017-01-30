$(document).ready(function() {
    //When the search icon is clicked
    $('#search').click(function() {
        var query = $('#query').val()
        var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
        var callback = '&callback=JSON_CALLBACK';
        var url = api + query + callback;
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function(data) {
                //When the call is a success
                $('#results').prepend(data);

            },
            error: function(message) {
                alert('Request failed, try again for ' + url);
                $('#results').prepend(data);

            }

        });
    });
});
