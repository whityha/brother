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
// type TColors = ('черный' | 'красный' | 'белый' | 'зеленый')[];
// type TCountry = ('Индия' | 'Китай' | 'Англия' | 'Индонезия')[];
type Tsort_direction = 'line' | 'reverse';

type Tsort_type = 'date' | 'price';
type TDSlider = {
    noUiSlider: {
        [index: string]: (arg0: string, callback: (values: number[], handle: number) => void) => void;
    };
};
type TfilterSetting = {
    [index: string]: string[];
};
type TsortSettings = {
    direction: Tsort_direction;
    type: Tsort_type;
};
type TfilterSliders = {
    sliderDate: number[];
    sliderPrice: number[];
};
type TOptions = {
    sortSettings: TsortSettings;
    filterSetting: TfilterSetting;
    search: string;
    filterSliders: TfilterSliders;
};
type TdefaultFilter = Pick<TOptions, 'filterSetting'>;
export {
    TCard,
    TCards,
    TCallBack,
    TOptions,
    TdefaultFilter,
    Tsort_type,
    Tsort_direction,
    TDSlider,
    TsortSettings,
    TfilterSetting,
    TfilterSliders,
};
