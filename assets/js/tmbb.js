// DOM Elements Selection
const helpAPIKey = document.querySelector('#apikey');
const endpointURL = document.querySelector('#endpoint');
const submitButton = document.querySelector('#submit');

submitButton.onclick = function(event) {
    event.preventDefault();
    var pattern = /search/i;
    const credentials = 
    [
        {
            name: 'tmdbapikey',
            key: helpAPIKey.value
        },{
            name: 'tmdbendpointurl',
            key: endpointURL.value
        }
    ];
    if(!pattern.test(credentials[1].key)){
        console.log("Endpoint must contain the Search keyword in the URL");
    } else if(pattern.test(credentials[1].key)){
        if(document.cookie.indexOf(credentials[1].key) == -1 || document.cookie.indexOf(credentials[0].key) == -1 ){
            setCookies(credentials[0].name, credentials[0].key);
            setCookies(credentials[1].name, credentials[1].key);
            alert("Good Job");
        } else {
            document.cookie = credentials[0].name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = credentials[1].name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            
            setCookies(credentials[0].name, credentials[0].key);
            setCookies(credentials[1].name, credentials[1].key);

            alert("uPDATED");
        }
    }

}

function setCookies (cname, cvalue){
    var d = new Date();
    var exdays = 90;
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}



// function checkCookie(c){
//     var username = getCookie(c);

// }