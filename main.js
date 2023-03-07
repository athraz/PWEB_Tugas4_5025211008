const letters = /^[A-Za-z]+$/;
const email_val = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateLogIn(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email){
        alert("Please enter your username!");
    }
    else if (!password){
        alert("Please enter your password!")
    }
    else if (!email_val.test(email)){
        alert("Invalid email format!")
    }
    else{
        alert("Login successfully");
    }
}

function validateSignUp(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (!name){
        alert("Please enter your name!");
    }
    else if (!email){
        alert("Please enter your email!");
    }
    else if (!pass1){
        alert("Please enter your password!");
    }
    else if (!pass2){
        alert("Please confirm your password!");
    }
    else if (pass1 != pass2){
        alert("Passwords not matching!");
    }
    else if (!letters.test(name)){
        alert("Name must contain alphabets!");
    }
    else if (!email_val.test(email)){
        alert("Invalid email format!")
    }
    else if (pass1.length > 12){
        alert("Password maximum length is 12!");
    }
    else if (pass1.length < 6){
        alert("Password minimum length is 6!");
    }
    else{
        alert("Sign up successfully!")
    }
}

function signUp(){
    window.location = "signup.html";
}

function logIn(){
    window.location = "index.html";
}