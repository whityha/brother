import { TCallBack, TOptions, TCards } from '../types/types';
export default class AppController {
    sort(data: TCards, options: TOptions, callback: TCallBack): void {
        const sortData = data.sort((a, b) => {
            if (options.sortSettings.direction === 'line') {
                return a[`${options.sortSettings.type}`] - b[`${options.sortSettings.type}`];
            } else if (options.sortSettings.direction === 'reverse') {
                return b[`${options.sortSettings.type}`] - a[`${options.sortSettings.type}`];
            } else throw new Error('options передались неправильно');
        });
        console.log(sortData);
        callback(sortData);
    }
}
