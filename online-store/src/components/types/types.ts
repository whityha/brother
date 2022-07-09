type TCard = {
    [index: string]: string | number | boolean | object;
    id: number;
    discount_value: number;
    discount: boolean;
    image: {
        src: string;
    };
    brand: string;
    type: string;
    box: string;
    color: string;
    country: string;
    price: number;
    date: number;
};
type TCards = TCard[];
type TCallBack = (data: TCards) => void;
type TColors = ('черный' | 'красный' | 'белый' | 'зеленый')[];
type TCountry = ('Индия' | 'Китай' | 'Англия' | 'Индонезия')[];
type sort_direction = 'line' | 'reverse';

type Tsort_type = 'date' | 'price';

type TOptions = {
    sortSettings: {
        direction: sort_direction;
        type: Tsort_type;
    };
    filterSetting: {
        [index: string]: string[];
    };
};
type TdefaultFilter = Pick<TOptions, 'filterSetting'>;
export { TCard, TCards, TCallBack, TOptions, TdefaultFilter, Tsort_type };
