let form = document.querySelector("form") as HTMLFormElement;

let username = document.querySelector("#username") as HTMLInputElement;
let password = document.querySelector("#password") as HTMLInputElement;


interface IUser {
	username: string;
	password: string;
}

let users: IUser[] = [];

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	
	users.push({
		username: username.value,
		password: password.value
	});
	
	username.value = "";
	password.value = "";
})

console.log(users);