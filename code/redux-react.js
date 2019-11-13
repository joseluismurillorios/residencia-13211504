import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**\textcolor{allcomment}{// La interfaz común para todos los componentes de enrutamiento} -*/
import { Router } from 'react-router-dom';
/**\textcolor{allcomment}{// Módulo para generar urls basadas en hash} -*/
import { createHashHistory } from 'history';
/**\textcolor{allcomment}{// Store de la aplicación} -*/
import store from './core/redux/store';
/**\textcolor{allcomment}{// Componentes de enrutamiento e interfaz general} -*/
import Layout from './core/layout';
import Routes from './core/routes';
/**\textcolor{allcomment}{// Crear historia} -*/
const history = createHashHistory();
/**\textcolor{allcomment}{// Rederizar app} -*/
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('Root'), /**\textcolor{allcomment}{// Elemento del DOM} -*/
);