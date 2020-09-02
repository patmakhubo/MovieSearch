// form inputs 
const resetForm = document.querySelector('#reset');
const submitForm = document.querySelector('#submit');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTitle = document.querySelector('#movietitle');
const inputMessage = document.querySelector('#message');
resetForm.onclick = function(event) {
    event.preventDefault();
    const value = prompt("Are you sure? (type 1 or 2 only)\n1: Yes\n2: No");
    if(value == 1){
        inputMessage.value = '';
        inputEmail.value = '';
        inputMessage.value = '';
        inputTitle.value = '';
        alert('Form fields cleared');
    } else {
        alert('Not cleared');
    }
}
submitForm.onclick = function frm() {
    // event.preventDefault();
    // document.getElementById('regForm').submit();
    if(getCookie('SuccessMessage').length > 0){
        alert(getCookie('SuccessMessage'));
    }else if(getCookie('ErrorMessage').length > 0){
        alert(getCookie('ErrorMessage'));
    }else {
        alert('No form record submitted');
    }
}
  
function getCookie(cookieName){
    var name = cookieName + "=";
    var totCookies = document.cookie.split(';');
    for(var i = 0; i < totCookies.length; i++){
        var c = totCookies[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
            if(c.indexOf(name) == 0){
                var relevantCookie = c.substring(name.length,c.length);
                relevantCookie = relevantCookie.replace('%20', ' ');
                return relevantCookie;
            }
        }
    }
    return "";
  }