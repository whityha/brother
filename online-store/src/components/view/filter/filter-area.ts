import { IfilterAreaOptions } from '../../types/interfaces';
import './filter.sass';
export default class FilterArea {
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
                if (typeof element === 'string') item.innerText = element;
                else if (typeof element === 'boolean') item.innerText = 'Только со скидкой';
                item.prepend(checkbox);
                filterBoxList.append(item);
            });
        } else {
            console.log(`В ключе ${key} нет values`);
        }
        box.append(filterBoxName, filterBoxList);
        return box;
    }
    public render(options: IfilterAreaOptions) {
        const container = document.querySelector('.filter-area') as HTMLDivElement;
        if (options) {
            for (const key in options) {
                const keyBox = this.makeFilterBox(
                    key,
                    options[key as keyof IfilterAreaOptions]['pick'],
                    options[key as keyof IfilterAreaOptions]['values']
                ) as HTMLDivElement;
                container.append(keyBox);
            }
        }
    }
}
