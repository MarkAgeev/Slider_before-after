// Variables
const wrap = document.querySelector('.wrap');
const photoBefore = document.querySelector('.img-before');
const photoAfter = document.querySelector('.img-after');
const photoBeforeArray = ['./img/IMG_1-before.JPG', './img/IMG_2-before.JPG', './img/IMG_3-before.JPG', './img/IMG_4-before.JPG', './img/IMG_5-before.JPG', './img/IMG_6-before.JPG', './img/IMG_7-before.JPG', './img/IMG_8-before.JPG', './img/IMG_9-before.JPG', './img/IMG_10-before.JPG', './img/IMG_11-before.JPG', './img/IMG_12-before.JPG', './img/IMG_13-before.JPG', './img/IMG_14-before.JPG', './img/IMG_15-before.JPG'];
const photoAfterArray = ['./img/IMG_1-after.JPG', './img/IMG_2-after.JPG', './img/IMG_3-after.JPG', './img/IMG_4-after.JPG', './img/IMG_5-after.JPG', './img/IMG_6-after.JPG', './img/IMG_7-after.JPG', './img/IMG_8-after.JPG', './img/IMG_9-after.JPG', './img/IMG_10-after.JPG', './img/IMG_11-after.JPG', './img/IMG_12-after.JPG', './img/IMG_13-after.JPG', './img/IMG_14-after.JPG', './img/IMG_15-after.JPG'];
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const cardArray = document.querySelectorAll('.card');
let count = 0;
let countPhoto = 1;
const title = createSpanCount(countPhoto);
wrap.append(title);

const wrapper = document.querySelector('.wrapper');
wrapper.onmousemove = () => {
	cardArray.forEach((item) => {
		item.classList.remove('selected')
	})
}
// Listeners
right.addEventListener('click', nextPhoto); // стрелка вправо
left.addEventListener('click', prevPhoto);	// стрелка вліво
window.addEventListener('keydown', listenKeyboard); // стрелкі на клавіатурі
cardArray.forEach((item, index) => {
	item.onclick = () => {
		clearClass();
		addClass(index)
		photoBefore.src = photoBeforeArray[index];
		photoAfter.src = photoAfterArray[index];
		count = index;
		countPhoto = index + 1;
		title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
	}

	item.onmousemove = () => {
		// cardArray[count].classList.remove('selected')
		item.classList.add('choose')
	}

	item.onmouseleave = () => {
		cardArray[count].classList.add('selected')
		item.classList.remove('choose')
	}

}) // click на картінку масіва

// Functions
function nextPhoto () {
	if (count + 1 < photoBeforeArray.length) {
		count++;
		countPhoto++;
	} else {
		count = 0;
		countPhoto = 1;
	}
	photoBefore.src = photoBeforeArray[count];
	photoAfter.src = photoAfterArray[count];
	title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
	galleryResize.classList.add('tr');
	galleryResize.style.width = 50 + '%';
	clearClass();
	addClass(count);
} // наступне img

function prevPhoto () {
	if (count - 1 !== -1) {
		count--;
		countPhoto--;
	} else {
		count = photoBeforeArray.length - 1;
		countPhoto = photoBeforeArray.length;
	}
	clearClass()
	addClass(count)
	photoBefore.src = photoBeforeArray[count];
	photoAfter.src = photoAfterArray[count];
	title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
} //попереднє img

function listenKeyboard (e) {
	let w = galleryResize.offsetWidth
	if(e.keyCode == 39) {
		nextPhoto()
	}
	else if (e.keyCode == 37) {
		prevPhoto()
	}
	else if (e.keyCode == 38) {
		galleryResize.classList.remove('tr')
		if(w + 50 > gallery.offsetWidth) {
			w = gallery.offsetWidth - 5;
		} else {
			w = w + 50
		}
		changeWidth(w)
	}
	else if (e.keyCode == 40) {
		if (w < 50) {
			w = 6
		}
		else {
			w = w - 50
		}
		galleryResize.classList.remove('tr')
		changeWidth(w);
	}
} // реагірування на стрелкі клавіатури

function createSpanCount (n) {
	const title = document.createElement('h1');
	title.id = "photo-count";
	title.innerHTML = `${n} / ${photoBeforeArray.length}`;
	return title
} // рахунок img

function changeWidth(n) {
	if(n < gallery.offsetWidth){
		console.log(n);
		// galleryResize.style.width = galleryResize.offsetWidth - 10 + 'px'
		galleryResize.style.width = 96 + '%'
	} 
	galleryResize.style.width = n +'px';
} // мінять width в galleryResize

function addClass (item) {
	cardArray[item].classList.add('selected');
} // добавляє клас вибраній img

function clearClass () {
	cardArray.forEach(item => {
		item.classList.remove('selected');
	})
} // удалять клас зі всіх картінок

// cardArray.forEach((item, index) => {
// 	item.onmousemove = event => {
// 		cardArray[count].classList.remove('selected')
// 		item.classList.add('choose')
// 		clearClass();
// 		addClass(index)
// 		photoBefore.src = photoBeforeArray[index];
// 		photoAfter.src = photoAfterArray[index];
// 		count = index;
// 		countPhoto = index + 1;
// 		title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
// 	}

// 	item.onmouseleave = e => {
// 		cardArray[count].classList.add('selected')
// 		item.classList.remove('choose')
// 	}
// })

// cardArray.forEach((item, index) => {
// 	item.onclick = () => {
// 		clearClass();
// 		addClass(index)
// 		photoBefore.src = photoBeforeArray[index];
// 		photoAfter.src = photoAfterArray[index];
// 		count = index;
// 		countPhoto = index + 1;
// 		title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
// 	}
// }) // click на картінку масіва

