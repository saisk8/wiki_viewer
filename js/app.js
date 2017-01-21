$(document).ready(function() {
    Materialize.updateTextFields();
});
$('input.autocomplete').autocomplete({
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'http://placehold.it/250x250'
    }
});

//When the search icon is clicked
