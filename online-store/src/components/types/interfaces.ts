import { TColors, TBox, TCountry } from './types';
export interface IfilterAreaOptions {
    country: {
        values: string[];
        name: string;
    };
    color: {
        values: string[];
        name: string;
    };
    brand: {
        values: string[];
        name: string;
    };
    discount: {
        values: [string];
        name: string;
    };
    box: {
        values: string[];
        name: string;
    };
}
export interface ICard {
    [index: string]: string | number | boolean | object;
    id: number;
    discount_value: number;
    discount: boolean;
    image: {
        src: string;
    };
    brand: string;
    type: string;
    box: TBox;
    color: TColors;
    country: TCountry;
    price: number;
    date: number;
}
