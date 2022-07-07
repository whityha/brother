import Cards from './cards/cards';
import { TCards } from '../types/types';
import FilterArea from './filter/filter-area';
export default class AppView {
    public cards: Cards;
    public filterArea: FilterArea;
    constructor() {
        this.cards = new Cards();
        this.filterArea = new FilterArea();
    }

    renderCards(data: TCards) {
        this.cards.render(data);
    }
    renderFilterArea(options) {
        this.filterArea.render(options);
    }
}
