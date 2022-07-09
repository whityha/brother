import Cards from './cards/cards';
import { TCards } from '../types/types';
import FilterArea from './filter/filter-area';
import SearchArea from './search/search-area';
import SortArea from './sort/sort-area';
import Cart from './cart/cart';
export default class AppView {
    public cards: Cards;
    public filterArea: FilterArea;
    public searchArea: SearchArea;
    public sortArea: SortArea;
    public cart: Cart;
    constructor() {
        this.cards = new Cards();
        this.filterArea = new FilterArea();
        this.searchArea = new SearchArea();
        this.sortArea = new SortArea();
        this.cart = new Cart();
    }

    renderCart(a: number) {
        this.cart.changeCount(a);
        this.cart.render();
    }
    renderCards(data: TCards, cartItems: string[]) {
        this.cards.render(data, cartItems);
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
