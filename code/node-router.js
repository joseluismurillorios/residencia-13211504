const http = require('http');

  /**\textcolor{allcomment}{// Funciones de enrutamiento}  -*/
const routes = {
  '/': (request, response) => {
    response.writeHead(200);
    response.end('Hola, Mundo!');
  },
  '/tienda': (request, response) => {
    response.writeHead(200);
    response.end('Bienvenido a nuestra tienda en linea!');
  }
}

http.createServer((request, response) => {
  /**\textcolor{allcomment}{// Comprueba si la url coincide con una de las rutas}  -*/
  if (request.url in routes) {
    return routes[request.url](request, response);
  }
  /**\textcolor{allcomment}{// En caso de no encontrar la ruta regresa un 404}  -*/
  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
}).listen(1337);