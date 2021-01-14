// Make price readable for users
export function formatPrice(price) {
  price = price / 100;
  return price.toFixed(2) + ' €';
}

// Get id from url parameters
export function extractIdFromUrl() {
  const id = window.location.search.split("=")[1];

  if (!id) {
    return null;
  }

  return id;
}