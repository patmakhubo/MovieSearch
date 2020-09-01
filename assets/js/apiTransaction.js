//TMDB Initial Values
const API_KEY = '5ec279387e9aa9488ef4d00b22acc451';
//getCookie('tmdbapikey');
// Endpoint
const endpoint = 'http://api.themoviedb.org/3/search/movie?api_key='+API_KEY;
// getCookie('tmdbendpointurl');
const movieURL = 'https://image.tmdb.org/t/p/w500';

function generateURL(path){
    return `http://api.themoviedb.org/3${path}?api_key=${API_KEY}`;
}
function searchMovie(value) {
    const path = '/search/movie';
    const url = generateURL(path) + "&query=" + value;

    requestMovies(url, renderSearchMovies, handleError);
}
function requestMovies(url, onComplete, onError){
    fetch(url).then((res) => res.json()).then(onComplete).catch(onError);
}

function getUpcomingMovies() {
    const path = '/movie/upcoming';
    const url = generateURL(path);

    requestMovies(url, renderSearchMovies, handleError);
}


function getTopRatedMovies() {
    const path = '/movie/top_rated';
    const url = generateURL(path);

    requestMovies(url, renderSearchMovies, handleError);
}
function  {
    const path = '/movie/popular';
    const url = generateURL(path);

    requestMovies(url, renderSearchMovies, handleError);
}
