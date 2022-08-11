import { IWinner } from '../../../controller/interfaces/IWinner'

export const createWinnerView = (obj: IWinner) => {
  const winnersWrapper = document.querySelector('.winners-wrapper') as HTMLElement;

  const winner = document.createElement('div') as HTMLElement;
  winner.classList.add('winner');
  winnersWrapper.appendChild(winner);

  const winnerID = document.createElement('p');
  winnerID.classList.add('winner-id');
  winnerID.id = `winner-${obj.id}`;
  winnerID.textContent = `ID: ${obj.id}`;
  winner.appendChild(winnerID);

  const winnerName = document.createElement('p');
  winnerName.classList.add('winner-name');
  winnerName.textContent = `Winner: ${obj.wins}`;
  winner.appendChild(winnerName);

  const winnerTime = document.createElement('p');
  winnerTime.classList.add('winner-time');
  winnerTime.textContent = `Time: ${obj.time}`;
  winner.appendChild(winnerTime);
}