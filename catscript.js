// 1. Example Display or Hide Cat Images

function catImageClick(id) {

	var input = document.getElementById(id);
	var img = document.getElementById(id.replace('yes', ''));

	if (input.checked) {
		img.src = "CatFit" + id.replace("cats", "").replace("yes", "") + ".jpg";
		img.style.display = "inline";
	}
	else {
		img.src = "";
		img.style.display = "none";
	}
}

// 2. Example Cat Sound on Click
function catSoundOver(bigcat) {

	var audio = document.getElementById('bigCatSound')
	audio.muted = false;
	audio.src = bigcat + "Sound.mp3"
	audio.play();

}

// 3. Example using list and buttons to show the user can add and remove from the list which shows on the HTML page.
const celebrityCats = ["Tardar Sauce (Grumpy Cat)", "Lil Bub", "A street cat named Bob", "Nala"]

function showCelebrityCats() {

	document.getElementById("celebrityCatList").innerHTML = "";

	var ul = document.getElementById("celebrityCatList");

	for (let i = 0; i < celebrityCats.length; i++) {

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(celebrityCats[i]));
		li.setAttribute("id", "element" + celebrityCats[i]);
		ul.appendChild(li);
	}

}

function catAdd() {

	celebrityCats.push(catInput.value);
	showCelebrityCats();
}

function catDel() {

	celebrityCats.pop(catInput.value);
	showCelebrityCats();
}

// 4. Example of slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

// 5. See inline canvas JavaScript.

// 6. Cat Image Mover
function CatMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  // 7. Cat Age Calculator
  function CatCalculate() {
	calcAge.textContent = parseFloat(inputAge.value) * 7;
	calcAgeResult.style = "Display: inline"
  };

  
  // 8. Cat Word Check
  function CatCheck() {
	if (inputCatWords.value.includes("cat")) {
		calcCatWords.textContent = "Yes, you have entered a sentence with cat in!"
		calcCatWordsImage.style = "Display: inline"
	}
	else {
		calcCatWords.textContent = "NO, you have entered NOT sentence with cat in!"
	}

  };