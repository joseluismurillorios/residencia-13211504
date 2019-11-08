/**\textcolor{allcomment}{Funciones} -*/

/**\textcolor{allcomment}{// ES5} -*/
var cuadrado = function cuadrado(num) {
  return num * num;
};

/**\textcolor{allcomment}{// ES6} -*/
const cuadrado = num => num * num;


/**\textcolor{allcomment}{Acceder a los valores de un objeto} -*/

var obj1 = { a: 1, b: 2 };

/**\textcolor{allcomment}{// ES5} -*/
var a = obj1.a;
var b = obj1.b;

/**\textcolor{allcomment}{// ES6} -*/
var { a, b } = obj1;