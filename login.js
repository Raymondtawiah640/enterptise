const text = document.getElementById("ltext");
const email  = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("submit");


function submit(){
    if(text.input != 0){
        login.input = "";
    }
};