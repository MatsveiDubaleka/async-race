import { path } from '../controller/data/getData';
import { getData } from '../controller/data/getData';

export const getWinners = async () => {
  const winnersTitle = document.querySelector('.winners-title') as HTMLElement ;
  const result = await getData(path.winners);
  winnersTitle.textContent = `Winners ${result.length}`
};