import DataManager from './modules/DataManager';
import CartManager from './modules/CartManager';
import { CardPreview } from './components/Card';
import { animateCartBtn } from './utils.js';

// Create connection with API
const api = new DataManager('http://localhost:3000/api/teddies');
const cart = new CartManager();

// Call fetchAll method from DataManager to get all the items available in the store
api.fetchAll()
  .then(items => {
    const home = document.querySelector('#home');
    home.innerHTML = '';

    items.forEach(item => {
      // Create a CardPreview object for each items
      const card = new CardPreview(item);

      // Inject it into the DOM
      card.injectTo(home);

      // Listen click event on add button
      card.onAdd((event) => {
        const item = {
          id: event.target.dataset.id,
          name: event.target.dataset.name,
          quantity: parseInt(event.target.dataset.quantity),
          price: parseInt(event.target.dataset.price)
        }
        cart.addItem(item);
        animateCartBtn()
      })
    })
  });

