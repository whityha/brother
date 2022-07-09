import { TCallBack, TOptions, TCards } from '../types/types';
export default class AppController {
    sort(data: TCards, options: TOptions, callback?: TCallBack): TCards {
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

    filter(data: TCards, options: any, callback: TCallBack): void {
        let newData: TCards = [];
        for (const key in options.filterSetting) {
            if (!newData.length) {
                newData = data.filter((item: any) => {
                    return options.filterSetting[key].some((value: any) => {
                        switch (typeof item[key]) {
                            case 'number':
                                return value == item[key];
                            case 'boolean':
                                return value === item[key].toString();
                            case 'string':
                                return value.toLowerCase() === item[key].toLowerCase();
                        }
                    });
                });
            } else {
                newData = newData.filter((item: any) => {
                    return options.filterSetting[key].some((value: any) => {
                        switch (typeof item[key]) {
                            case 'boolean':
                                return value === item[key].toSting();
                            case 'number':
                                return value == item[key];
                            case 'string':
                                return value.toLowerCase() === item[key].toLowerCase();
                        }
                    });
                });
            }
        }
        console.log(newData);
        callback(newData);
    }
}
