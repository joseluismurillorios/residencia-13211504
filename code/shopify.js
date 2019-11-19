/**\textcolor{allcomment}{// Enlaces oficiales del API de Shopify para Node.js. } -*/
const Shopify = require('shopify-api-node');

/**\textcolor{allcomment}{// Iniciar conexión con Shopify. } -*/
const shopify = new Shopify({
  shopName: 'rosesland',
  apiKey: '<clave api>',
  password: '<palabra secreta>',
});

const getProducts = () => (
  /**\textcolor{allcomment}{// Función de lectura de productos de Shopify. } -*/
  shopify.product.list()
    .then((products) => {
      /**\textcolor{allcomment}{// Funcioón que guarda productos en Firestore. } -*/
      productsUpdate(products);
    })
    .catch(err => console.error(err))
);