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