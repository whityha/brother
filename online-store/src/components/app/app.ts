import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions, TdefaultFilter, Tsort_type, Tsort_direction, TDSlider } from '../types/types';

class App {
    view: AppView;
    controller: AppController;
    options: TOptions;
    readonly defauleFilterSetting: TdefaultFilter;
    data: TCards;
    cartItems: string[];
    constructor(data: TCards) {
        this.view = new AppView();
        this.controller = new AppController();
        this.cartItems = [];
        this.options = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
            filterSetting: {
                // discount: ['true'],
            },
            search: '',
            filterSliders: {
                sliderDate: [2017, 2022],
            },
        };
        this.defauleFilterSetting = {
            filterSetting: {
                country: ['Индия', 'Китай', 'Англия', 'Индонезия'],
            },
        };
        this.data = data;
    }

    cardsEvent() {
        const cartBtns = document.querySelectorAll('.on-cart');
        cartBtns.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    if (this.cartItems.length <= 20) {
                        const changeCart = () => {
                            cartBtn.classList.toggle('added');
                            this.clearBox('.cart');
                            this.view.renderCart(this.cartItems.length);
                        };
                        const cartBtn = e.target as HTMLButtonElement;
                        const cardId = cartBtn.dataset.id;
                        console.log(this.cartItems.length);
                        if (!cartBtn.classList.contains('added') && cardId && this.cartItems.length < 20) {
                            this.cartItems.push(cardId);
                            cartBtn.innerText = 'Добавлено!';
                            changeCart();
                        } else if (!cartBtn.classList.contains('added') && cardId && this.cartItems.length == 20) {
                            alert('Извините, корзина заполнена. Удлаить из корзины что нибдуь');
                        } else if (cartBtn.classList.contains('added') && cardId) {
                            const i = this.cartItems.findIndex((item) => item == cardId);
                            this.cartItems.splice(i, 1);
                            cartBtn.innerText = 'В корзину';
                            changeCart();
                        }
                    } else throw new Error('В корзине уже больше 20 штук');
                }
            });
        });
    }

    sortEvent() {
        const sort = document.querySelector('.sort-select') as HTMLSelectElement;
        const sortBtn = document.querySelector('.sort-button') as HTMLButtonElement;
        sortBtn.addEventListener('click', () => {
            const value = sortBtn.value as Tsort_direction;
            this.options.sortSettings.direction = value;
            if (Object.keys(this.options.filterSetting)) this.startFilter(this.options);
            else this.startSort(this.options);
        });
        sort.addEventListener('change', () => {
            const value = sort.options[sort.selectedIndex]['value'] as Tsort_type;
            this.options.sortSettings.type = value;
            if (Object.keys(this.options.filterSetting)) this.startFilter(this.options);
            else this.startSort(this.options);
        });
    }

    searchEvent() {
        const search = document.querySelector('.search-input') as HTMLInputElement;
        const clearBtn = document.querySelector('.search-icon') as HTMLButtonElement;
        clearBtn.addEventListener('click', () => {
            this.options.search = '';
            this.startFilter(this.options);
        });
        search.addEventListener('input', () => {
            this.options.search = search.value;
            this.startFilter(this.options);
        });
    }

    checkboxEvent() {
        //навешиваеем обработчики событий на чекбоксы, для изменения настроек фильтрации
        const checkboxes = document.querySelectorAll('.filter-area input[type=checkbox]');
        console.log(checkboxes);
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
                    this.startFilter(this.options);
                }
            });
        });
    }

    startSort(options: TOptions) {
        this.clearBox('.card-list');
        this.controller.sort(this.data, options, (data: TCards) => {
            this.view.renderCards(data, this.cartItems);
        });
        this.cardsEvent();
    }

    startFilter(options: TOptions) {
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

    clearBox(className: string) {
        const cardsList = document.querySelector(`${className}`) as HTMLElement;
        cardsList.innerHTML = '';
    }
    filterSliderEvent() {
        const sliderDate = document.querySelector('.noUi-target') as HTMLDivElement;
        console.log(sliderDate);
        ((sliderDate as unknown) as TDSlider).noUiSlider.on('change', (values: number[], handle: number) => {
            this.options.filterSliders.sliderDate[handle] = Math.round(values[handle]);
            this.startFilter(this.options);
        });
    }
    start() {
        this.view.renderFilterArea();
        this.view.renderSearch();
        this.view.renderSortArea();
        this.view.renderCart(this.cartItems.length);

        this.checkboxEvent();
        this.searchEvent();
        this.sortEvent();
        this.filterSliderEvent();

        this.startSort(this.options);
    }
}

export default App;
