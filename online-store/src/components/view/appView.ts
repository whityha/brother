import Cards from './cards/cards';
import { TCards } from '../types/types';
import FilterArea from './filter/filter-area';
import { IfilterAreaOptions } from '../types/interfaces';
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
    renderFilterArea(options: IfilterAreaOptions) {
        this.filterArea.render(options);
    }
}
