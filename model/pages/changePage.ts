import { createGaragePage } from '../../view/createGaragePage';
import { createWinnersPage } from '../../view/createWinnersPage';
import { getCountCars } from './garage/getCarsCount';
import { createCarModel } from './garage/createCarModel';
import { getWinners } from '../getWinners';
import { createWinners } from './winners/createWinners';
const root = document.querySelector('.root') as HTMLElement;

const changePage = () => {
  const pageBtns = document.querySelectorAll('.page');  
  pageBtns.forEach((pageBtn) => {
    pageBtn.addEventListener('click', () => {
      if(pageBtn.classList.contains('active-page')) {
        console.log('Вы остаётесь на той же страничке', pageBtn.textContent)
      } else if(!pageBtn.classList.contains('active-page')) {
        console.log('Вы переходите на другую страничку', pageBtn.textContent)
        const page: string | undefined = pageBtn.textContent?.toLowerCase();
        createPage(page)
      }
    });
  })  
}
changePage();

const createPage = (page: string | undefined) => {
  console.log(`Try to create ${page}`)
  root.innerHTML = '';
  if(page === 'winners') {
    createWinnersPage();
    changePage();
    createWinners();
    Promise.resolve().then(async () => await getWinners());
  } else if (page === 'garage') {
    createGaragePage();
    changePage();
    Promise.resolve().then(async () => await getCountCars());
    Promise.resolve().then(async () => await createCarModel());
  }
}