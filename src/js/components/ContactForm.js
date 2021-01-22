export default class ContactForm {
  constructor() {
    this.template = null;
    this.data = {};
  }

  injectTo(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template);
  }

  validate() {
    const lastName = document.querySelector('#lastname').value || null
    const firstName = document.querySelector('#firstname').value || null
    const address = document.querySelector('#address').value || null
    const city = document.querySelector('#city').value || null
    const email = document.querySelector('#email').value || null

    if (lastName, firstName, address, city, email) {
      this.data = {
        lastName,
        firstName,
        address,
        city,
        email
      }

      return true;
    }

    return false;
  }

  onSubmit(cb) {
    const form = this.template.querySelector('#contact');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.validate()) {
        cb(this.data);
      } else {
        console.error('Une erreur est survenue!')
      }
    });
  }

  toHTML() {
    const form = document.createElement('div');
    form.classList.add('mt-16', 'max-w-screen-sm', 'mx-auto');

    form.innerHTML = `
      <h2 class="text-center text-2xl">Informations de livraison</h2>
      <form id="contact" class="mt-8">
        <div class="px-4 py-2 bg-yellow-200 text-sm text-yellow-900 rounded-md">
          <span class="mr-2">&#128712;</span>Les champs précédés d'un
          <strong>*</strong> sont requis.
        </div>
        <div class="flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8">
          <div class="flex-1">
            <label for="lastname" class="inline-block w-full text-sm">*Nom:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
          <div class="flex-1">
            <label for="firstname" class="inline-block w-full text-sm"
              >*Prénom:</label
            >
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for="address" class="inline-block w-full text-sm">*Adresse:</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>
        <div class="mt-4">
          <label for="address-complement" class="inline-block w-full text-sm"
            >Complèment d'adresse:</label
          >
          <input
            type="text"
            name="address-complement"
            id="address-complement"
            class="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-8 mt-4">
          <div class="flex-1">
            <label for="zip" class="inline-block w-full text-sm"
              >Code postal:</label
            >
            <input
              type="text"
              name="zip"
              id="zip"
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
          <div class="flex-1">
            <label for="city" class="inline-block w-full text-sm">*Ville:</label>
            <input
              type="text"
              name="city"
              id="city"
              required
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for="email" class="inline-block w-full text-sm"
            >Adresse mail:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>
        <div class="mt-4">
          <label for="email-confirm" class="inline-block w-full text-sm"
            >Confirmer l'adresse mail:</label
          >
          <input
            type="email"
            name="email-confirm"
            id="email-confirm"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>
        <div class="mt-8 text-right">
          <button
            type="submit"
            class="inline-block bg-blue-200 px-4 py-2 text-blue-900 rounded-md text-lg font-semibold hover:bg-blue-300"
          >
          Commander
          </button>
        </div>
      </form>
    `;

    this.template = form;
  }

  getData() {
    return this.data
  }
}