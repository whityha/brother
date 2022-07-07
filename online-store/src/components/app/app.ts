import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions } from '../types/types';
import { IfilterAreaOptions } from '../types/interfaces';
const data = [
    {
        id: 1,
        discount: [false],
        image: {
            src: '../src/assets/images/AHMAD.jpg',
        },
        name: 'AHMAD TEE',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Индия',
        price: 10,
        date: 2019,
    },
    {
        id: 3,
        discount: [true, 10],
        image: {
            src: '../src/assets/images/lipton.jpg',
        },
        name: 'LIPTON',
        type: 'чай',
        box: 'пакетированный',
        color: 'черный',
        country: 'Индонезия',
        price: 12,
        date: 2021,
    },
    {
        id: 2,
        discount: [false, 20],
        image: {
            src: '../src/assets/images/greenfield.png',
        },
        name: 'GREENFIELD',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Китай',
        price: 13,
        date: 2020,
    },
    {
        id: 4,
        discount: [false, 20],
        image: {
            src: '../src/assets/images/richard.jpg',
        },
        name: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Англия',
        price: 200,
        date: 2022,
    },
];
class App {
    view: AppView;
    controller: AppController;
    options: TOptions;
    readonly filterAreaOptions: IfilterAreaOptions;
    readonly defauleFilterSetting: Pick<TOptions, 'filterSetting'>;
    constructor() {
        this.view = new AppView();
        this.controller = new AppController();
        this.options = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
            filterSetting: {
                color: ['черный'],
                country: ['Индия'],
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
    }

    start() {
        const button = document.querySelector('.button-swap') as HTMLButtonElement;
        const cardsList = document.querySelector('.card-list') as HTMLUListElement;
        button.addEventListener('click', () => {
            cardsList.innerHTML = '';
            let newData = data;
            newData = this.controller.sort(newData, this.options);
            this.controller.filter(newData, this.options, (data: TCards) => {
                this.view.renderCards(data);
            });
            this.options.sortSettings.direction === 'line'
                ? (this.options.sortSettings.direction = 'reverse')
                : (this.options.sortSettings.direction = 'line');
        });

        this.controller.sort(data, this.options, (data: TCards) => {
            this.view.renderCards(data);
        });
        this.view.renderFilterArea(this.filterAreaOptions);
    }
}

export default App;
