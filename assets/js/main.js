"use strict";
let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let users = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    users.push({
        username: username.value,
        password: password.value
    });
    username.value = "";
    password.value = "";
});
console.log(users);
