import Cards from './cards/cards';
import { TCards } from '../types/types';
import FilterArea from './filter/filter-area';
import SearchArea from './search/search-area';
import SortArea from './sort/sort-area';
export default class AppView {
    public cards: Cards;
    public filterArea: FilterArea;
    public searchArea: SearchArea;
    sortArea: SortArea;
    constructor() {
        this.cards = new Cards();
        this.filterArea = new FilterArea();
        this.searchArea = new SearchArea();
        this.sortArea = new SortArea();
    }

    renderCards(data: TCards) {
        this.cards.render(data);
    }
    renderFilterArea() {
        this.filterArea.render();
    }
    renderSearch() {
        this.searchArea.render();
    }
    renderSortArea() {
        this.sortArea.render();
    }
}
