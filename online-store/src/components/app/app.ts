import AppView from '../view/appView';
import AppController from '../controller/controller';
import { TCards, TOptions } from '../types/types';
const data = [
    {
        name: 'ball',
        type: 'inventary',
        price: 200,
        date: 2020,
    },
    {
        name: 'bycicle',
        type: 'transport',
        price: 440,
        date: 2023,
    },
    {
        name: 'roliki',
        type: 'transport',
        price: 230,
        date: 2021,
    },
    {
        name: 'roliki',
        type: 'transport',
        price: 2330,
        date: 1921,
    },
    {
        name: 'roliki',
        type: 'transport',
        price: 26670,
        date: 221,
    },
    {
        name: 'roliki',
        type: 'transport',
        price: 230,
        date: 2001,
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
