
// const inc = document.querySelector(".inc");
// const result = document.querySelector(".result");
// const dec = document.querySelector(".dec");
// const reset = document.querySelector(".reset")

// let count = localStorage.getItem("count") || 0;
// result.textContent = count;

// inc.addEventListener("click", function(){
//     count++
//     result.textContent = count;
//     localStorage.setItem("count", count);

// });
// dec.addEventListener("click", function(){
//     count--
//     result.textContent = count;
//     localStorage.setItem("count", count);

// });
// reset.addEventListener("click", function(){
//     count = 0;
//     result.textContent = count;
//     localStorage.setItem("count", count);

// });


class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const form = document.querySelector("form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    const user = new User(
        username.value, email.value, password.value
    );
    console.log(username)
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
});







