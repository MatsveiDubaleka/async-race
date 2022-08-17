import { path, baseUrl } from '../../../controller/data/getData';
import { ICar } from '../../../controller/interfaces/ICar';
import { createCar } from './createCarView';

export const createCarModel = async () => {
  const response = await fetch(`${baseUrl}${path.garage}`);
  const array = await response.json();
  array.map((item: ICar) => {
      createCar(item);
  })
}

Promise.resolve().then(async () => await createCarModel());