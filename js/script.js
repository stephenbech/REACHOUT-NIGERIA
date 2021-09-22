
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');


    // load nytimes
    
    // YOUR CODE GOES HERE!

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=6UVy5YZmOZvhS02L2EGXnui2Wfzf4Xbg'
$.getJSON(nytimesUrl, function (data) {
    $nytHeaderElem.text('New York Times Articles About ' + cityStr);
    articles =data.response.docs;
    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">'+ '<a href="'+article.web_url
        +'">'+article.headline.main+'</a>'+
        '<p>' + article.snippet + '</p>'+
        '</li>');
    };
}).error(function (e) {
    $nytHeaderElem.text('New York Articles Could Not Be Loaded');
});

    return false;
};

$('#form-container').submit(loadData);
