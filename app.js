// set variable for youtube endpoint URL
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

/* create getDataFromApi function that establishes the query object
   and runs the getJSON request */
function getDataFromApi(searchTerm, callback) {
    const query = {
        part: 'snippet',
        key: 'AIzaSyClJ6SxTfNrhYiUsnRPYrwEIhZWkTSN9Y8',
        q: `${searchTerm}`
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

// renderResult function with (result) param
function renderResult(result) {
    return `
    <div>
        <h3>
        <a class="js-result-name" href="https://youtu.be/${result.}" target="_blank">${result.snippet.title}</a>
        by <a class="js-user-name" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">${result.snippet.channelTitle}</a></h3>
        <img src="${result.snippet.thumbnails.default.url}">
    </div>
    `;
}



//  displayYouTubeSearchData function with (data) param
function displayYouTubeSearchData(data) {
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}



//  watchSubmit function for form input event listener
function watchSubmit() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromApi(query, displayYouTubeSearchData);
    });
}

$(watchSubmit);
