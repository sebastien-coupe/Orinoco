import CartManager from './modules/CartManager';
import Table from './components/Table';
import defaultMarkup from './templates/defaultMarkup';

const cart = new CartManager();

const cartMountPoint = document.getElementById('order');

if (cart.getCount() > 0) {
  const summary = new Table(cart.getData());

  summary.injectTo(cartMountPoint);

  summary.onCartClear(() => {
    cart.clear();
    cartMountPoint.innerHTML = defaultMarkup.emptyCart;
  })

} else {
  cartMountPoint.innerHTML = defaultMarkup.emptyCart;
}