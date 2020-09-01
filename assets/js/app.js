//TMDB Initial Values
const API_KEY = '5ec279387e9aa9488ef4d00b22acc451';
//getCookie('tmdbapikey');
// Endpoint
const endpoint = 'http://api.themoviedb.org/3/search/movie?api_key='+API_KEY;
// getCookie('tmdbendpointurl');
const movieURL = 'https://image.tmdb.org/t/p/w500';

// DOM Elements Selection
const inputElement = document.querySelector('#inputValue');
const searchElement = document.querySelector('#search');
const moviesSearchable = document.querySelector('#movies-searchable');

function generateURL(path){
    return `http://api.themoviedb.org/3${path}?api_key=44bd07fbb81022e81679c06c7a5705c9`;
}
function movieSection(movies){
    return movies.map((movie) => { 
        if(movie.poster_path){
            return `<img src=${movieURL+movie.poster_path} data-movie-id=${movie.id}/>`;
        }
    })
}
function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
        <section class="section" width=30 height=50>
            ${ movieSection(movies)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

function renderSearchMovies(data){
    moviesSearchable.innerHTML ='';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    moviesSearchable.appendChild(movieBlock);
    console.log('Data: ', data);
}

searchElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    searchMovie(value);
    inputElement.value = '';
    console.log('Value: ', value);
}

function createIFrame(video){
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;
    return iframe;
}

function createVideoTemplate(data, content){
    content.innerHTML = '<p id="content-close">X</p>';
    console.log("Video Data: ",data);
    const videos = data.results;
    const length = videos.length >4 ? 4:videos.length;
    const iframeContainer = document.createElement('div');
    for (let i = 0; i < length; i++){
        const video = videos[i];
        const iframe = createIFrame(video);
        iframeContainer.appendChild(iframe);
        content.appendChild(iframeContainer);
    }
}
//delegating an event
document.onclick = function(event){
    const target = event.target;
    if(target.tagName.toLowerCase() === 'img'){
        const movieId = target.dataset.movieId;
        console.log("Movie ID: ",movieId);
        const section = event.target.parentElement;
        const content = section.nextElementSibling;//
        content.classList.add('content-display');

        const path = `/movie/${movieId}videos`;
        const url = generateURL(path);
        //fetch videos
        fetch(url)
            .then((res) => res.json())
            .then((data) => createVideoTemplate(data, content))
            .catch((error) => {
                console.log('Error: ', error);
            });
        inputElement.value = '';
    }
    if(target.id === 'content-close'){
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
}
function handleError(error){
    console.log('Error: ', error);
}
function searchMovie(value) {
    const path = '/search/movie';
    const url = generateURL(path) + "&query=" + value;

    requestMovies(url, renderSearchMovies, handleError);
}
function requestMovies(url, onComplete, onError){
    fetch(url).then((res) => res.json()).then(onComplete).catch(onError);
}
// function getCookie(cname){
//     var name = cname + '=';
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++){
//         var c = ca[i];
//         while (c.charAt(0) == ' '){
//             c = c.substring(1);
//             if(c.indexOf(name) == 0){
//                 return c.substring(name.length, c.length);
//             }
//         }
//     }
//     return "";
// }