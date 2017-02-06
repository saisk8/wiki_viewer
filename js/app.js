$(document).ready(function() {
    //When the search icon is clicked
    $('#search').click(function() {
        var query = $('#query').val();
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + query,
            dataType: 'jsonp',
            type: 'POST',
            headers: {
                'Api-User-Agent': 'Example/1.0'
            },
            success: function(data) {

                // First we clear the children from our class to make sure no previous results are showing.
                $('#results').empty();

                // Then we also clear the array with the results before providing new information.
                arrResults.length = 0;
                var resArr = data.query.search;

                //For each result, generate the html data.
                for (var result in resArr) {
                    arrResults.push(new Result(resArr[result].title, resArr[result].snippet));
                    html = '<div id="articles"><a href="https://en.wikipedia.org/wiki/' + resArr[result].title + '"target="_blank"><h3>' + resArr[result].title + '</h3><p>' + resArr[result].snippet + '</p></a></div>';

                    // Displays the elements to the page
                    $('#results').append(html);
                }
            }
        });
    });

    function Result(title, snippet) {
        this.title = title;
        this.snippet = snippet;
    }
});
