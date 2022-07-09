import './sort-area.sass';
export default class SortArea {
    render() {
        const sortArea = document.querySelector('.sort-area') as HTMLDivElement;
        const select = document.createElement('select') as HTMLSelectElement;
        const sortButton = document.createElement('button') as HTMLButtonElement;
        const arr = ['По дате сборки урожая', 'По цене' /*, 'По стране'*/];
        const values = ['date', 'price'];

        sortButton.className = 'sort-button';
        sortButton.innerText = 'по возрастанию';
        sortButton.setAttribute('value', 'line');
        sortButton.addEventListener('click', (e) => {
            const btn = e.target as HTMLButtonElement;
            if (btn)
                btn.innerText === 'по убыванию' ? (btn.innerText = 'по возрастанию') : (btn.innerText = 'по  убыванию');
            btn.getAttribute('value') === 'line'
                ? btn.setAttribute('value', 'reverse')
                : btn.setAttribute('value', 'line');
        });

        for (let i = 0; i < 2; i++) {
            const option = document.createElement('option') as HTMLOptionElement;
            option.setAttribute('value', values[i]);
            option.innerText = arr[i];
            select.append(option);
        }
        select.className = 'sort-select';
        sortArea.append(select, sortButton);
    }
}
