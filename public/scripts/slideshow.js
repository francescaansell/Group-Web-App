//Resource https://www.w3schools.com/howto/howto_js_slideshow.asp
console.log("Check");
/*

const slideShowSlide = document.querySelector('.slideshow-slide');
const slideShowImages = document.querySelectorAll('.slideshow-slide img');
console.log(slideShowImages);
console.log(document.querySelectorAll('.slideshow-slide img'));
const slideShowText = document.querySelectorAll('slideshow-slide p');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Count
let counter = 1;
const size = slideShowImages[0].clientWidth;

slideShowSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'; 

//Button Listeners
nextBtn.addEventListener('click', function(ease){
    if(counter >= slideShowImages.length - 1) return;
    slideShowSlide.style.transition = "transform 0.7s ease-in-out";
    counter++;
    slideShowSlide.style.transform = "translateX(" +  (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function (ease){
    if(counter <= 0) return;
    slideShowSlide.style.transition = "transform 0.7s ease-in-out";
    counter--;
    slideShowSlide.style.transform = "translateX(" +  (-size * counter) + 'px)';
});

slideShowSlide.addEventListener('transitionend', function (ease){
    if(slideShowImages[counter].id === 'lastClone'){
        slideShowSlide.style.transition = "none";
        counter = slideShowImages.length - 2;
        slideShowSlide.style.transform = "translateX(" +  (-size * counter) + 'px)';
    }
    if(slideShowImages[counter].id === 'firstClone'){
        slideShowSlide.style.transition = "none";
        counter = slideShowImages.length - counter;
        slideShowSlide.style.transform = "translateX(" +  (-size * counter) + 'px)';
    }
});

*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); 
}