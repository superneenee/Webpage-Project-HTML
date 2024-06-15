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

function catSoundOver(bigcat) {

	var audio = document.getElementById('bigCatSound')
	audio.muted = false;
	audio.src = bigcat + "Sound.mp3"
	audio.play();

}

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

