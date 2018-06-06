class Counter extends React.Component {

  constructor(props){
    super(props);
    this.handleAddOne =this.handleAddOne.bind(this);
    this.handleMinusOne =this.handleMinusOne.bind(this);
    this.handleReset =this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    // console.log('Handleaddone working');
    // change the state
    // this.state.count = this.state.count+1; // we are not going to do this
    // do it by set state
    this.setState((prevState)=>{
        return {
          count: prevState.count + 1
        };
    });
  }

  handleMinusOne() {
    // console.log('handleMinusOne')
    this.setState((prevState)=>{
        return {
          count: prevState.count - 1
        };
    });
  }

  handleReset() {
    // console.log('handleReset')
    this.setState(()=>{
        return {
          count: 0
        };
    });
  }

  render() {
    return (
      <div>
         <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

// create three method:handleAddOne,handleMinusOne, handleReset
// use console.log to print method name
// wire up onClick & bind in the constructor


ReactDOM.render(<Counter />,document.getElementById('app'));
