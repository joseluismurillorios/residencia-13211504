const express = require('express');

/**\textcolor{allcomment}{// Utilidad para rutas de archivos y directorios}  -*/
const path = require('path');

/**\textcolor{allcomment}{// Módulos para analisís de solicitudes entrantes}  -*/
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/**\textcolor{allcomment}{// Inicialización y configuraciones}  -*/
const app = express();
const http = require('http').Server(app);
app.set('PORT', process.env.PORT || 3000);  /**\textcolor{allcomment}{// Puerto del servidor}  -*/
require('pug'); /**\textcolor{allcomment}{//Sistema de plantillas Pug}  -*/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/**\textcolor{allcomment}{// Middlewares}  -*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/webhooks', (req, res, next) => {...});
app.use('/api', (req, res, next) => {...});

/**\textcolor{allcomment}{// Enrutamiento}  -*/
app.get('/', (req, res) => { res.render('index'); });
app.post('/api/user-create', (req, res) => {...});
app.post('/api/user-update', (req, res) => {...});
app.post('/api/order-create', (req, res) => {...});
app.post('/api/order-update', (req, res) => {...});

/**\textcolor{allcomment}{// Ruta para webhook shopify}  -*/
app.post('/webhooks/orders/create', async (req, res) => {...});

app.use(express.static('www')); /**\textcolor{allcomment}{// Carpeta publica de archivos estáticos}  -*/

http.listen(app.get('PORT'), (error) => {...});
