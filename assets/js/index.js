const USERNAME_REGEXP = /^[A-z0-9][^\s]{6,20}$/;
const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,20}$/;

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let registerButton = document.querySelector('#register')

registerButton.addEventListener('click', register);

function register() {
    let userUsername = document.querySelector('#username').value;
    let userPassword = document.querySelector('#password').value;

    if (USERNAME_REGEXP.test(userUsername) == true) {
        username.classList.remove('invalid')
        username.classList.add('valid');
    } else {
        username.classList.add('invalid')
        username.classList.remove('valid');
    }

    if (PASSWORD_REGEXP.test(userPassword) == true) {
        password.classList.remove('invalid')
        password.classList.add('valid');
    } else {
        password.classList.add('invalid')
        password.classList.remove('valid');
    }
}
