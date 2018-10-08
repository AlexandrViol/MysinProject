// Бургер

var burger=document.querySelector('.burger');
var line2=document.querySelector('.burger__line2');

burger.addEventListener('click', active2);

function active2 () {
    line2.classList.toggle('burger__line-active2');
    line2.classList.toggle('burger__line2');
}

var line1=document.querySelector('.burger__line1');
burger.addEventListener('click', active1);

function active1 () {
    line1.classList.toggle('burger__line-active1');
    line1.classList.toggle('burger__line1');
}

var line3=document.querySelector('.burger__line3');
burger.addEventListener('click', active3);

function active3 () {
    line3.classList.toggle('burger__line-active3');
    line3.classList.toggle('burger__line3');
}

burger.addEventListener('click', show);
var menu=document.querySelector('.buttons');

function show () {
    menu.classList.toggle('buttons-display');
}



// первый слайдер

var sliderLeft = document.querySelector('.slider__left');
var sliderRight = document.querySelector('.slider__right');
var scope = document.querySelector('.slider__view');
sliderLeft.addEventListener('click', nextSlide);
sliderRight.addEventListener('click', prevSlide);
var start = -1100;

function nextSlide () {
    start = start - 370;
    if (start <-2280) {
        start = -1100;
    }
    scope.style.left = start + 'px';
}

function prevSlide () {
    start = start + 370;
    if (start > 280) {
        start = -1100;
    }
    scope.style.left = start + 'px';
}


 
// Второй слайдер

var sliderLeft2 = document.querySelector('.slider2__left');
var sliderRight2 = document.querySelector('.slider2__right');
var scope2 = document.querySelector('.slider2__view');
sliderLeft2.addEventListener('click', nextSlide2);
sliderRight2.addEventListener('click', prevSlide2);
var start2 = -540;

function nextSlide2 () {
    start2 = start2 - 220;
    if (start2 <-980) {
        start2 = -540;
    }
    scope2.style.left = start2 + 'px';
}

function prevSlide2 () {
    start2 = start2 + 220;
    if (start2 > -100) {
        start2 = -540;
    }
    scope2.style.left = start2 + 'px';
}

sliderLeft2.addEventListener('click', nextSlide3);
sliderRight2.addEventListener('click', prevSlide3);
var scope3 = document.querySelector('.slider3__view');
var start3 = -1725;

function nextSlide3 () {
    start3 = start3 - 670;
    if (start3 <-3065) {
        start3 = -1725;
    }
    scope3.style.left = start3 + 'px';
}

function prevSlide3 () {
    start3 = start3 + 670;
    if (start3 > -385) {
        start3 = -1725;
    }
    scope3.style.left = start3 + 'px';
}


// Кнопка переключения тариф планов


var toogle=document.querySelector(".chooseYourPlan__toogle");
var leftPlan=document.querySelector(".chooseYourPlan__left");
var rightPlan=document.querySelector(".chooseYourPlan__right");
var leftToogle=document.querySelector(".chooseYourPlan__toogleLeft");
var rightToogle=document.querySelector(".chooseYourPlan__toogleRight");


toogle.addEventListener('click', changeToogleLeft);
function changeToogleLeft(){
    leftToogle.classList.toggle('chooseYourPlan__toogleFocus');
}

toogle.addEventListener('click', changeToogleRight);
function changeToogleRight(){
    rightToogle.classList.toggle('chooseYourPlan__toogleFocus');
}

toogle.addEventListener('click', changePlanLeft);
function changePlanLeft(){
    leftPlan.classList.toggle('chooseYourPlan__planFocus');
}


toogle.addEventListener('click', changePlanRight);
function changePlanRight(){
    rightPlan.classList.toggle('chooseYourPlan__planFocus');
  }
