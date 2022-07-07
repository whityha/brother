import Cards from './cards/cards';
import { TCards } from '../types/types';
export default class AppView {
    public cards: Cards;
    constructor() {
        this.cards = new Cards();
    }

    renderCards(data: TCards) {
        this.cards.render(data);
    }
}
