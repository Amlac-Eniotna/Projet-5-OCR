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

// fonction main
function carousel() {
	addArrow()
	addDots()
	// initialisation de la bannière sur le premier slides
	// index à 1 pour la première image et direction à 0
	changeBanner(0, 1)
	getArrow()
}

// ajout d'images de flèches
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

// ajout des points d'indications de l'index de slides
function addDots() {
	for(let i = 0; i < slides.length; i++) {
		let dot = document.createElement("i")
		dot.className = "fa-solid fa-circle dot"
		let divDots = document.querySelector(".dots")
		divDots.appendChild(dot)
	}
}

// ajout d'eventListener sur les flèches
function getArrow() {
	let index = 1
	let arrow = document.querySelectorAll(".arrow")
	for (let i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener("click", (event) => {
			// check si le click est sur la flèche de gauche ou de droite
			if (event.target.className == "arrow arrow_left") {
				index = changeBanner(-1, index)
			} else if (event.target.className == "arrow arrow_right") {
				index = changeBanner(1, index)
			}
		})
	}
}

/**
* fonction de changement de bannière globale
* @param {number} direction - direction pensés comme un axis -1 = gauche, 1 = droite
* @param {number} index - index du slides de la bannières, de 1 à 4
* @return {number} la nouvelle valeurs d'index
*/
function changeBanner(direction, index) {
	index = index + direction
	// vérification de: si on est au début ou à la fin du slides passer aux slides opposés
	if(index === 0) {
		index = slides.length
	} else if(index === slides.length + 1) {
		index = 1
	}
	// changement d'images, points et textes
	changePicture(index)
	changeDot(index)
	changeText(index)
	return index
}

/**
 * fonction de changement d'image de la bannière
 * @param {number} index - index du slides de la bannières, de 1 à 4
 */
function changePicture(index) {
	let picture = document.querySelector(".banner-img")
	picture.src = `./assets/images/slideshow/${slides[index - 1].image}`
}

/**
 * fonction de changement du point selectionné de la bannière
 * @param {number} index - index du slides de la bannières, de 1 à 4
 */
function changeDot(index) {
	let dots = document.querySelectorAll(".dot")
	for(let i = 0; i < dots.length; i++) {
		// check le point selectionné et changement de point selectionné en fonction de l'index
		if(index == i + 1) {
			dots[i].classList.add("dot_selected")
		} else {
			dots[i].classList.remove("dot_selected")
		}
	}
}

/**
 * fonction de changement du texte de la bannière
 * @param {number} index - index du slides de la bannières, de 1 à 4
 */
function changeText(index) {
	let bannerText = document.querySelector("#banner p")
	bannerText.innerHTML = slides[index - 1].tagLine
}

carousel()