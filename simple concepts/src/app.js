// create a parent componment which held all the react Component
class IndecisionApp extends React.Component {
  render(){
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['Thing one','Thing two','Thing third'];
    return(
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options ={options}/>
        <AddComponent />
      </div>
    );
  }
}
// Create a react Component
// Here first create the react component
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
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

class Options extends React.Component {
  render(){
    return (



          <div>
            {
              // this.props.options.map((option)=><p key={option}>{option}</p>)
              this.props.options.map((option)=> <Option key={option} optionText={option} />)
            }
          </div>


    );
  }
}

// Option -> Option component Here

class Option extends React.Component {
  render(){
    return(

        <div>
        {this.props.optionText}
        </div>


    );
  }
}
class AddComponent extends React.Component {
  render(){
    return (
      <div>
        Add Component here.
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
