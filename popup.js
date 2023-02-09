let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');  
//занесла значение в коробку

console.log(loginButton);
console.log(loginPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopUp.classList.toggle('show-popup');
}

loginButton.addEventListener('click', showPopUp);

