import { TOptions } from '../../types/types';
import './sort-area.sass';
export default class SortArea {
    render(options: TOptions) {
        const makeButton = (setting: string): HTMLButtonElement => {
            const sortButton = document.createElement('button') as HTMLButtonElement;
            sortButton.className = 'sort-button';
            sortButton.setAttribute('value', options.sortSettings.direction);
            if (setting === 'line') sortButton.innerText = 'по возрастанию';
            else if (setting === 'reverse') sortButton.innerText = 'по убыванию';
            sortButton.addEventListener('click', (e) => {
                const btn = e.target as HTMLButtonElement;
                if (btn)
                    btn.innerText === 'по убыванию'
                        ? (btn.innerText = 'по возрастанию')
                        : (btn.innerText = 'по убыванию');
                btn.getAttribute('value') === 'line'
                    ? btn.setAttribute('value', 'reverse')
                    : btn.setAttribute('value', 'line');
            });
            return sortButton;
        };
        const makeSelect = (setting: string): HTMLSelectElement => {
            const select = document.createElement('select') as HTMLSelectElement;
            const arr = ['По дате сборки урожая', 'По цене' /*, 'По стране'*/];
            const values = ['date', 'price'];

            for (let i = 0; i < 2; i++) {
                const option = document.createElement('option') as HTMLOptionElement;
                if (values[i] === setting) option.setAttribute('selected', '');
                option.setAttribute('value', values[i]);
                option.innerText = arr[i];
                select.append(option);
            }
            select.className = 'sort-select';
            return select;
        };

        const sortArea = document.querySelector('.sort-area') as HTMLDivElement;
        const button = makeButton(options.sortSettings.direction);
        const select = makeSelect(options.sortSettings.type);
        sortArea.append(select, button);
    }
}
