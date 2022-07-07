import './sort-area.sass';
export default class SortArea {
    render() {
        const sortArea = document.querySelector('.sort-area') as HTMLDivElement;
        const select = document.createElement('select') as HTMLSelectElement;
        const arr = ['По дате сборки урожая', 'По цене', 'По стране'];
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option') as HTMLOptionElement;
            option.innerText = arr[i];
            select.append(option);
        }
        select.className = 'sort-select';
        sortArea.append(select);
    }
}
