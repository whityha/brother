import './search-area.sass';
//asd
export default class SearchArea {
    private events(input: HTMLInputElement, closeBtn: HTMLButtonElement) {
        input.addEventListener('input', (/*e todo rename*/) => {
            if (input.value.length && !closeBtn.classList.contains('close')) closeBtn.classList.add('close');
            else if (!input.value.length) closeBtn.classList.remove('close');
        });
        closeBtn.addEventListener('click', () => {
            input.value = '';
            closeBtn.classList.remove('close');
            input.focus();
        });
    }

    render() {
        const searchArea = document.querySelector('.search-area') as HTMLDivElement;
        const input = document.createElement('input') as HTMLInputElement;
        const closeBtn = document.createElement('button') as HTMLButtonElement;

        input.setAttribute('placeholder', 'Найдите свой любимый чай');
        input.setAttribute('type', 'text');
        input.setAttribute('autofocus', 'true');

        input.className = 'search-input';
        closeBtn.className = 'search-icon';

        this.events(input, closeBtn);

        searchArea.append(closeBtn, input);
    }
}
