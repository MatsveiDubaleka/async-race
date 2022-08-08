import { garageCarWrapper } from './garage';
import { ICar } from '../controller/carGeneration/ICar'

const createCar = (obj: ICar) => {
  const carWrapper = document.createElement('div');
  carWrapper.classList.add('car');
  garageCarWrapper.appendChild(carWrapper);

  const carBtns = document.createElement('div');
  carBtns.classList.add('car-btns');
  carWrapper.appendChild(carBtns);

  const btnSelect = document.createElement('button');
  btnSelect.textContent = 'Select car';
  btnSelect.classList.add('btn-select');
  carBtns.appendChild(btnSelect);

  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove car';
  btnRemove.classList.add('btn-remove');
  carBtns.appendChild(btnRemove);

  const carName = document.createElement('car-name');
  carName.textContent = obj.name;
  carBtns.appendChild(carName);
  
  const destinationStart = document.createElement('div');
  destinationStart.textContent = 'A';
  destinationStart.classList.add('destination-start');
  carWrapper.appendChild(destinationStart);

  const destinationEnd = document.createElement('div');
  destinationEnd.textContent = 'B';
  destinationEnd.classList.add('destination-end');
  carWrapper.appendChild(destinationEnd);
}