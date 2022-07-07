import { TCards } from '../../types/types';

export default class Cards {
    render(data: TCards) {
        const itemsList = document.querySelector('.card-list') as HTMLUListElement;
        data.forEach((item) => {
            const listitem = document.createElement('li') as HTMLLIElement;
            const card = document.createElement('div') as HTMLDivElement;
            card.innerHTML = `
                <h2 class="card-price">PRICE: ${item.price}</h2>
                <h3 class="card-name">Name: ${item.name}</h3>
                <h3 class="card-type">Type: ${item.type}</h3>
                <h3 class="card-type">Date: ${item.date}</h3>
            `;
            card.className = 'card';
            card.setAttribute('data-price', `${item.price}`);
            card.setAttribute('data-name', `${item.name}`);
            card.setAttribute('data-type', `${item.type}`);
            listitem.append(card);
            if (itemsList) itemsList.append(listitem);
            else throw new Error('Не обнаружен контейнер для рендера краточек');
        });
    }
}
