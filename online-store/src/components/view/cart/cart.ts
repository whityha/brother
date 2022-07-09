import './cart.sass';
export default class Cart {
    private count = 0;
    constructor() {
        this.count = 0;
    }

    changeCount(a: number) {
        this.count = a;
    }

    render() {
        const cart_count = document.createElement('div');
        const cart = document.querySelector('.cart') as HTMLDivElement;

        cart_count.className = 'cart-count';

        cart_count.innerText = `${this.count}`;

        cart.append(cart_count);
    }
}
