import { path } from '../../../controller/data/getData';
import { getData } from '../../../controller/data/getData';
import { IWinner } from '../../../controller/interfaces/IWinner';
import { createWinnerView } from './createWinnerView';

export const createWinners = async () => {
  const winners = await getData(path.winners);
  winners.map((winner: IWinner) => {
    createWinnerView(winner);
  })
}