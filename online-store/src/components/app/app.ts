import AppView from '../view/appView';
import AppController from '../controller/controller';
import WebStorage from '../view/web-storage/web-storage';
import { TCards, TOptions, TdefaultFilter, Tsort_type, Tsort_direction, TDSlider } from '../types/types';
import { MAX_CART_COUNT } from '../constants/constants';
class App {
    view: AppView;
    controller: AppController;
    storage: WebStorage;
    options: TOptions;
    readonly defauleFilterSetting: TdefaultFilter;
    data: TCards;
    cartItems: string[];
    readonly defaultOptions: TOptions;
    constructor(data: TCards) {
        this.view = new AppView();
        this.controller = new AppController();
        this.storage = new WebStorage();
        this.cartItems = this.storage.getItem('cart') || [];
        this.defaultOptions = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
            filterSetting: {},
            search: '',
            filterSliders: {
                sliderDate: [2017, 2022, 2017, 2022],
                sliderPrice: [0, 45, 0, 45],
            },
        };
        this.options = this.storage.getItem('options') || JSON.parse(JSON.stringify(this.defaultOptions));
        this.defauleFilterSetting = {
            filterSetting: {
                country: ['Индия', 'Китай', 'Англия', 'Индонезия'],
            },
        };
        this.data = data;
    }

    private resetEvent() {
        const reset = document.querySelector('.filter-reset') as HTMLButtonElement;
        reset.addEventListener('click', () => {
            this.options.filterSetting = JSON.parse(JSON.stringify(this.defaultOptions)).filterSetting;
            this.options.filterSliders = JSON.parse(JSON.stringify(this.defaultOptions)).filterSliders;
            this.options.search = '';

            this.renderFilteringData(this.options);
            this.view.renderFilterArea(this.options);
            this.view.renderSearch(this.options);

            this.checkboxEvent();
            this.filterSliderEvent();
            this.searchEvent();

            this.storage.setItem('options', this.options);
        });

        const resetAll = document.querySelector('.all-reset') as HTMLButtonElement;
        resetAll.addEventListener('click', () => {
            this.storage.clear();
            location.reload();
        });
    }
    private cardsEvent() {
        const cartBtns = document.querySelectorAll('.on-cart');
        cartBtns.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    if (this.cartItems.length <= MAX_CART_COUNT) {
                        const changeCart = () => {
                            cartBtn.classList.toggle('added');
                            this.clearBox('.cart');
                            this.view.renderCart(this.cartItems.length);
                        };
                        const cartBtn = e.target as HTMLButtonElement;
                        const cardId = cartBtn.dataset.id;
                        if (!cartBtn.classList.contains('added') && cardId && this.cartItems.length < MAX_CART_COUNT) {
                            this.cartItems.push(cardId);
                            cartBtn.innerText = 'Добавлено!';
                            changeCart();
                        } else if (
                            !cartBtn.classList.contains('added') &&
                            cardId &&
                            this.cartItems.length == MAX_CART_COUNT
                        ) {
                            alert('Извините, корзина заполнена. Удлаить из корзины что нибдуь');
                        } else if (cartBtn.classList.contains('added') && cardId) {
                            const i = this.cartItems.findIndex((item) => item == cardId);
                            this.cartItems.splice(i, 1);
                            cartBtn.innerText = 'В корзину';
                            changeCart();
                        }
                    } else throw new Error(`В корзине уже больше ${MAX_CART_COUNT} штук`);

                    this.storage.setItem('cart', this.cartItems);
                }
            });
        });
    }
    private sortEvent() {
        const sort = document.querySelector('.sort-select') as HTMLSelectElement;
        const sortBtn = document.querySelector('.sort-button') as HTMLButtonElement;
        // клик сортировки по возрастанию либо убыванию
        sortBtn.addEventListener('click', () => {
            const value = sortBtn.value as Tsort_direction;
            this.options.sortSettings.direction = value;
            if (Object.keys(this.options.filterSetting)) this.renderFilteringData(this.options);
            else this.renderSortingData(this.options);

            this.storage.setItem('options', this.options);
        });
        // изменения select по разным критериям сортировки
        sort.addEventListener('change', () => {
            const value = sort.options[sort.selectedIndex]['value'] as Tsort_type;
            this.options.sortSettings.type = value;
            if (Object.keys(this.options.filterSetting)) this.renderFilteringData(this.options);
            else this.renderSortingData(this.options);

            this.storage.setItem('options', this.options);
        });
    }
    private searchEvent() {
        const search = document.querySelector('.search-input') as HTMLInputElement;
        const clearBtn = document.querySelector('.search-icon') as HTMLButtonElement;
        clearBtn.addEventListener('click', () => {
            this.options.search = '';
            this.renderFilteringData(this.options);

            this.storage.setItem('options', this.options);
        });
        search.addEventListener('input', () => {
            this.options.search = search.value;
            this.renderFilteringData(this.options);

            this.storage.setItem('options', this.options);
        });
    }
    private checkboxEvent() {
        //навешиваеем обработчики событий на чекбоксы, для изменения настроек фильтрации
        const checkboxes = document.querySelectorAll('.filter-area input[type=checkbox]');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                if (e.target) {
                    const checkbox = e.target as HTMLInputElement;
                    const checkboxValue = checkbox.value as string;
                    const checkboxName = checkbox.name as string;
                    if (checkbox.checked) {
                        if (this.options.filterSetting) {
                            const array: string[] = this.options.filterSetting[checkboxName] || [];
                            array.push(`${checkboxValue.toLowerCase()}`);
                            this.options.filterSetting[checkboxName] = array; //создаем массив с данными для фильтрации
                        }
                    } else {
                        if (this.options.filterSetting) {
                            const i = this.options.filterSetting[checkboxName].findIndex(
                                (item) => item.toLowerCase() === checkboxValue.toLowerCase()
                            );
                            this.options.filterSetting[checkboxName].splice(i, 1);
                            if (!this.options.filterSetting[checkboxName].length)
                                delete this.options.filterSetting[checkboxName];
                        }
                    }
                    this.renderFilteringData(this.options);

                    this.storage.setItem('options', this.options);
                }
            });
        });
    }
    private filterSliderEvent() {
        const sliderDate = document.querySelector('.slider-date') as HTMLDivElement;
        const sliderPrice = document.querySelector('.slider-price') as HTMLDivElement;
        ((sliderDate as unknown) as TDSlider).noUiSlider.on('change', (values: number[], handle: number) => {
            this.options.filterSliders.sliderDate[handle] = Math.round(values[handle]);
            this.renderFilteringData(this.options);

            this.storage.setItem('options', this.options);
        });
        ((sliderPrice as unknown) as TDSlider).noUiSlider.on('change', (values: number[], handle: number) => {
            this.options.filterSliders.sliderPrice[handle] = Math.round(values[handle]);
            this.renderFilteringData(this.options);

            this.storage.setItem('options', this.options);
        });
    }

    private renderSortingData(options: TOptions) {
        this.clearBox('.card-list');
        this.controller.sort(this.data, options, (data: TCards) => {
            this.view.renderCards(data, this.cartItems);
        });
        this.cardsEvent();
    }
    private renderFilteringData(options: TOptions) {
        let newData = this.data;
        this.clearBox('.card-list');
        newData = this.controller.sort(newData, options);
        if (!Object.keys(options.filterSetting).length) {
            // если нет настроек для фильтра, мы используем дефолтные настройки для фильтрации
            this.controller.filter(
                newData,
                this.defauleFilterSetting.filterSetting,
                options.search,
                options.filterSliders,
                (data: TCards) => {
                    this.view.renderCards(data, this.cartItems);
                }
            );
        } else {
            this.controller.filter(
                newData,
                options.filterSetting,
                options.search,
                options.filterSliders,
                (data: TCards) => {
                    this.view.renderCards(data, this.cartItems);
                }
            );
        }
        this.cardsEvent();
    }

    private clearBox(className: string) {
        const cardsList = document.querySelector(`${className}`) as HTMLElement;
        cardsList.innerHTML = '';
    }

    public start() {
        this.view.renderFilterArea(this.options);
        this.view.renderSearch(this.options);
        this.view.renderSortArea(this.options);
        this.view.renderCart(this.cartItems.length);

        this.checkboxEvent();
        this.searchEvent();
        this.sortEvent();
        this.filterSliderEvent();
        this.resetEvent();

        this.renderFilteringData(this.options);
    }
}

export default App;
