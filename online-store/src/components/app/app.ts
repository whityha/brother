import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions } from '../types/types';
import { IfilterAreaOptions } from '../types/interfaces';

class App {
    view: AppView;
    controller: AppController;
    options: TOptions;
    readonly filterAreaOptions: IfilterAreaOptions;
    readonly defauleFilterSetting: Pick<TOptions, 'filterSetting'>;
    data: TCards;
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
                color: ['черный', 'красный', 'белый', 'зеленый'],
                country: ['Индия', 'Китай', 'Англия', 'Индонезия'],
            },
        };
        this.filterAreaOptions = {
            country: {
                values: ['Индия', 'Китай', 'Англия', 'Индонезия'],
                pick: 'Страны',
            },
            color: {
                values: ['черный', 'белый', 'красный', 'зеленый'],
                pick: 'Цвет',
            },
            brand: {
                values: ['Lipton', 'Richard', 'Greenfield', 'AHMAD TEE'],
                pick: 'Брэнд',
            },
            date: {
                values: ['2022', '2021', '2020', '2019'],
                pick: 'Год сбора урожая',
            },
            discount: {
                values: [true],
                pick: 'Скидка',
            },
        };
        this.data = data;
    }
    checkboxEvent() {
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
                            this.options.filterSetting[checkboxName] = array;
                        } else throw new Error('Нет объекта опций для фильтрации');
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
                    console.log(this.options);
                    this.startFilter(this.options);
                }
            });
        });
    }
    startFilter(options: any) {
        let newData = this.data;
        this.clearCardList();
        newData = this.controller.sort(newData, options);
        if (!Object.keys(options.filterSetting).length) {
            this.controller.filter(newData, this.defauleFilterSetting, (data: TCards) => {
                this.view.renderCards(data);
            });
        } else {
            this.controller.filter(newData, options, (data: TCards) => {
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
            this.startFilter(this.options);
            this.options.sortSettings.direction === 'line'
                ? (this.options.sortSettings.direction = 'reverse')
                : (this.options.sortSettings.direction = 'line');
        });

        this.controller.sort(this.data, this.options, (data: TCards) => {
            this.view.renderCards(data);
        });
        this.view.renderFilterArea(this.filterAreaOptions);
        this.view.renderSearch();
        this.checkboxEvent();
    }
}

export default App;
