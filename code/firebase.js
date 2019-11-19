/**\textcolor{allcomment}{// Módulo permite el acceso a los servicios de Firebase.}  -*/
const admin = require('firebase-admin');

/**\textcolor{allcomment}{// Información de la cuenta de servicio almacenado en las variables del entorno.}  -*/
const serviceAccount = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.replace(/\\n/g, '\n'),
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
};

const adminconfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rosesland.firebaseio.com',
};

/**\textcolor{allcomment}{// Inicialización de Firebase.}  -*/
admin.initializeApp(adminconfig);
