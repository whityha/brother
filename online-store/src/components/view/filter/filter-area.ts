import { IfilterAreaOptions } from '../../types/interfaces';
import './filter.sass';
export default class FilterArea {
    readonly filterAreaOptions: IfilterAreaOptions;
    constructor() {
        this.filterAreaOptions = {
            country: {
                values: ['Индия', 'Китай', 'Англия', 'Индонезия'],
                pick: 'Страны',
            },
            color: {
                values: ['черный', 'белый', 'красный', 'зеленый'],
                pick: 'Цвет',
            },
            brand: {
                values: ['Lipton', 'Richard', 'Greenfield', 'AHMAD TEE'],
                pick: 'Брэнд',
            },
            date: {
                values: ['2022', '2021', '2020', '2019'],
                pick: 'Год сбора урожая',
            },
            discount: {
                values: ['true'],
                pick: 'Скидка',
            },
        };
    }
    private makeFilterBox(key: string, name: string, value: string[] | boolean[]) {
        const box = document.createElement('div');
        const filterBoxList = document.createElement('ul');
        const filterBoxName = document.createElement('p');
        box.className = 'filter-box';
        filterBoxName.className = 'filter-box-name';
        filterBoxList.className = 'filter-box-list';
        filterBoxName.innerText = name;
        if (value.length) {
            value.forEach((element) => {
                const item = document.createElement('li');
                const checkbox = document.createElement('input') as HTMLInputElement;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', key);
                if (typeof element === 'string') checkbox.setAttribute('value', element);
                item.className = `filter-box-item filter-box-${key}-item`;
                if (typeof element === 'string') {
                    item.innerText = element;
                    if (element == 'true' || element == 'false') item.innerText = 'Только со скидкой';
                }
                item.prepend(checkbox);
                filterBoxList.append(item);
            });
        } else {
            console.log(`В ключе ${key} нет values`);
        }
        box.append(filterBoxName, filterBoxList);
        return box;
    }
    public render() {
        const container = document.querySelector('.filter-area') as HTMLDivElement;
        if (this.filterAreaOptions) {
            for (const key in this.filterAreaOptions) {
                const keyBox = this.makeFilterBox(
                    key,
                    this.filterAreaOptions[key as keyof IfilterAreaOptions]['pick'],
                    this.filterAreaOptions[key as keyof IfilterAreaOptions]['values']
                ) as HTMLDivElement;
                container.append(keyBox);
            }
        }
    }
}
