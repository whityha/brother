import { TCallBack, TOptions, TCards, TfilterSetting, TfilterSliders, TCard } from '../types/types';
export default class AppController {
    sort(data: TCards, options: Pick<TOptions, 'sortSettings'>, callback?: TCallBack): TCards {
        const sortData = data.sort((a, b) => {
            if (options.sortSettings.direction === 'line') {
                return a[`${options.sortSettings.type}`] - b[`${options.sortSettings.type}`];
            } else if (options.sortSettings.direction === 'reverse') {
                return b[`${options.sortSettings.type}`] - a[`${options.sortSettings.type}`];
            } else throw new Error('options передались неправильно');
        });
        if (callback) callback(sortData);
        return sortData;
    }

    filter(
        data: TCards,
        filterSetting: TfilterSetting,
        search: string,
        filterSliders: TfilterSliders,
        callback: TCallBack
    ): void {
        let newData: TCards = [];
        const filteringCard = (key: string, card: TCard) => {
            if (card.price >= filterSliders.sliderPrice[0] && card.price <= filterSliders.sliderPrice[1]) {
                if (card.date >= filterSliders.sliderDate[0] && card.date <= filterSliders.sliderDate[1]) {
                    if (card.brand.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                        return filterSetting[key].some((value) => {
                            switch (typeof card[key]) {
                                case 'number':
                                    return value == card[key];
                                case 'boolean':
                                    return value === card[key].toString();
                                case 'string':
                                    return value.toLowerCase() === (card[key] as string).toLowerCase();
                            }
                        });
                    }
                    return false; // TODO - сделать запись что совпалений не найдено
                }
                return false;
            }
            return false;
        };
        for (const key in filterSetting) {
            if (!newData.length) {
                newData = data.filter((card) => {
                    return filteringCard(key, card);
                });
            } else {
                newData = newData.filter((card) => {
                    return filteringCard(key, card);
                });
                // в случае, если в Data уже нет карточек, мы прерываем выполнение фильтрации, иначе попадет под первое условие
                if (newData.length === 0) break;
            }
        }
        callback(newData);
    }
}
