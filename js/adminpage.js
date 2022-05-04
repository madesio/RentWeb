const addNewCarBtn = document.querySelector('.addNewCarBtn');
const verifyInputs = function () {
	const inputs = document.querySelectorAll('.required');
	const selectCars = document.querySelector('.cars');
	const radioFuel = document.querySelectorAll('.radioFuel input');
	const radioFuellabel = document.querySelectorAll('.radioFuel label');
	const gearBox = document.querySelectorAll('.gearBox input');
	const gearBoxlabel = document.querySelectorAll('.gearBox label');

	const checkFuelBox = function () {
		for (let i = 0; i < radioFuel.length; i++) {
			if (
				radioFuel[0].checked === true ||
				radioFuel[1].checked === true ||
				radioFuel[2].checked === true
			) {
				radioFuellabel[i].style.color = 'white';
			} else {
				for (let i = 0; i < radioFuel.length; i++) {
					radioFuellabel[i].style.color = 'red';
				}
			}
		}
	};

	const checkGearbox = function () {
		for (let i = 0; i < gearBox.length; i++) {
			if (gearBox[0].checked === true || gearBox[1].checked === true) {
				gearBoxlabel[i].style.color = 'white';
			} else {
				for (let i = 0; i < gearBox.length; i++) {
					gearBoxlabel[i].style.color = 'red';
				}
			}
		}
	};

	const checkSelect = function () {
		if (selectCars.value != 0) {
			selectCars.style.border = 'none';
		} else {
			selectCars.style.border = '1px solid red';
		}
	};

	const checkFill = function () {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value != '') {
				inputs[i].style.border = 'none';
			} else {
				inputs[i].style.border = '1px solid red';
			}
		}
	};

	checkSelect();
	checkFill();
	checkFuelBox();
	checkGearbox();
};

const descBoxBtn = document.querySelector('.descBoxBtn');
const addNewDesc = function () {
	const descBox = document.querySelector('.descBox');
	const alertDescMsg = document.querySelector('.alertDescMsg');

	let descBoxInput = document.querySelectorAll('.descBox input');
	if (descBoxInput.length < 2) {
		let input = document.createElement('input');
		input.className = 'required';
		input.placeholder = ' Tytuł opisu cz.2';
		let label = document.createElement('label');
		label.innerHTML = `Tytuł cz.2*`;
		descBox.appendChild(label);
		descBox.appendChild(input);
		let textarea = document.createElement('textarea');
		textarea.className = 'required';
		textarea.placeholder = 'Opis samochody cz.2';
		let label2 = document.createElement('label');
		label2.innerHTML = `Opis cz.2*`;
		descBox.appendChild(label2);
		descBox.appendChild(textarea);
	} else {
		alertDescMsg.style.display = 'block';
	}
};

const carEquipmentBtn = document.querySelector('.carEquipmentBtn');
const addNewEq = function () {
	const equipmentBox = document.querySelector('.equipmentBox');
	const alertEqMsg = document.querySelector('.alertEqMsg');

	let equipmentBoxInput = document.querySelectorAll('.equipmentBox input');
	if (equipmentBoxInput.length < 5) {
		let input = document.createElement('input');
		input.className = 'required equipmentInput';
		input.placeholder = 'Wyposażenie';
		equipmentBox.appendChild(input);
	} else {
		alertEqMsg.style.display = 'block';
	}
};

const optionBtn = document.querySelector('.optionBtn');
const addNewOption = function () {
	const optionBox = document.querySelector('.optionBox');
	const alertOptionMsg = document.querySelector('.alertOptionMsg');
	let optionBoxInput = document.querySelectorAll('.optionBox input');

	if (optionBoxInput.length < 3) {
		let input = document.createElement('input');
		input.placeholder = 'Nazwa opcji w pakiecie';
		let label = document.createElement('label');
		label.innerHTML = `Nazwa opcji w pakiecie <span>(opcjonalne)</span>`;
		optionBox.appendChild(label);
		optionBox.appendChild(input);
		let textarea = document.createElement('textarea');
		textarea.placeholder = 'Opis opcji';
		optionBox.appendChild(textarea);
	} else {
		alertOptionMsg.style.display = 'block';
	}
};






addNewCarBtn.addEventListener('click', verifyInputs);
descBoxBtn.addEventListener('click', addNewDesc);
carEquipmentBtn.addEventListener('click', addNewEq);
optionBtn.addEventListener('click', addNewOption);
