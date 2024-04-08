const body = document.body;
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form")
let users = [];

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // generateId(){
    //     return
    // }
    generateId() {
        return (this.id = Date.now());
    }
}
form.addEventListener("submit", function (e){
    e.preventDefault();
if(username.value && email.value && password.value){


    this.id(username.value && email.value && password.value){
        let newUser = createUser(username.value, email.value, password.value);
        users.push(newUser);

        resetForm();

        drawTable(users);
    }
    else{
        window.alert("")
    }
})



