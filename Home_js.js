let searchBtn = document.querySelector('#search-btn');
let shoppingcart = document.querySelector('#shopping-cart');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let signupForm = document.querySelector('.Signup-form-container');
let formClose = document.querySelector('#form-close');
let formclosesignup = document.querySelector('#form-close-sign');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let ordernow = document.querySelector('#ordernow');
let heart = document.querySelector('#heart');


heart.addEventListener('click',() =>{
    window.open('fav.html');
});

ordernow.addEventListener('click',() =>{
    window.open('cart.html');
});

shoppingcart.addEventListener('click',() =>{
    window.open('shopping.html');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times'); /*change to clise icon*/
    searchBar.classList.toggle('active'); /*show search label */
});

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times'); /*when scroll > close search button */
    searchBar.classList.remove('active');  /*when scroll > close search label */
    /*يعني لو فاتحة بحث بعدين عملت تمرير رح يغلق البحث و يرجع لاصله */
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}

signup.addEventListener('click', () =>{
    signupForm.classList.add('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
    
});
formclosesignup.addEventListener('click', () =>{
    signupForm.classList.remove('active');
    loginForm.classList.remove('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

