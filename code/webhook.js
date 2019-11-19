
const express = require('express');
const app = express();

/**\textcolor{allcomment}{// Módulo algoritmos criptográficos seguros } -*/
const crypto = require('crypto');

/**\textcolor{allcomment}{// Clave secreta obtenida de las variables del entorno } -*/
const secretKey = process.env.shopify_secret;

/**\textcolor{allcomment}{// Ruta configurada en Shopify } -*/
app.post('/webhooks/orders/create', async (req, res) => {
  const hmac = req.get('X-Shopify-Hmac-Sha256');

  /**\textcolor{allcomment}{// Crea un hash usando el cuerpo y nuestra clave } -*/
  const hash = crypto
    .createHmac('sha256', secretKey)
    .update(req.body, 'utf8', 'hex')
    .digest('base64');

  /**\textcolor{allcomment}{// Compara el hmac con nuestro propio hash } -*/
  if (hash === hmac) {
    /**\textcolor{allcomment}{// En caso de corresponder obtenemos los datos y los almacenamos } -*/
    const order = JSON.parse(req.body.toString());
    /**\textcolor{allcomment}{// Llamada a la función que almacena las ordenes en Firestore } -*/
    orderUpdate(order);
    res.sendStatus(200);
  } else {
    /**\textcolor{allcomment}{// Esta solicitud no se originó en Shopify } -*/
    res.sendStatus(403);
  }
});