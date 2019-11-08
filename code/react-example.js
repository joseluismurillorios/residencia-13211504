class Header extends React.Component {
  render() {
    return (
      <header className="navigation">
        {this.props.name}
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        Hola Mundo
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Mi App" />
        <Content />
      </div>
    );
  }
}