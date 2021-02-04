export default class ContactForm {
  constructor() {
    this.template = null;
    this.data = {};
    this.errors = [];
  }

  injectTo(mountPoint) {
    // Create markup then inject it into selected element (mountPoint) in the DOM
    this.toHTML();
    mountPoint.appendChild(this.template);
  }

  validate() {
    this.errors = [];

    // Get information from form, assign null if empty
    const lastName = document.querySelector('#lastname').value || null
    const firstName = document.querySelector('#firstname').value || null
    const address = document.querySelector('#address').value || null
    const addressComplement = document.querySelector('#address-complement').value || null
    const zip = document.querySelector('#zip').value || null
    const city = document.querySelector('#city').value || null
    const email = document.querySelector('#email').value || null
    const emailConfirmation = document.querySelector('#email-confirm').value || null;

    const regex = /[a-zA-Z]/g

    // check name
    if (!lastName.match(regex)) {
      this.errors.push('Le nom doit être une chaîne de caractères.');
    }

    if (!firstName.match(regex)) {
      this.errors.push('Le prénom doit être une chaîne de caractères.');
    }

    if (!city.match(regex)) {
      this.errors.push('La ville doit être une chaîne de caractères.');
    }

    // Check email
    if (email !== emailConfirmation) {
      this.errors.push('Les adresses email ne correspondent pas')
    }

    if (zip.length !== 5) {
      this.errors.push('Le code postal n\'est pas valide')
    }


    if (lastName, firstName, address, addressComplement, zip, city, email, emailConfirmation) {
      this.data = {
        lastName,
        firstName,
        address,
        addressComplement,
        zip,
        city,
        email,
        emailConfirmation
      }
    }

    // Display error message to the user if form validation fail then cancel validation
    if (this.errors.length) {
      this.showErrors();
      return false;
    }

    // Confirm validation
    return true;
  }

  onSubmit(cb) {
    const form = this.template.querySelector('#contact');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.validate()) {
        const data = {
          lastName: this.data.lastName,
          firstName: this.data.firstName,
          address: this.data.address,
          city: this.data.city,
          email: this.data.email
        }
        // Process event from view
        cb(data);
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
          <strong>*</strong> sont obligatoires.
        </div>
        <div id="errors"></div>
        <div class="flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8">
          <div class="flex-1">
            <label for="lastname" class="inline-block w-full text-sm">*Nom:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value="${this.data.lastName ?? ''}"
              maxlength="255"
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
              value="${this.data.firstName ?? ''}"
              maxlength="255"
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
            value="${this.data.address ?? ''}"
            maxlength="255"
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
            value="${this.data.addressComplement ?? ''}"
            maxlength="255"
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
              value="${this.data.zip ?? ''}"
              maxlength="5"
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
          <div class="flex-1">
            <label for="city" class="inline-block w-full text-sm">*Ville:</label>
            <input
              type="text"
              name="city"
              id="city"
              value="${this.data.city ?? ''}"
              maxlength="255"
              required
              class="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for="email" class="inline-block w-full text-sm"
            >*Adresse mail:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            value="${this.data.email ?? ''}"
            maxlength="255"
            required
            class="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>
        <div class="mt-4">
          <label for="email-confirm" class="inline-block w-full text-sm"
            >*Confirmer l'adresse mail:</label
          >
          <input
            type="email"
            name="email-confirm"
            id="email-confirm"
            value="${this.data.emailConfirmation ?? ''}"
            maxlength="255"
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

  showErrors() {
    const placeHolder = this.template.querySelector('#errors');

    placeHolder.innerHTML = "";

    const errorList = document.createElement('div');
    errorList.classList.add('px-4', 'py-2', 'mt-4', 'bg-red-200', 'text-sm', 'text-red-900', 'rounded-md')

    errorList.innerHTML = `
      <p><span class="mr-2">&#9888;</span>Veuillez corriger les erreurs suivantes:</p>
      <ul class="list-disc ml-6">
      ${this.errors.map(error => {
      return `<li class="mt-2">${error}</li>`;
    }).join('')}
      </ul>
    `;

    placeHolder.appendChild(errorList);
  }

}