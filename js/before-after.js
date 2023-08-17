// Variables
const gallery = document.querySelector('.gallery');
const galleryResize = document.querySelector('.gallery__resize');
const before = document.querySelector('#before');
const after = document.querySelector('#after');

// Listeners
gallery.addEventListener('mousemove', event => {
	let x = event.offsetX;
	galleryResize.style.width = x + 'px';
	galleryResize.classList.remove('tr')
})

// gallery.addEventListener('mouseleave', event => {
// 	galleryResize.style.width = 150 + 'px';
// 	galleryResize.classList.add('tr')
// })

before.onclick = () => {
	galleryResize.style.width = gallery.offsetWidth - 10 + 'px';
	galleryResize.classList.add('tr')
}

after.onclick = () => {
	galleryResize.style.width = 10 + 'px';
	galleryResize.classList.add('tr')
}