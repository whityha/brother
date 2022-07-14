import { ICard } from './interfaces';
type TCards = ICard[];
type TCallBack = (data: TCards) => void;

type TColors = 'черный' | 'красный' | 'белый' | 'зеленый';
type TCountry = 'Индия' | 'Китай' | 'Англия' | 'Индонезия';
type TBox = 'листовой' | 'пакетированный';

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
    TColors,
    TCountry,
    TBox,
};
