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
    // Call fetchData with parameter => return 1 item
    return await this.fetchData(id);
  }

  async fetchAll() {
    // Call fetchData without parameter => return all items
    return await this.fetchData();
  }

  async send(order) {
    const request = await fetch(this.api, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    const response = request.json();

    return response;
  }


}