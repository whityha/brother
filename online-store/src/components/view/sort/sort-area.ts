import './sort-area.sass';
export default class SortArea {
    render() {
        const sortArea = document.querySelector('.sort-area') as HTMLDivElement;
        const select = document.createElement('select') as HTMLSelectElement;
        const arr = ['По дате сборки урожая', 'По цене' /*, 'По стране'*/];
        const values = ['date', 'price'];
        for (let i = 0; i < 2; i++) {
            const option = document.createElement('option') as HTMLOptionElement;
            option.setAttribute('value', values[i]);
            option.innerText = arr[i];
            select.append(option);
        }
        select.className = 'sort-select';
        sortArea.append(select);
    }
}
