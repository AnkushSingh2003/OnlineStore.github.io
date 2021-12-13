var slideIndex, slides, dots, captionText;
function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity = 1;

  captionText = document.querySelector(".captionTextHolder .captionText");
  captionText.innerText = slides[slideIndex].querySelector(
    ".captionText"
  ).innerText;
  if (slides.length < 2) {
    var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
    nextPrevBtns.style.display = "none";
    for (i = 0; i < nextPrevBtn.length; i++) {
      nextPrevBtn[i].style.display = "none";
    }
  }

  dots = [];
  var dotsContainer = document.getElementById("dotsContainer"),
    i;
  for (i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dot.setAttribute("onclick", "moveSlide(" + i + ")");
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
  moveSlide(slideIndex + n);
}
function moveSlide(n) {
  var i;
  var current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: "",
  };
  var slideTextAnimClass;
  if (n > slideIndex) {
    if (n >= slides.length) {
      n = 0;
    }
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide";
    slideTextAnimClass = "slideTextFromTop";
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
    moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
    moveSlideAnimClass.forNext = "moveRightPrevSlide";
    slideTextAnimClass = "slideTextFromBottom";
  }

  if (n != slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    for (i = 0; i < slides.length; i++) {
      slides[i].className = "imageHolder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
    captionText.style.display = "none";
    captionText.className = "captionText " + slideTextAnimClass;
    captionText.innerText = slides[n].querySelector(".captionText").innerText;
    captionText.style.display = "block";
  }
}
var timer = null;
function setTimer() {
  timer = setInterval(function () {
    plusSlides(1);
  }, 3000);
}
setTimer();

var modalBtn = document.getElementById("modal_btn");
var modalContainer = document.querySelector(".modal_container");
var closeBtn = document.getElementById("close_btn");
modalBtn.addEventListener('click', function(){
  modalContainer.classList.add('active');
});
closeBtn.addEventListener('click', function(){
  modalContainer.classList.remove('active');
});

var smodalBtn = document.getElementById("search_modal_btn");
var smodalContainer = document.querySelector(".search_modal_container");
var scloseBtn = document.getElementById("search_close_btn");
smodalBtn.addEventListener('click', function(){
  smodalContainer.classList.add('active');
});
scloseBtn.addEventListener('click', function(){
  smodalContainer.classList.remove('active');
});

function Subscribe(){
var subInp = document.getElementById("subInp").value;
if(subInp === ""){
  alert("Plz Enter Your Email Address");
  return false;
}
if(subInp.indexOf("@") == 0){
  alert("Plz Enter Valid Email Address.");
  return false;
}
if(subInp.indexOf(".") == subInp.length - 1){
  alert("Plz Enter Valid Email Address.");
  return false;
}
if(subInp.indexOf(".") == subInp.length - 2){
  alert("Plz Enter Valid Email Address.");
  return false;
}
if(subInp.charAt(subInp.length - 4) != "." && subInp.charAt(subInp.length - 3) != "."){
  alert("Plz Enter Valid Email Address.");
  return false;
}
else{
  alert("Thanks For Subscribe " + subInp);
  return true;
}
};

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function validation(){
var inputValue = document.querySelector("#username").value;
var password = document.querySelector("#password").value;
  if(inputValue === ""){
    alert("Plz Enter Your Username.");
    return false;
  }
  if(Number(inputValue)){
    alert("Plz Enter Alphabets only.");
    return false;
  } 
  if((inputValue.length <= 2) || (inputValue.length >= 31)){
    alert("Plz Enter Valid Username.");
    return false;
  }
  if(password === ""){
    alert("Plz Enter Your Password.");
    return false;
  }
  if((password.length <= 7) || (password.length >= 13)){
    alert("Plz Enter Password between 8 to 12 Characters.");
    return false;
  }
}

function signupvalidation(){
  var upusername = document.getElementById("signup_username").value;
  var upemail = document.getElementById("signup_email").value;
  var uppassword = document.getElementById("signup_password").value;
  if(upusername === ""){
    alert("Plz Enter Your Username.");
    return false;
  }
  if((upusername.length <= 2) || (upusername.length >= 31)){
    alert("Plz Enter Valid Username.");
    return false;
  }
  if(Number(upusername)){
    alert("Plz Enter Alphabets Only.");
    return false;
  }
  if(upemail === ""){
    alert("Plz Enter Your Email Address");
    return false;
  }
  if(upemail.indexOf("@") == 0){
    alert("Plz Enter Valid Email Address.");
    return false;
  }
  if(upemail.indexOf(".") == upemail.length - 1){
    alert("Plz Enter Valid Email Address.");
    return false;
  }
  if(upemail.indexOf(".") == upemail.length - 2){
    alert("Plz Enter Valid Email Address.");
    return false;
  }
  if(upemail.charAt(upemail.length - 4) != "." && upemail.charAt(upemail.length - 3) != "."){
    alert("Plz Enter Valid Email Address.");
    return false;
  }

  if(uppassword === "") {
    alert("Plz Enter Your Password.");
    return false;
  }
  if((uppassword.length <= 7) || (uppassword.length >= 13)){
    alert("Plz Enter Password between 8 to 12 Characters.");
    return false;
  }
}