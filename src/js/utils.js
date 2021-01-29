// Make price readable for users
export function formatPrice(price) {
  price = price / 100;

  return price.toFixed(2) + ' €';
}


// Get id from url parameters
export function extractIdFromUrl() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  if (!id) {
    return null;
  }

  return id;
}

// Animate cart button when an item has been added
export function animateCartBtn() {
  const cartBtn = document.querySelector('#cart-btn');

  // Add the animation
  cartBtn.classList.add('animate');

  // Remove the animation when completed
  cartBtn.addEventListener('animationend', (event) => {
    event.target.classList.remove('animate')
  })
}