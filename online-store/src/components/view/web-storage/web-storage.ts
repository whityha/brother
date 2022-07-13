// import { TOptions } from '../../types/types';

export default class WebStorage {
    // options: TOptions | undefined;
    // constructor() {
    //     if (typeof localStorage.getItem('options') === 'string')
    //         this.options = JSON.parse(localStorage.getItem('options'));
    // }
    getItem(key: string) {
        const object = localStorage.getItem(key) as string;
        return JSON.parse(object);
    }
    setItem(key: string, value: unknown) {
        const object = JSON.stringify(value);
        localStorage.setItem(key, object);
    }
}
