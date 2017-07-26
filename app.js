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
        <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a>
        by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h3>
        <p>Number of views: <span class="js-view-count">${result.view_count}</span></p>
    </div>
    `;
}



//  displayYouTubeSearchData function with (data) param




//  watchSubmit function for form input event listener

