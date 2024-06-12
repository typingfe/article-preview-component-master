const btn = document.querySelector('.card__btn');
const popup = document.querySelector('#share-popup');
const svg = document.querySelector('.svg');

btn.addEventListener('click', () => {
	btnCloseOpen();
});

function btnCloseOpen() {
	if (popup.classList.contains('popup__open')) {
		popup.classList.remove('popup__open');
		popup.classList.add('popup__close');
		btn.classList.remove('share__active');
		svg.classList.remove('active');
	} else {
		popup.classList.add('popup__open');
		popup.classList.remove('popup__close');
		btn.classList.add('share__active');
		svg.classList.add('active');
	}
}
