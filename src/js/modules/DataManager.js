export default class {

  constructor(api) {
    this.api = api;
  }

  async fetch(id) {
    try {
      // Send request to API then wait for the response
      const response = await fetch(this.api + id);
      // Convert response to json
      const data = await response.json();

      return data;

    } catch (error) {
      console.error('La connection avec le serveur n\'a pu être établie.\n' + error);
    }
  }

  async fetchAll() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('La connection avec le serveur n\'a pu être établie.\n' + error);
    }
  }


}