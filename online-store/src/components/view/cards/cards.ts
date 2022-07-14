import { TCards } from '../../types/types';
import './card.sass';
export default class Cards {
    render(data: TCards, cartItems: string[]) {
        const itemsList = document.querySelector('.card-list') as HTMLUListElement;
        data.forEach((item) => {
            //создаем элементы, которые содержаться внутри списка карточек
            const listitem = document.createElement('li') as HTMLLIElement;
            const card = document.createElement('div') as HTMLDivElement;

            const makeImageBox = () => {
                const box = document.createElement('div') as HTMLDivElement;
                const discount = document.createElement('p') as HTMLParagraphElement;
                const star = document.createElement('div') as HTMLDivElement;
                const image = new Image() as HTMLImageElement;

                image.src = item.image.src;
                image.alt = item.type;

                box.className = 'card-image';
                discount.className = 'discount';
                star.className = 'star no-fill';

                //если есть скидка, добавляем блок со скидкой
                if (item.discount) {
                    discount.innerText = `Скидка ${item.discount_value}%`;
                    box.append(discount);
                }
                box.append(star, image);
                return box;
            };

            const makeCardBody = () => {
                const cardBody = document.createElement('div') as HTMLDivElement;
                const price = document.createElement('h2') as HTMLHeadingElement;
                const name = document.createElement('h3') as HTMLHeadingElement;
                const itemDescription = document.createElement('p') as HTMLParagraphElement;
                const itemLocation = document.createElement('p') as HTMLParagraphElement;

                cardBody.className = 'card-body';
                price.className = 'price';
                name.className = 'name';
                itemDescription.className = 'item-description';
                itemLocation.className = 'item-location';

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

                const makeButtonCart = () => {
                    const buttonCart = document.createElement('button') as HTMLButtonElement;
                    buttonCart.className = 'on-cart';
                    buttonCart.setAttribute('type', 'button');
                    buttonCart.setAttribute('data-id', `${item.id}`);
                    buttonCart.innerText = 'В корзину';
                    if (cartItems.some((id) => id === item.id.toString())) {
                        buttonCart.innerText = 'Добавлено!';
                        buttonCart.classList.add('added');
                    }
                    buttonCart.addEventListener('click', (e) => {
                        if (e.target) {
                            const btnCart = e.target as HTMLDivElement;
                            if (!btnCart.classList.contains('added')) {
                                console.log('Card has been added in cart');
                            }
                        }
                    });
                    return buttonCart;
                };
                const btnCart = makeButtonCart();
                cardBody.append(price, name, itemDescription, itemLocation, btnCart);
                return cardBody;
            };

            listitem.className = 'card-list-item';
            card.className = 'card';
            card.setAttribute('data-price', `${item.price}`);
            card.setAttribute('data-brand', `${item.brand}`);
            card.setAttribute('data-type', `${item.type}`);

            const cardImage = makeImageBox();
            const cardBody = makeCardBody();

            card.append(cardImage, cardBody);
            listitem.append(card);
            if (itemsList) itemsList.append(listitem);
            else throw new Error('Не обнаружен контейнер для рендера краточек');
        });
    }
}
