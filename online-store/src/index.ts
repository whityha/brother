import './global.sass';
import App from './components/app/app';
const data = [
    {
        id: 1,
        image: {
            src: '../src/assets/images/AHMAD.jpg',
        },
        brand: 'AHMAD TEE',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Индия',
        price: 10,
        date: 2019,
    },
    {
        id: 3,
        discount: 10,
        image: {
            src: '../src/assets/images/lipton.jpg',
        },
        brand: 'LIPTON',
        type: 'чай',
        box: 'пакетированный',
        color: 'черный',
        country: 'Индонезия',
        price: 12,
        date: 2021,
    },
    {
        id: 2,
        image: {
            src: '../src/assets/images/greenfield.png',
        },
        brand: 'GREENFIELD',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Китай',
        price: 13,
        date: 2020,
    },
    {
        id: 4,
        image: {
            src: '../src/assets/images/richard.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Англия',
        price: 200,
        date: 2022,
    },
    {
        id: 5,
        discount: 30,
        image: {
            src: '../src/assets/images/greenfield.png',
        },
        brand: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Индия',
        price: 140,
        date: 2022,
    },
    {
        id: 6,
        discount: 50,
        image: {
            src: '../src/assets/images/richard.jpg',
        },
        brand: 'RICHARD',
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
