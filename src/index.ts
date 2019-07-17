import './styles.css';
import { ready } from './ready';
import { runApp } from './app';

//ready(() => console.log("Ready to party"));
ready(runApp)


// const nameInput = document.getElementById("name") as HTMLInputElement;
// const doitButton = document.getElementById("doit") as HTMLInputElement;
// const messageOutput = document.getElementById("message");

// //nameInput.value = 'Tacos';
// doitButton.addEventListener('click', function () {
//     const enteredname = nameInput.value;
//     messageOutput.innerHTML = enteredname.toUpperCase();
// });