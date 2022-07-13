import { IfilterAreaOptions } from '../../types/interfaces';
import './filter.sass';
import 'nouislider/dist/nouislider.css';
import { Slider } from './filter-range/filter-range-slider';
import { TOptions } from '../../types/types';
export default class FilterArea {
    readonly filterAreaOptions: IfilterAreaOptions;
    constructor() {
        this.filterAreaOptions = {
            discount: {
                values: ['true'],
                name: 'Скидка',
            },
            country: {
                values: ['Индия', 'Китай', 'Англия', 'Индонезия'],
                name: 'Страны',
            },
            color: {
                values: ['черный', 'белый', 'красный', 'зеленый'],
                name: 'Цвет',
            },
            brand: {
                values: ['Lipton', 'Richard', 'Greenfield', 'Ahmad tea', 'Impra', 'Curtis'],
                name: 'Брэнд',
            },
        };
    }
    private makeFilterBox(key: string, name: string, value: string[], checkedValues: string[]) {
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
                item.className = `filter-box-item filter-box-${key}-item`;
                item.innerText = element;
                if (element == 'true' || element == 'false') item.innerText = 'Только со скидкой';

                const checkbox = document.createElement('input') as HTMLInputElement;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', key);
                checkbox.setAttribute('value', element);

                if (checkedValues && checkedValues.some((checkbox) => checkbox.toLowerCase() === element.toLowerCase()))
                    checkbox.setAttribute('checked', '');

                item.prepend(checkbox);
                filterBoxList.append(item);
            });
        } else {
            console.log(`В ключе ${key} нет values`);
        }
        box.append(filterBoxName, filterBoxList);
        return box;
    }
    public render(options: TOptions) {
        const container = document.querySelector('.filter-settings') as HTMLDivElement;
        container.innerHTML = '';
        const sliderDate = new Slider(options.filterSliders.sliderDate, 'date', 'По дате').createSlider();
        const sliderPrice = new Slider(options.filterSliders.sliderPrice, 'price', 'По цене').createSlider();
        container.append(sliderDate, sliderPrice);
        if (this.filterAreaOptions) {
            for (const key in this.filterAreaOptions) {
                const keyBox = this.makeFilterBox(
                    key,
                    this.filterAreaOptions[key as keyof IfilterAreaOptions]['name'],
                    this.filterAreaOptions[key as keyof IfilterAreaOptions]['values'],
                    options.filterSetting[key]
                ) as HTMLDivElement;
                container.append(keyBox);
            }
        }
    }
}
