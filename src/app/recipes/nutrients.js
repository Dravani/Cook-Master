function display() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "6f416537bcmsha12869768d0b7d0p123a2fjsn937d84d161ee",
            "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        alert(response);
    });
}