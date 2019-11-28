import * as firebase from 'firebase';
import Cookies from 'js-cookie'; /**\textcolor{allcomment}{// Módulo para el manejo de cookies. }  -*/

const auth = firebase.auth(); /**\textcolor{allcomment}{// Inicializa Firebase Authentication. }  -*/

/**\textcolor{allcomment}{// Agrega una cookie con el token de usuario.}  -*/
const setAppCookie = () => (
  auth.currentUser.getIdToken().then((token) => {
    Cookies.set('token', token, { ... });
  })
);

/**\textcolor{allcomment}{// Remueve la cookie en logout}  -*/
const unsetAppCookie = () => Cookies.remove('token', { ... });

/**\textcolor{allcomment}{// Detecta cambios en el usuario de Firebase Auth}  -*/
const onAuthChange = () => (
  dispatch => auth.onAuthStateChanged((user) => {
    if (user) { /**\textcolor{allcomment}{// Si el usuario esta autenticado.}  -*/
      setAppCookie(); /**\textcolor{allcomment}{// Se inicializan las conexiones}  -*/
      initFirestoreConnections(dispatch);
      socketIO = initSocketIO(user.uid, dispatch);
      dispatch(userLogged(user.user)); /**\textcolor{allcomment}{// Guarda el usuario en el estado}  -*/
    } else { /**\textcolor{allcomment}{// Si el usuario no esta autenticado}  -*/
      unsetAppCookie(); /**\textcolor{allcomment}{// Cerramos las conexiones}  -*/
      closeSocketIO();
      socketIO = null;
      dispatch(userLogged()); /**\textcolor{allcomment}{// Elimina el usuario del estado}  -*/
    }
  })
);
/**\textcolor{allcomment}{// Inicio de sesion con correo y contraseña.}  -*/
const login = (mail, pass) => auth.signInWithEmailAndPassword(mail, pass);

/**\textcolor{allcomment}{// Salida de sesion.}  -*/
const logout = () => auth.signOut();
