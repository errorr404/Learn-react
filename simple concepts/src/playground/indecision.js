// create a parent componment which held all the react Component
import React from 'react';
export default class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
    this.state= {
    options: []
    };
  }
  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
// hadlePick - pass down to Action and setup onClick - bind Here
// rendomly pick an option and alert it
handlePick(){
  const len = this.state.options.length;
  const rand = Math.floor(Math.random()*len);
  alert(this.state.options[rand]);
}

handleAddOption(option){
  if(!option){
    return 'Enter valid value to add item';
  }
  else if(this.state.options.indexOf(option)> -1){
    return 'This option Already exist'
  }
  this.setState((prevState)=>{
    return {
    options: prevState.options.concat(option)  // concat in the prev aarray
    };
  });
}
  render(){
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length >0}
          handlePick={this.handlePick}
         />
        <Options options ={this.state.options}
         handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddComponent
          handleAddOption={this.handleAddOption}
        />
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
        <button
          onClick={this.props.handlePick}
          disabled = {! this.props.hasOptions}>
          What should I do?</button>
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
  // here we use the constructor to use the bind method bcz of this keyword.

  // handleRemoveAll(){
  //   console.log(this.props.options);
  //   alert('handleRemoveAll');
  // }

  render(){
    return (
          <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  constructor(props){
    super(props);
    this.handleAddOption =this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {

    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // trim leading and trilling spaces
     const error = this.props.handleAddOption(option);
    //console.log(option);
    this.setState(()=>{
      return {
        error: error
        // error
      };
    });
  }
  render(){ 
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} >
          <input type="text" placeholder="enter text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
