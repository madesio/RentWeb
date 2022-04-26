const rentBtn = document.querySelector('.rentBtn');


// const closeBtn = document.querySelector('.close');
const modalShadow = document.querySelector('.modal-shadow');






const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
		let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		if(width < 576){
			window.scrollTo({ top: 100, behavior: 'smooth' });
		}else if (width < 992 ){
			window.scrollTo({ top: 200, behavior: 'smooth' });
		}else{
			window.scrollTo({ top: 100, behavior: 'smooth' });
		}
		
		console.log(width)

	} else {
		modalShadow.style.display = 'none';
	}
	modalShadow.classList.toggle('modal-animation');
};

window.addEventListener('click', e =>
	e.target === modalShadow ? showModal() : false
);

rentBtn.addEventListener('click', showModal);
// closeBtn.addEventListener('click', showModal);