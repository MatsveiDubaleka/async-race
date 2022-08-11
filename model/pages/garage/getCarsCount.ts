import { getData } from '../../../controller/data/getData';
import { path } from '../../../controller/data/getData';

export const getCountCars = async () => {
  const garageTitle = document.querySelector('.garage-title') as HTMLElement;
  const result = await getData(path.garage);
  garageTitle.textContent = `Garage (${result.length})`;
};

Promise.resolve().then(async () => await getCountCars());