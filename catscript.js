function cat1(){

var img = document.getElementById('cats1');
img.src = "";
	if (cats1yes.checked) {
	img.src = "CatFit1.jpg";
	}
}

function cat2(){

var img = document.getElementById('cats2');
img.src = "";
	if (cats2yes.checked) {
	img.src = "CatFit2.jpg";
	}
}

function cat3(){

var img = document.getElementById('cats3');
img.src = "";
	if (cats3yes.checked) {
	img.src = "CatFit3.jpg";
	}
}

function cat4(){

var img = document.getElementById('cats4');
img.src = "";
	if (cats4yes.checked) {
	img.src = "CatFit4.jpg";
	}
}

function cat5(){

var img = document.getElementById('cats5');
img.src = "";
	if (cats5yes.checked) {
	img.src = "CatFit5.jpg";
	}
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

