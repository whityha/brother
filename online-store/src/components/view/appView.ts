import Cards from './cards/cards';
import { TCards } from '../types/types';
import FilterArea from './filter/filter-area';
import { IfilterAreaOptions } from '../types/interfaces';
import SearchArea from './search/search-area';
export default class AppView {
    public cards: Cards;
    public filterArea: FilterArea;
    public search: SearchArea;
    constructor() {
        this.cards = new Cards();
        this.filterArea = new FilterArea();
        this.search = new SearchArea();
    }

    renderCards(data: TCards) {
        this.cards.render(data);
    }
    renderFilterArea(options: IfilterAreaOptions) {
        this.filterArea.render(options);
    }
    renderSearch() {
        this.search.render();
    }
}
