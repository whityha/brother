import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions, TdefaultFilter } from '../types/types';

class App {
    view: AppView;
    controller: AppController;
    options: TOptions;
    readonly defauleFilterSetting: TdefaultFilter;
    data: TCards;
    search: string;
    constructor(data: TCards) {
        this.view = new AppView();
        this.controller = new AppController();
        this.options = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
            filterSetting: {
                // discount: ['true'],
            },
        };
        this.defauleFilterSetting = {
            filterSetting: {
                country: ['Индия', 'Китай', 'Англия', 'Индонезия'],
            },
        };
        this.search = '';
        this.data = data;
    }
    searchEvent() {
        const search = document.querySelector('.search-input') as HTMLInputElement;
        const clearBtn = document.querySelector('.search-icon') as HTMLButtonElement;
        clearBtn.addEventListener('click', () => {
            this.search = '';
            this.startFilter(this.options, this.search);
        });
        search.addEventListener('input', () => {
            this.search = search.value;
            this.startFilter(this.options, this.search);
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
                                (item) => item === checkboxValue
                            );
                            this.options.filterSetting[checkboxName].splice(i, 1);
                            if (!this.options.filterSetting[checkboxName].length)
                                delete this.options.filterSetting[checkboxName];
                        }
                    }
                    console.log(this.options.filterSetting);
                    this.startFilter(this.options, this.search);
                }
            });
        });
    }
    startFilter(options: TOptions, search: string) {
        let newData = this.data;
        this.clearCardList();
        newData = this.controller.sort(newData, options);
        if (!Object.keys(options.filterSetting).length) {
            // если нет настроек для фильтра, мы используем дефолтные настройки для фильтрации
            this.controller.filter(newData, this.defauleFilterSetting, search, (data: TCards) => {
                this.view.renderCards(data);
            });
        } else {
            this.controller.filter(newData, options, search, (data: TCards) => {
                this.view.renderCards(data);
            });
        }
    }
    clearCardList() {
        const cardsList = document.querySelector('.card-list') as HTMLUListElement;
        cardsList.innerHTML = '';
    }
    start() {
        const button = document.querySelector('.button-swap') as HTMLButtonElement;
        button.addEventListener('click', () => {
            this.startFilter(this.options, this.search);
            this.options.sortSettings.direction === 'line'
                ? (this.options.sortSettings.direction = 'reverse')
                : (this.options.sortSettings.direction = 'line');
        });

        this.view.renderFilterArea();
        this.view.renderSearch();
        this.view.renderSortArea();

        this.checkboxEvent();
        this.searchEvent();

        this.controller.sort(this.data, this.options, (data: TCards) => {
            this.view.renderCards(data);
        });
    }
}

export default App;
