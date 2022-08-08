import { garageTitle } from '../view/garage';
import { getGarageСount } from '../controller/getData';
import { path } from '../controller/getData';

const getCountCars = async () => {
  const result = await getGarageСount(path.garage);
  garageTitle.textContent = `Garage (${result.length})`;
};

Promise.resolve().then(async () => await getCountCars());