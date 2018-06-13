//DOM
var inputEmail = document.getElementById('email-input');
var subscribe = document.getElementById('btn');
var emails = [];

class Email{
    constructor(email){
        this.email = email;
    }
}

subscribe.addEventListener("click", (ev) => {
    ev.preventDefault();

    var emailVal = inputEmail.value;
    console.log("email",emailVal);

    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       

    if(!(regexEmail.test(emailVal))){
        alert('Please type email only!');
        return;
    };

    for(var i=0; i<emails.length;i++){
        if(emailVal === emails[i].email){
            alert('You are already subscribed');
            return;
        }
    }

    var email = new Email(emailVal); 
    emails.push(email);
    
    console.log(emails);
})

