import CartManager from '../modules/CartManager';
import { formatPrice } from '../utils.js';

export default class {

  constructor(data) {
    this.template = null;
    this.data = data;
  }

  // Process click on "clear-cart" button
  onCartClear(cb) {
    const cartClearBtn = this.template.querySelector('#clear-cart');

    cartClearBtn.addEventListener('click', cb);
  }


  onCartConfirmation(cb) {
    const confirmCartBtn = this.template.querySelector('#confirm-cart');

    confirmCartBtn.addEventListener('click', cb);
  }

  injectTo(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template);
  }

  // Re-calculate cart prices when user changes items quantities 
  updatePrice() {
    const quantity = this.template.getElementsByClassName('quantity');

    for (let qty of quantity) {
      qty.addEventListener('change', (event) => {
        const itemId = event.target.dataset.id;
        const unitPrice = parseInt(document.getElementById(`price-${itemId}`).dataset.price);
        const total = document.getElementById(`total-${itemId}`)
        const store = new CartManager();

        // Update displayed prices
        total.textContent = formatPrice(unitPrice * event.target.value);
        total.dataset.total = parseInt(unitPrice * event.target.value)
        this.setTotal();

        // Save changes on cart
        store.updateItem(itemId, parseInt(event.target.value));
      });
    }

  }

  remove() {
    const removeBtn = this.template.getElementsByClassName('remove');

    for (let remove of removeBtn) {
      remove.addEventListener('click', (event) => {
        const store = new CartManager();

        // Remove item from cart
        store.removeItem(remove.dataset.id);

        // Reload the page to display updated cart
        window.location.reload();
      })
    }

  }

  setTotal() {
    const totalPerItem = document.getElementsByClassName('total-per-item');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    for (let item of totalPerItem) {
      total += parseInt(item.dataset.total)
    }

    cartTotal.textContent = formatPrice(total)
  }

  toHTML() {
    const container = document.createElement("div");
    const table = document.createElement('table');
    table.classList.add('w-full');

    table.innerHTML = `
      <thead>
        <tr class="border-b text-lg">
          <th class="text-left pb-2">Désignation</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Sous-total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      ${this.data.items.map(item => {
      // Create a table row for each item in cart
      return `
          <tr class="border-b">
            <td class="py-2">
              <a href="item.html?id=${item.id}">
                <span class="inline-block w-full uppercase font-semibold">Peluche "${item.name}"</span>
                <span class="inline-block text-sm">Ref: ${item.id}</span>
              </a>
            </td>
            <td id="price-${item.id}" data-price="${item.price}" class="text-center py-2">
              ${formatPrice(item.price)}
            </td>
            <td class="text-center py-2">
              <input type="number" min="1" data-id="${item.id}" value="${item.quantity}"
              class="quantity inline-block w-16 py-2 px-1 rounded-md border text-center"
              />
            </td>
            <td id="total-${item.id}" data-total="${item.price * item.quantity}" class="total-per-item text-center py-2">${formatPrice(item.price * item.quantity)}</td>
            <td class="px-4">
              <button title="Supprimer l'article du panier" data-id="${item.id}" class="remove text-lg text-red-400">&#10006;</button>
            </td>
          </tr>
        `}).join('')
      }
      </tbody>
      <tfoot>
        <tr class="font-bold">
          <td>
            <button id="clear-cart" class="border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white">
              Vider mon panier
                </button>
          </td>
          <td></td>
          <td class="py-4 text-center uppercase">Total T.T.C:</td>
          <td class="py-4 text-center">
            <div id="cart-total" class="text-2xl">
              ${formatPrice(this.data.total)}
            </div>
          </td>
        </tr>
      </tfoot>
    `;

    const cta = document.createElement('div');
    cta.classList.add('mt-16', 'text-right');

    cta.innerHTML = `
      <button id="confirm-cart" class="inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white">
        Valider le panier
      </button>
    `

    container.appendChild(table)
    container.appendChild(cta)

    this.template = container;

    // Attach events listeners
    this.updatePrice();
    this.remove();
  }

}