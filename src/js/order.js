import DataManager from './modules/DataManager';
import CartManager from './modules/CartManager';
import Table from './components/Table';
import ContactForm from './components/ContactForm';
import defaultMarkup from './templates/defaultMarkup';

const cart = new CartManager();

const cartMountPoint = document.getElementById('order');

if (cart.getCount() > 0) {
  const summary = new Table(cart.getData());

  summary.injectTo(cartMountPoint);

  summary.onCartConfirmation((event) => {
    const form = new ContactForm();
    form.injectTo(cartMountPoint);
    event.target.remove();

    form.onSubmit((data) => {
      const order = {
        contact: data,
        products: cart.getItems()
      };

      const api = new DataManager('http://localhost:3000/api/teddies/order/');

      api.send(order)
        .then(data => {
          cartMountPoint.innerHTML = defaultMarkup.orderSuccess(data.orderId)
          cart.clear();
        });
    })

  })

  summary.onCartClear(() => {
    cart.clear();
    cartMountPoint.innerHTML = defaultMarkup.emptyCart;
  })

} else {
  cartMountPoint.innerHTML = defaultMarkup.emptyCart;
}