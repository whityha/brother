import { IfilterAreaOptions } from '../../types/interfaces';

export default class FilterArea {
    private makeFilterBox(key: string, name: string, value: string[]) {
        const box = document.createElement('div');
        const filterBoxList = document.createElement('ul');
        const filterBoxName = document.createElement('p');
        box.className = 'filter-box';
        filterBoxName.className = 'filter-box-name';
        filterBoxName.innerText = name;
        if (value.length) {
            value.forEach((element) => {
                const item = document.createElement('li');
                const checkbox = document.createElement('input') as HTMLInputElement;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', key);
                item.className = `filter-box-item filter-box-${key}-item`;
                item.innerText = element;
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
