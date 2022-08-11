import { createCar } from './pages/garage/createCarView';

const inputName = document.querySelector('input[type="text"]') as HTMLInputElement;
const inputColor = document.querySelector('input[type="color"]') as HTMLInputElement;
const btnCreate = document.querySelector('.btn-create') as HTMLButtonElement;

btnCreate.addEventListener('click', () => {
  const car = {
    name: inputName.value,
    color: inputColor.value,
    id: 1,
  }
  createCar(car);
})