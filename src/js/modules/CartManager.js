export default class {

  constructor() {
    this.items = [];
    this.total = 0;
    this.init();
  }

  init() {
    // Check if a cart has been saved then load it
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      this.items = cart.items;
      this.total = cart.total;
    }
  }

  addItem(newItem) {
    let duplicate = false;

    // Check if item reference is in cart to update quantity
    this.items.map(item => {
      if (item.id === newItem.id) {
        item.quantity += newItem.quantity;
        duplicate = true;
      }
    });

    if (!duplicate) {
      this.items.push(newItem);
    }

    // Recalculate cart total
    this.setTotal();

    // Save the cart in localStorage
    this.save();
  }

  setTotal() {
    this.total = this.items.reduce((total, current) => {
      return total + (current.quantity * current.price);
    }, 0)
  }

  save() {
    const cartInformations = {
      items: this.items,
      total: this.total
    }

    localStorage.setItem('cart', JSON.stringify(cartInformations));
  }

  clear() {
    // Empty the cart
    this.items = [];
    // Reset total
    this.total = 0;

    // Remove saved
    localStorage.clear()
  }

  getCount() {
    return this.items.length;
  }

  getData() {
    const cartData = {
      items: this.items,
      total: this.total
    };

    return cartData;
  }

}