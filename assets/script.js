const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function carousel() {
	addArrow()
	addDots()
	changeBanner(0, 1)
	getArrow()
}

function addArrow() {
	for(let i = 0; i < 2; i++) {
		let arrowImg = document.createElement("img")
		if(i === 0) {
			arrowImg.src = "./assets/images/arrow_left.png"
			arrowImg.alt = "flèche gauche"
			arrowImg.className = "arrow arrow_left"
		} else {
			arrowImg.src = "./assets/images/arrow_right.png"
			arrowImg.alt = "flèche droite"
			arrowImg.className = "arrow arrow_right"
		}
		let banner = document.getElementById("banner")
		banner.appendChild(arrowImg)
	}
}

function addDots() {
	for(let i = 0; i < slides.length; i++) {
		let dot = document.createElement("i")
		dot.className = "fa-solid fa-circle dot"
		let divDots = document.querySelector(".dots")
		divDots.appendChild(dot)
	}
}

function getArrow() {
	let index = 1
	let arrow = document.querySelectorAll(".arrow")
	for (let i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener("click", (event) => {
			if (event.target.className == "arrow arrow_left") {
				index = changeBanner(-1, index)
			} else if (event.target.className == "arrow arrow_right") {
				index = changeBanner(1, index)
			}
		})
	}
}

function changeBanner(direction, index) {
	index = index + direction
	if(index === 0) {
		index = slides.length
	} else if(index === slides.length + 1) {
		index = 1
	}
	changePicture(index)
	changeDot(index)
	changeText(index)
	return index
}

function changePicture(index) {
	let picture = document.querySelector(".banner-img")
	picture.src = `./assets/images/slideshow/${slides[index - 1].image}`
}

function changeDot(index) {
	let dots = document.querySelectorAll(".dot")
	for(let i = 0; i < dots.length; i++) {
		if(index == i + 1) {
			dots[i].classList.add("dot_selected")
		} else {
			dots[i].classList.remove("dot_selected")
		}
	}
}

function changeText(index) {
	let bannerText = document.querySelector("#banner p")
	bannerText.innerHTML = slides[index - 1].tagLine
}

carousel()