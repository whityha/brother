type TCard = {
    price: number;
    type: string;
    date: number;
    name: string;
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
};

export { TCard, TCards, TCallBack, TOptions };
