import DataManager from './modules/DataManager';
import CartManager from './modules/CartManager';
import { CardDetails } from './components/Card';
import defaultMarkup from './templates/defaultMarkup';
import { extractIdFromUrl, animateCartBtn } from './utils.js';

const api = new DataManager('http://localhost:3000/api/teddies/');
const cart = new CartManager();

// Get the item id from url
const itemId = extractIdFromUrl();

const itemMountPoint = document.querySelector('#item');

// Call api with the id to fetch one item
api.fetch(itemId)
  .then(item => {
    itemMountPoint.innerHTML = "";

    const pageTitle = `Peluche "${item.name}"`

    // Set the page title to the current item name
    document.title = `${pageTitle} | Orinoco`;
    document.querySelector('h1').textContent = pageTitle;

    // Create a CardDetails to display item informations and options
    const card = new CardDetails(item);

    card.injectTo(itemMountPoint);

    card.onAdd((event) => {
      const item = {
        id: event.target.dataset.id,
        name: event.target.dataset.name,
        quantity: event.target.dataset.quantity,
        price: event.target.dataset.price
      }
      cart.addItem(item);
      animateCartBtn();
    });
  })
  .catch((error) => {
    // Display an alternative message if item id is not in database
    document.querySelector('h1').textContent = "Article introuvable";
    itemMountPoint.innerHTML = defaultMarkup.notFoundItem;
  })