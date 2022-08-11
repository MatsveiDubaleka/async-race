export const createWinnersPage = () => {
  const root = document.querySelector('.root') as HTMLElement;

  const title = document.createElement('h1');
  title.textContent = 'Async Race';
  title.classList.add('title');
  root.appendChild(title);

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  root.appendChild(btnWrapper);

  const toGarage = document.createElement('button');
  toGarage.textContent = 'Garage';
  toGarage.classList.add('garage', 'btn', 'page');
  btnWrapper.appendChild(toGarage);

  const toWinners = document.createElement('button');
  toWinners.textContent = 'Winners';
  toWinners.classList.add('winners', 'btn', 'page', 'active-page');
  btnWrapper.appendChild(toWinners);

  const winnersTitle = document.createElement('h1');
  winnersTitle.classList.add('winners-title');
  winnersTitle.textContent = `Winners 0`;
  root.appendChild(winnersTitle);  

  const pageTitle = document.createElement('h4');
  pageTitle.classList.add('page-title');
  pageTitle.textContent = `Page #0`;
  root.appendChild(pageTitle);

  const winnersWrapper = document.createElement('div');
  winnersWrapper.classList.add('winners-wrapper');
  root.appendChild(winnersWrapper);
}