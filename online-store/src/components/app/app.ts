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
                color: ['черный', 'красный'],
                country: ['Индия', 'Англия', 'Китай'],
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
                values: ['Черный', 'Белый', 'Красный', 'Зеленый'],
                pick: 'Цвет',
            },
            brand: {
                values: ['Lipton', 'Richard'],
                pick: 'Брэнд',
            },
        };
        this.data = data;
    }

    start() {
        const button = document.querySelector('.button-swap') as HTMLButtonElement;
        const cardsList = document.querySelector('.card-list') as HTMLUListElement;
        button.addEventListener('click', () => {
            cardsList.innerHTML = '';
            let newData = this.data;
            newData = this.controller.sort(newData, this.options);
            this.controller.filter(newData, this.options, (data: TCards) => {
                this.view.renderCards(data);
            });
            this.options.sortSettings.direction === 'line'
                ? (this.options.sortSettings.direction = 'reverse')
                : (this.options.sortSettings.direction = 'line');
        });

        this.controller.sort(this.data, this.options, (data: TCards) => {
            this.view.renderCards(data);
        });
        this.view.renderFilterArea(this.filterAreaOptions);
    }
}

export default App;
