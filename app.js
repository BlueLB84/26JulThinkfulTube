// set variable for youtube endpoint URL
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

/* create getDataFromApi function that establishes the query object
   and runs the getJSON request */
function getDataFromApi(searchTerm, callback) {
    const query = {
        maxResults: 10,
        part: 'snippet',
        key: 'AIzaSyClJ6SxTfNrhYiUsnRPYrwEIhZWkTSN9Y8',
        q: `${searchTerm}`,
        order: 'viewCount'
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

// renderVideoResult function with (result) param
function renderVideoResult(result) {
    return `
    <div class= 'result video-result'>
        <h3>
        <a class="js-video-name" href="https://youtu.be/${result.id.videoId}" target="_blank">${result.snippet.title}</a>
        by&nbsp<a class="js-video-channel-name" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">${result.snippet.channelTitle}</a></h3>
        <a class="js-video-thumbnail" href="#" target="_blank"><img src="${result.snippet.thumbnails.default.url}"></a>
        <p>${result.snippet.description}</p>
    </div>
    `;
}

// renderChannelResult function with (result) param
function renderChannelResult(result) {
    return `
    <div class='result channel-result'>
        <h3>
        <a class="js-video-name" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">${result.snippet.title} YouTube Channel</a>
        </h3>
        <a class="js-video-thumbnail" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank"><img src="${result.snippet.thumbnails.default.url}"></a>
    </div>
    `;
}

// renderPlaylistResult function with (result) param
function renderPlaylistResult(result) {
    return `
    <div class="result playlist-result'>
        <h3>
        <a class="js-video-name" href="https://www.youtube.com/playlist?list=${result.id.playlistId}" target="_blank">${result.snippet.title}</a>
        by&nbsp<a class="js-video-channel-name" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">${result.snippet.channelTitle}</a></h3>
        <a class="js-video-thumbnail" href="https://www.youtube.com/playlist?list=${result.id.playlistId}" target="_blank"><img src="${result.snippet.thumbnails.default.url}"></a>
    </div>
    `;
}

// https://youtu.be/

//  displayYouTubeSearchData function with (data) param
function displayYouTubeSearchData(data) {
    var ytChan = 'https://www.youtube.com/user/'
    // var ytUrl = 'https://youtube.com/?v=' + videoId
   
    const results = data.items.map((item, index) => {
        if(item.id.videoId) { 
            return renderVideoResult(item);
        }
        if(item.id.channelId) { 
            return renderChannelResult(item);
        }
        if(item.id.playlistId) { 
            return renderPlaylistResult(item);
        }
    })
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
