import { formatPrice } from '../utils.js';

// Base class for CardPreview
class Card {

  constructor(obj) {
    this.template = null;
    this.content = obj
  }

  inject(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template)
  }

}


export class CardPreview extends Card {

  constructor(obj) {
    super(obj);
  }

  toHTML() {
    // Create HTML element to contain markup
    this.template = document.createElement('div');

    this.template.innerHTML = `
      <h2 class="ml-2 mb-2 text-xl font-semibold">Peluche "${this.content.name}"</h2>
      <div class="image-responsive rounded-xl overflow-hidden">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="${this.content.imageUrl}"
          alt="${this.content.name}"
        />
      </div>
      <div class="flex mt-6">
        <span class="inline-flex flex-1 items-center justify-center bg-white rounded-md text-xl sm:text-2xl font-semibold">
          ${formatPrice(this.content.price)}
      </span>
        <a href="item.html?id=${this.content._id}" class="inline-block ml-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Détails</a>
        <button class="inline-block bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md hover:bg-blue-300">
          Ajouter
        </button>
      </div>
    `;
  }

}