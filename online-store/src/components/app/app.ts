import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions } from '../types/types';
const data = [
    {
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
    constructor() {
        this.view = new AppView();
        this.controller = new AppController();
        this.options = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
        };
    }

    start() {
        const button = document.querySelector('.button-swap') as HTMLButtonElement;
        const cardsList = document.querySelector('.card-list') as HTMLUListElement;
        button.addEventListener('click', (e) => {
            cardsList.innerHTML = '';
            this.controller.sort(data, this.options, (data: TCards) => {
                this.view.renderCards(data);
            });
            this.options.sortSettings.direction === 'line'
                ? (this.options.sortSettings.direction = 'reverse')
                : (this.options.sortSettings.direction = 'line');
        });
    }
}

export default App;
