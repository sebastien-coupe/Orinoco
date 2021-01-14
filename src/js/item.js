import DataManager from './modules/DataManager';
import { CardDetails } from './components/Card';
import { extractIdFromUrl } from './utils.js';

const api = new DataManager('http://localhost:3000/api/teddies/')

const itemId = extractIdFromUrl();

const itemMountPoint = document.querySelector('#item');

if (!itemId) {
  itemMountPoint.innerHTML = `
    <div class="text-center">
      <h2 class="text-xl">L'article demandé n'existe pas.</h2>
      <p class="mt-6">
        <a class="underline text-blue-600 hover:text-blue-800" href="index.html">Retourner à la page d'accueil.</a>
      </p>
    </div>
  `;
} else {
  api.fetch(itemId)
    .then(item => {
      itemMountPoint.innerHTML = "";

      const pageTitle = `Peluche "${item.name}"`

      document.title = `${pageTitle} | Orinoco`;
      document.querySelector('h1').textContent = pageTitle;

      const card = new CardDetails(item);

      card.injectTo(itemMountPoint);
    });
}