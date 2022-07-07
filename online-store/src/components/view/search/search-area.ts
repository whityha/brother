import './search-area.sass';
//asd
export default class SearchArea {
    render() {
        const searchArea = document.querySelector('.search-area') as HTMLDivElement;
        const input = document.createElement('input') as HTMLInputElement;
        input.setAttribute('placeholder', 'Найдите свой любимый чай');
        input.setAttribute('type', 'text');
        input.className = 'search-input';
        searchArea.append(input);
    }
}
