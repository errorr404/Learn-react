// Create a react Component
// Here first create the react component
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}
// challange
// Option -> Option Component here
// AddOption -> AddOption component here.

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>Option Component here</p>
      </div>
    );
  }
}
class AddComponent extends React.Component {
  render(){
    return (
      <div>
        <p>Add Component here</p>
      </div>
    );
  }
}

const jsx =(
  <div>
    <Header />
    <Action />
    <Option />
    <AddComponent />
  </div>
);

ReactDOM.render(jsx,document.getElementById('app'));
