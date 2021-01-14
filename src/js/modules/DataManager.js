export default class {

  constructor(api) {
    this.api = api;
  }

  async fetchData(id = null) {
    try {
      let response;

      // Send request to API then wait for the response
      if (id) {
        response = await fetch(this.api + id);
      } else {
        response = await fetch(this.api);
      }

      // Convert response to json
      const data = await response.json();

      return data;

    } catch (error) {
      console.error('La connection avec le serveur n\'a pu être établie.\n' + error);
    }
  }

  async fetch(id) {
    return await this.fetchData(id);
  }

  async fetchAll() {
    return await this.fetchData();
  }


}