/**\textcolor{allcomment}{// Carga el módulo http}  -*/
const http = require('http');
http.createServer((request, response) => {
 /**\textcolor{allcomment}{// Indica que todo está bien (código 200), y los datos están en texto plano}  -*/
 response.writeHead(200, {
 'Content-Type': 'text/plain'
 });
 /**\textcolor{allcomment}{// Escribe el texto anunciado en el cuerpo de la página.}  -*/
 response.write('Hola, Mundo!');
 /**\textcolor{allcomment}{// Indiqua al servidor que se han enviado el encabezado y el cuerpo.}  -*/
 response.end();
}).listen(1337);/**\textcolor{allcomment}{ // Dice al servidor en qué puerto debe escuchar}  -*/