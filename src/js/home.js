import DataManager from './modules/DataManager';
import { CardPreview } from './components/Card';

// Create connection with API
const api = new DataManager('http://localhost:3000/api/teddies');

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
      card.onAdd((e) => {
        console.log(e.target)
      })
    })
  });

