'use strict';

let user;

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return `${this.calculateItemPrice()}`;
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  add(name, price, count = 1) {
    this.items.push({name, price, count: count || 1});
    this.increaseCount(1);
  },
  increaseCount(num) {
    return (this.count += num);
  },
  calculateItemPrice() {
    const sum = this.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
    );
    return sum - (sum * this.discount / 100);
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

while (user !== null) {
  user = prompt(`Что вы хотите сделать?
1.Получить общую стоимость корзины
2.Добавить товар
3.Очистить корзину
4.Распечатать корзину
5.Добавить промокод`);

  if (user === '1') {
    console.log(cart.totalPrice);
  }

  if (user === '2') {
    const name = prompt('Введите название товара');
    const price = +prompt('Введите цену товара');
    const count = +prompt('Введите количества товара товара');
    if (Number.isNaN(price) || Number.isNaN(count) || price <= 0 || count < 0) {
      console.log('Введите корректные значения!');
      continue;
    }

    cart.add(name, price, count);
  }

  if (user === '3') {
    console.log('Корзина очищена');
    cart.clear();
  }

  if (user === '4') {
    cart.print();
  }

  if (user === '5') {
    const discount = prompt('Введите промокод');

    if (discount === 'METHED') {
      cart.setDiscount = discount;
    }

    if (discount === 'NEWYEAR') {
      cart.setDiscount = discount;
    }
  }
}
