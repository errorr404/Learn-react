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
  handlePick(){
    alert('Handle Pick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}
// challange
// Option -> Option Component here
// AddOption -> AddOption component here.

// add remove all button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire
class Options extends React.Component {
  handleRemoveAll(){
    alert('handleRemoveAll');
  }
  render(){
    return (
          <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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


// 1 .setup the form with input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value,then start
class AddComponent extends React.Component {
  handleAddOption(e) {

    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // trim leading and trilling spaces

    //console.log(option);
    if(option)
    {
      alert(option);
    }

  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption} >
          <input type="text" placeholder="enter text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
