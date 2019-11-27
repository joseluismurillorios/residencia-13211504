import React from 'react';
/**\textcolor{allcomment}{// Módulo de conexión } -*/
import { connect } from 'react-redux';
/**\textcolor{allcomment}{// Acciones Redux } -*/
import { loginUser } from '../../../redux/actions/common/async';

const Home = ({ user, login }) => (
  <div>
    <button onClick={login}>{user ? user.name : 'Login'}</button>
  </div>
);

/**\textcolor{allcomment}{// Conecta las partes del estado que se van a utilizar } -*/
const mapStateToProps = (state) => ({
  user: state.common.user,
});

/**\textcolor{allcomment}{// Inyecta los metodos necesarios para actualizar el estado } -*/
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(loginUser())
  },
});

/**\textcolor{allcomment}{// Vincula el componente con el estado } -*/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
