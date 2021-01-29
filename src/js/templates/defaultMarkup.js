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
  `,

  orderSuccess(id, price) {
    return `
      <div class="max-w-lg mx-auto p-8 text-green-800 bg-green-100 rounded-md border border-green-200">
        <h2 class="text-xl text-center">Votre commande a été validée</h2>
        <p class="mt-6">Orinoco vous remercie pour votre achat.</p>
        <p class="mt-4">
          La commande ref:<br> <strong>${id}</strong>,<br>d'un montant de:<br><strong>${price}</strong><br>est en cours de
          traitement et sera expédiée dans les meilleurs délais.
        </p>
        <p class="mt-6 text-right">A bientôt sur Orinoco.</p>
      </div>
    `;
  }
}