/**\textcolor{allcomment}{// Inicialización de Firebase.}  -*/
admin.initializeApp(adminconfig);

/**\textcolor{allcomment}{// Función que agrega permisos a un usuario.}  -*/
const adminAddClaims = (uid, claims) => (
  admin.auth().setCustomUserClaims(uid, claims)
    .then(() => {
      /**\textcolor{allcomment}{// Los nuevos Claims se propagarán al token del usuario la próxima vez que se emita uno.}  -*/
      return { data: uid };
    })
    .catch(error => error)
);

/**\textcolor{allcomment}{// Función que valida y lee los permisos del usuario.}  -*/
const verifyIdToken = token => (
  admin.auth().verifyIdToken(token)
    .then(claims => claims)
    .catch(error => error)
);

/**\textcolor{allcomment}{// Middleware de validación de usuario para todas las entradas al API.}  -*/
app.use('/api', (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(400).send({ data: 'error' });
  } else {
    verifyIdToken(token)
      .then((claims) => {
        req.claims = claims; /**\textcolor{allcomment}{// Agrega los permisos a la cadena de peticón.}  -*/
        next();
      })
      .catch((error) => {
        res.status(400).send({ data: 'error', message: error });
      });
  }
});