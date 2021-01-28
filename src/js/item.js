import DataManager from './modules/DataManager';
import CartManager from './modules/CartManager';
import { CardDetails } from './components/Card';
import defaultMarkup from './templates/defaultMarkup';
import { extractIdFromUrl, animateCartBtn } from './utils.js';

const api = new DataManager('http://localhost:3000/api/teddies/');
const cart = new CartManager();

const itemId = extractIdFromUrl();

const itemMountPoint = document.querySelector('#item');

api.fetch(itemId)
  .then(item => {
    itemMountPoint.innerHTML = "";

    const pageTitle = `Peluche "${item.name}"`

    document.title = `${pageTitle} | Orinoco`;
    document.querySelector('h1').textContent = pageTitle;

    const card = new CardDetails(item);

    card.injectTo(itemMountPoint);

    card.onAdd((event) => {
      const item = {
        id: event.target.dataset.id,
        name: event.target.dataset.name,
        quantity: parseInt(event.target.dataset.quantity),
        price: parseInt(event.target.dataset.price)
      }
      cart.addItem(item);
      animateCartBtn();
    });
  })
  .catch((error) => {
    document.querySelector('h1').textContent = "Article introuvable";
    itemMountPoint.innerHTML = defaultMarkup.notFoundItem;
  })