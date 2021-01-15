import { formatPrice } from '../utils.js';

export default class {

  constructor(data) {
    this.template = null;
    this.data = data;
  }

  onCartClear(cb) {
    const cartClearBtn = this.template.querySelector('#clear-cart');

    cartClearBtn.addEventListener('click', cb);
  }

  injectTo(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template);
  }

  toHTML() {
    const table = document.createElement('table');
    table.classList.add('w-full');

    table.innerHTML = `
      <thead>
        <tr class="border-b text-lg">
          <th class="text-left pb-2">Désignation</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Sous-total</th>
        </tr>
      </thead>
      <tbody>
      ${this.data.items.map(item => {
      return `
          <tr>
            <td class="py-2">
              <a href="item.html?id=${item.id}">
                <span class="inline-block w-full uppercase font-semibold">Peluche "${item.name}"</span>
                <span class="inline-block text-sm">Ref: ${item.id}</span>
              </a>
            </td>
            <td class="text-center py-2">
              ${formatPrice(item.price)}
            </td>
            <td class="text-center py-2">
              <input id="count-change" type="number" min="1" data-id="${item.id}" value="${item.quantity}"
                class="inline-block w-16 py-2 px-1 rounded-md border text-center"
              />
            </td>
            <td class="text-center py-2">${formatPrice(item.price * item.quantity)}</td>
          </tr>
        `}).join('')
      }
      </tbody>
  <tfoot>
    <tr class="border-t font-bold">
      <td>
        <button id="clear-cart" class="border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white">
          Vider mon panier
            </button>
      </td>
      <td></td>
      <td class="py-4 text-center uppercase">Total T.T.C:</td>
      <td class="py-4 text-center">
        <div class="text-2xl">
          ${formatPrice(this.data.total)}
        </div>
      </td>
    </tr>
  </tfoot>
`;

    this.template = table;
  }

}