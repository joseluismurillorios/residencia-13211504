/**\textcolor{allcomment}{// Inicialización de Firebase.}  -*/
admin.initializeApp(adminconfig);

/**\textcolor{allcomment}{// Inicializacion de Firebase Firestore.}  -*/
const db = admin.firestore();

/**\textcolor{allcomment}{// Referencia a la colección de productos.}  -*/
const productsRef = db.collection('products');

/**\textcolor{allcomment}{// Función que guarda productos en al base de datos.}  -*/
const productsUpdate = (products) => {
  /**\textcolor{allcomment}{// Generar escritura por lotes.}  -*/
  const batch = db.batch();
  products.map((product) => {
    const productRef = productsRef.doc(product.id.toString());
    /**\textcolor{allcomment}{// Agregar la funcion set() a la pila de transacciones.}  -*/
    batch.set(productRef, product, { merge: true });
  });
  /**\textcolor{allcomment}{// Ejecutar lote de transacciones.}  -*/
  return batch.commit()
    .then(() => {
      console.log('Productos actualizados');
    })
    .catch((error) => {
      console.error('Error', error);
    });
};