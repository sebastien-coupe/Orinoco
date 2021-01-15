export default {
  emptyCart: `
    <div class="text-center">
    <p>Votre panier est vide.</p>
    <div class="mt-12 text-center">
      <a href="index.html"
        class="inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white">
        Découvrir nos articles
      </a>
    </div>
  `,

  notFoundItem: `
    <div class="text-center">
      <h2 class="text-xl">L'article demandé n'existe pas.</h2>
      <p class="mt-6">
        <a class="underline text-blue-600 hover:text-blue-800" href="index.html">Retourner à la page d'accueil.</a>
      </p>
    </div>
  `
}