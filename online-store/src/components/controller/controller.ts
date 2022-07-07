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
        console.log(sortData);
        if (callback) callback(sortData);
        return sortData;
    }

    filter(data: TCards, options: any, callback: TCallBack): void {
        let newData: TCards = [];
        for (const key in options.filterSetting) {
            if (!newData.length) {
                newData = data.filter((item: any) => {
                    return options.filterSetting[key].some(
                        (value: any) => value.toLowerCase() === item[key].toLowerCase() || value === Boolean(item[key])
                    );
                });
                console.log(newData);
            } else {
                newData = newData.filter((item: any) => {
                    return options.filterSetting[key].some(
                        (value: any) => value.toLowerCase() === item[key].toLowerCase() || value === Boolean(item[key])
                    );
                });
            }
        }
        callback(newData);
    }
}
