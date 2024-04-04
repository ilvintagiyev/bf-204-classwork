class Human {
    Name;
    surname;
    age = 0;
    gender;
    nationality;
    constructor(name, surname, gender, nationality, age = 0) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.nationality = nationality;
        this.age = age;
    }
    GetFullName() {
        return `${this.name} ${this.surname}`
    }
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}
class user extends Human {
    username;
    email;
    isAdmin = isAdmin;
    isLogged = isLogged;
    password;
    bio;
    constructor(username, email, isAdmin, isLogged, password, bio) {
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.password = password;
        this.bio = bio
    }
    changePasword(currentPassword, newPassword) {
        if (currentPassword !== newPassword) {
            return "the new password is the same as the other one";
        }
        else{
            return "the new password is not the same as the other one";

        }
    }
    changeEmail(){

    }
    
}
let users = [
    new User(
      "John",
      "Doe",
      "Male",
      "American",
      "johndoe",
      "john.doe@example.com",
      false,
      "password123",
      "A bit about John.",
      30
    ),
    new User(
      "Jane",
      "Doe",
      "Female",
      "British",
      "janedoe",
      "jane.doe@example.com",
      true,
      "securepassword",
      "Jane's bio goes here.",
      28
    ),
    new User(
      "Alex",
      "Smith",
      "Non-binary",
      "Canadian",
      "alexsmith",
      "alex.smith@example.com",
      false,
      "alexspassword",
      "All about Alex.",
      35
    ),
    new User(
      "Emily",
      "Clark",
      "Female",
      "Australian",
      "emilyclark",
      "emily.clark@example.com",
      false,
      "emilyspassword",
      "Explorer and photographer.",
      26
    ),
    new User(
      "Michael",
      "Brown",
      "Male",
      "German",
      "michaelbrown",
      "michael.brown@example.com",
      true,
      "michaelspass",
      "Coffee enthusiast. Avid reader.",
      32
    ),
    new User(
      "Luis",
      "Gomez",
      "Male",
      "Spanish",
      "luisgomez",
      "luis.gomez@example.com",
      false,
      "luispassword",
      "Music lover, Guitar player.",
      29
    ),
    new User(
      "Sophia",
      "Lopez",
      "Female",
      "Mexican",
      "sophialopez",
      "sophia.lopez@example.com",
      true,
      "sophiaspassword",
      "Digital marketer and content creator.",
      31
    ),
  ];
function sortUsersByUsername(array) {
    return array.sort((a, b) => a.username - b.username);
}
function filterByBirthYear(userArray, year) {
    return userArray.filter((element) => element.getBirthYear > year)
}
function Login(userArray, username, password) {

}
function LogOut(userArray, username, password ){

}
function CreateUser(array , user){
    array.push(user);
    return array;
}
function DeleteUser(array, user){
    let del=array.findIndex((element =>))
}
console.log(sortUsersByUsername(users));
console.log(filterByBirthYear(users));
console.log(Login(users));
console.log(LogOut(users));
console.log(CreateUser(users));
console.log(DeleteUser(users));


