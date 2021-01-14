import { formatPrice } from '../utils.js';

// Base class for CardPreview
class Card {

  constructor(obj) {
    this.template = null;
    this.content = obj
  }

  injectTo(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template)
  }

}


export class CardPreview extends Card {

  constructor(obj) {
    // Call parent class constructor
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


export class CardDetails extends Card {

  constructor(obj) {
    super(obj);
  }

  toHTML() {
    this.template = document.createElement('div');
    this.template.classList.add("md:flex", "md:gap-12");

    this.template.innerHTML = `
      <div class="relative rounded-xl overflow-hidden md:w-2/4">
        <img class="w-full h-full object-cover"
          src="${this.content.imageUrl}"
          alt="${this.content.name}"
        />
      </div>
      <div class="flex flex-col md:w-2/4">
        <div>
          <p class="mt-4 md:mt-0">
            <strong>Description:</strong> ${this.content.description}
          </p>
        </div>
        <div class="mt-8 flex justify-between items-center">
          <label class="text-sm font-semibold" for="color">Couleur:</label>
          <div id="selector" class="relative w-1/2">
            <select
              id="selector"
              class="block w-full p-2 appearance-none bg-transparent border-b"
              name="color"
            >
              ${this.content.colors.map(color => `<option name="${color}">${color}</option>`)}
            </select>
          </div>
        </div>
        <div class="flex justify-between items-center mt-6">
          <label for="quantity" class="text-sm font-semibold">Quantité:</label>
          <input type="number" min="1" value="1" id="quantity" class="inline-block w-1/4 p-2 bg-transparent border-b text-center"/>
        </div>
        <div class="flex gap-4 justify-between mt-16 lg:mt-auto">
          <span class="inline-flex flex-1 items-center justify-center bg-white rounded-md text-xl text-2xl font-semibold">
            ${formatPrice(this.content.price)}
          </span>
          <button class="inline-block bg-blue-200 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-300">
            Ajouter
          </button>
        </div>
      </div>
    `
  }

}