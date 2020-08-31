//TMDB Initial Values
const API_KEY = '44bd07fbb81022e81679c06c7a5705c9';
//getCookie('tmdbapikey');
// Endpoint
const endpoint = 'http://api.themoviedb.org/3/search/movie?api_key=44bd07fbb81022e81679c06c7a5705c9';
// getCookie('tmdbendpointurl');

// DOM Elements Selection
const inputElement = document.querySelector('#inputValue');
const searchElement = document.querySelector('#search');

searchElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    const url = endpoint + "&query=" + value;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
    console.log('Value: ', value);
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