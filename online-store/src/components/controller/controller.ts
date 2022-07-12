import { TCallBack, TOptions, TCards } from '../types/types';
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

    filter(data: TCards, options: TOptions, search: string, callback: TCallBack): void {
        let newData: TCards = [];
        for (const key in options.filterSetting) {
            if (!newData.length) {
                newData = data.filter((item) => {
                    if (
                        item.date >= options.filterSliders.sliderDate[0] &&
                        item.date <= options.filterSliders.sliderDate[1]
                    ) {
                        if (item.brand.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                            return options.filterSetting[key].some((value) => {
                                switch (typeof item[key]) {
                                    case 'number':
                                        return value == item[key];
                                    case 'boolean':
                                        return value === item[key].toString();
                                    case 'string':
                                        return value.toLowerCase() === (item[key] as string).toLowerCase();
                                }
                            });
                        }
                        return false; // TODO - сделать запись что совпалений не найдено
                    }
                    return false;
                });
            } else {
                newData = newData.filter((item) => {
                    return options.filterSetting[key].some((value) => {
                        switch (typeof item[key]) {
                            case 'number':
                                return value == item[key];
                            case 'boolean':
                                return value === item[key].toString();
                            case 'string':
                                return value.toLowerCase() === (item[key] as string).toLowerCase();
                        }
                    });
                });
            }
        }
        console.log(newData);
        callback(newData);
    }
}
