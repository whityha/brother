import './global.sass';
import App from './components/app/app';
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
    {
        id: 5,
        discount: [true, 30],
        image: {
            src: '../src/assets/images/greenfield.png',
        },
        name: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Индия',
        price: 140,
        date: 2022,
    },
    {
        id: 6,
        discount: [true, 50],
        image: {
            src: '../src/assets/images/richard.jpg',
        },
        name: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Китай',
        price: 2670,
        date: 2022,
    },
];
const APP = new App(data);
APP.start();
