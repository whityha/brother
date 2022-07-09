import { TCards } from '../../types/types';
import './card.sass';
export default class Cards {
    render(data: TCards) {
        const itemsList = document.querySelector('.card-list') as HTMLUListElement;
        data.forEach((item) => {
            const listitem = document.createElement('li') as HTMLLIElement;
            const card = document.createElement('div') as HTMLDivElement;
            const cardImage = document.createElement('div') as HTMLDivElement;
            const discount = document.createElement('p') as HTMLParagraphElement;
            const star = document.createElement('div') as HTMLDivElement;
            const image = new Image() as HTMLImageElement;
            const cardBody = document.createElement('div') as HTMLDivElement;
            const price = document.createElement('h2') as HTMLHeadingElement;
            const name = document.createElement('h3') as HTMLHeadingElement;
            const itemDescription = document.createElement('p') as HTMLParagraphElement;
            const itemLocation = document.createElement('p') as HTMLParagraphElement;
            const buttonCart = document.createElement('button') as HTMLButtonElement;

            image.src = item.image.src;
            image.alt = item.type;

            listitem.className = 'card-list-item';
            card.className = 'card';
            cardImage.className = 'card-image';
            discount.className = 'discount';
            star.className = 'star no-fill';
            cardBody.className = 'card-body';
            price.className = 'price';
            name.className = 'name';
            itemDescription.className = 'item-description';
            itemLocation.className = 'item-location';
            buttonCart.className = 'on-cart';

            buttonCart.setAttribute('type', 'button');

            if (item.discount) {
                discount.innerText = `Скидка ${item.discount_value}%`;
                cardImage.append(discount);
            }
            price.innerText = `$${item.price}`;
            name.innerText = `${item.brand}`;
            itemDescription.innerHTML = `
                <span data-type=${item.type}>${item.type}</span>
                <span data-box=${item.box}>${item.box}</span>
                <p data-color = ${item.color}>${item.color}</p>
            `;
            itemLocation.innerHTML = `
                <span data-country=${item.country}>${item.country}</span>
                 <span data-date=${item.date}>${item.date}</span>
            `;
            buttonCart.innerText = 'В корзину';

            card.className = 'card';
            card.setAttribute('data-price', `${item.price}`);
            card.setAttribute('data-brand', `${item.brand}`);
            card.setAttribute('data-type', `${item.type}`);
            cardImage.append(star, image);
            cardBody.append(price, name, itemDescription, itemLocation, buttonCart);
            card.append(cardImage, cardBody);
            listitem.append(card);
            if (itemsList) itemsList.append(listitem);
            else throw new Error('Не обнаружен контейнер для рендера краточек');
        });
    }
}
