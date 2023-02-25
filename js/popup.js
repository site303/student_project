let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup'); 
let closeButton=document.querySelector('.popup-closer'); 
//занесла значение в коробку

console.log(loginButton);
console.log(loginPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopUp.classList.toggle('show-popup');
}

loginButton.addEventListener('click', showPopUp);
// closeButton.addEventListener('click', closePopUp);

// function closePopup() {

// loginPopup.classList.remove('show-popup');

// }

// loginPopup.addEventListener('click', (e) => {
//     if (e.target.classList.contains('.show-popup'))
// close();
// })