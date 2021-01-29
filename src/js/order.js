import DataManager from './modules/DataManager';
import CartManager from './modules/CartManager';
import Table from './components/Table';
import ContactForm from './components/ContactForm';
import defaultMarkup from './templates/defaultMarkup';
import { formatPrice } from './utils.js';

const cart = new CartManager();

const cartMountPoint = document.getElementById('order');

// Check if cart contains items
if (cart.getCount() > 0) {
  // Create a table with cart content
  const summary = new Table(cart.getData());

  summary.injectTo(cartMountPoint);

  // Process cart confirmation
  summary.onCartConfirmation((event) => {
    // Create a contact form
    const form = new ContactForm();
    form.injectTo(cartMountPoint);
    event.target.remove();

    // Process form submission
    form.onSubmit((data) => {
      // Prepare data to be send to the api
      const order = {
        contact: data,
        products: cart.getItems()
      };

      // Create a connection to the api
      const api = new DataManager('http://localhost:3000/api/teddies/order/');

      // Send data then display a message to confirm order validation
      api.send(order)
        .then(data => {
          cartMountPoint.innerHTML = defaultMarkup.orderSuccess(data.orderId, formatPrice(cart.getTotal()))
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