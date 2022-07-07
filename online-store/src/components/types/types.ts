type TCard = {
    discount: (number | boolean)[];
    image: {
        src: string;
    };
    name: string;
    type: string;
    box: string;
    color: string;
    country: string;
    price: number;
    date: number;
};
type TCards = TCard[];
type TCallBack = (data: TCards) => void;

type sort_direction = 'line' | 'reverse';

type sort_type = 'date' | 'price';

type TOptions = {
    sortSettings: {
        direction: sort_direction;
        type: sort_type;
    };
    filterSetting?: {
        color: string;
    };
};

export { TCard, TCards, TCallBack, TOptions };
