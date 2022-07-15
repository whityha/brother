import { TCallBack, TOptions, TCards, TfilterSetting, TfilterSliders } from '../types/types';
import { ICard } from '../types/interfaces';
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
        return sortData; // возвращаем sortData, потому что мы фильтруем после сортировки.
    }

    filter(
        data: TCards,
        filterSetting: TfilterSetting,
        search: string,
        filterSliders: TfilterSliders,
        callback: TCallBack
    ): void {
        let newData: TCards = [];
        const messageNoCards = () => {
            const cardsArea = document.querySelector('.card-list') as HTMLUListElement;
            const messageBox = document.createElement('div');
            messageBox.className = 'no-cards';
            messageBox.innerHTML = 'Совпадений не найдено';
            cardsArea.append(messageBox);
        };
        const filteringCard = (key: string, card: ICard) => {
            // фильтруем сперва по слайдеру цены
            if (card.price >= filterSliders.sliderPrice[0] && card.price <= filterSliders.sliderPrice[1]) {
                //фультруем по слайдеру даты
                if (card.date >= filterSliders.sliderDate[0] && card.date <= filterSliders.sliderDate[1]) {
                    //фильтруем название чая по поиску в строке. Если совпадения есть, фильтруем дальше, если нет, то возвращаем false
                    if (card.brand.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                        // фильтурем по чекбоксам фильтров
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
                    return false;
                }
                return false;
            }
            return false;
        };
        for (const key in filterSetting) {
            //проверяем на наличие карточек в newData. При первой итерации их нет, мы используем первоначальную Data.
            if (!newData.length) {
                newData = data.filter((card) => {
                    return filteringCard(key, card);
                });
                if (newData.length === 0) {
                    messageNoCards();
                    break;
                }
            } else {
                newData = newData.filter((card) => {
                    return filteringCard(key, card);
                });
                // в случае, если в Data уже нет карточек, мы прерываем выполнение фильтрации, иначе попадет под первое условие
                if (newData.length === 0) {
                    messageNoCards();
                    break;
                }
            }
        }
        callback(newData);
    }
}
