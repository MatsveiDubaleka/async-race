export const createGaragePage = () => {
const root = document.querySelector('.root') as HTMLElement;

const title = document.createElement('h1');
title.textContent = 'Async Race';
title.classList.add('title');
root.appendChild(title);

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
root.appendChild(btnContainer);

const toGarage = document.createElement('button');
toGarage.textContent = 'Garage';
toGarage.classList.add('garage', 'btn', 'page', 'active-page');
btnContainer.appendChild(toGarage);

const toWinners = document.createElement('button');
toWinners.textContent = 'Winners';
toWinners.classList.add('winners', 'btn', 'page');
btnContainer.appendChild(toWinners);

const carsCreation = document.createElement('div');
carsCreation.classList.add('cars-creation');
root.appendChild(carsCreation);

// Generate Car Wrapper
const generateCar = document.createElement('div');
generateCar.classList.add('generate-car');
carsCreation.appendChild(generateCar);

const nameCarInput = document.createElement('input');
nameCarInput.type = 'text';
nameCarInput.placeholder = 'Name car';
generateCar.appendChild(nameCarInput);

const inputNewColor = document.createElement('input');
inputNewColor.type = 'color';
generateCar.appendChild(inputNewColor);

const btnCreateCar = document.createElement('button');
btnCreateCar.textContent = 'Create car';
btnCreateCar.classList.add('btn-create');
generateCar.appendChild(btnCreateCar);

// Rename or Change car
const changeCar = document.createElement('div');
changeCar.classList.add('change-car');
carsCreation.appendChild(changeCar);

const updateNameInput = document.createElement('input');
updateNameInput.type = 'text';
updateNameInput.placeholder = 'Name car';
changeCar.appendChild(updateNameInput);

const changeColorInput = document.createElement('input');
changeColorInput.type = 'color';
changeCar.appendChild(changeColorInput);

const btnUpdate = document.createElement('button');
btnUpdate.classList.add('btn-update');
btnUpdate.textContent = 'Update car';
changeCar.appendChild(btnUpdate);

// Race Generation
const raceSettings = document.createElement('div');
raceSettings.classList.add('race-wrapper');
carsCreation.appendChild(raceSettings); 

const btnRace = document.createElement('button');
btnRace.classList.add('btn-race');
btnRace.textContent = 'Start Race'
raceSettings.appendChild(btnRace);

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Race';
resetBtn.classList.add('btn-reset');
raceSettings.appendChild(resetBtn);

const btnGenerate = document.createElement('button');
btnGenerate.textContent = 'Generate car';
btnGenerate.classList.add('btn-generate');
raceSettings.appendChild(btnGenerate);

// Cars Wrapper
const pageNumber = 0;

const garageWrapper = document.createElement('div');
garageWrapper.classList.add('garage-wrapper');
root.appendChild(garageWrapper);

const garageTitle = document.createElement('h3');
garageTitle.classList.add('garage-title');
garageTitle.textContent = `Garage (0)`;
garageWrapper.appendChild(garageTitle);

const pageTitle = document.createElement('h4');
pageTitle.classList.add('page-title');
pageTitle.textContent = `Page #${pageNumber}`;
garageWrapper.appendChild(pageTitle);

const garageCarWrapper = document.createElement('div');
garageCarWrapper.classList.add('garage-cars');
garageWrapper.appendChild(garageCarWrapper);
}

createGaragePage();