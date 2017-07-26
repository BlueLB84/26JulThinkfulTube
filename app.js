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
        <a class="js-result-name" href="#" target="_blank">${result.items[i].snippet.title}</a>
        by <a class="js-user-name" href="#" target="_blank">${result.items[i].snippet.channelTitle}</a></h3>
        <img src="${result.items[i].snippet.thumbnails.default.url}">
    </div>
    `;
}



//  displayYouTubeSearchData function with (data) param




//  watchSubmit function for form input event listener

