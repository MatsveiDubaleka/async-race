import { garageTitle } from '../view/garage';
import { getGarageСount } from '../controller/data/getData';
import { path } from '../controller/data/getData';

const getCountCars = async () => {
  const result = await getGarageСount(path.garage);
  garageTitle.textContent = `Garage (${result.length})`;
};

Promise.resolve().then(async () => await getCountCars());