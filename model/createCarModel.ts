import { getGarageСount } from '../controller/data/getData';
import { path, baseUrl } from '../controller/data/getData';
import { createCar } from '../view/createCarView';
import { ICar } from '../controller/carGeneration/ICar';

export const createCarModel = async () => {
  const response = await fetch(`${baseUrl}${path.garage}`);
  const array = await response.json();
  array.map((item: ICar) => {
      createCar(item);
  })
}

Promise.resolve().then(async () => await createCarModel());