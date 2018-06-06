// VisibilityToggle -render,constructor,hndleToggleVisibilitu
//Visibility ->false


class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state ={
          visibility: false
    };
  }
  handleToggleVisibility() {
  this.setState((prevState)=>{
return{
visibility: !prevState.visibility
};
});

  }
      render() {
        return (
          <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility? 'Hide details':'Show details'}</button>
             {this.state.visibility &&(
               <p>Hey,These are some details you can see !</p>
             )}
          </div>
        );
      }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// const showDetails = ()=>{
//   i++;
//   show();
// };
//
//
// var i =0;
// const appRoot = document.getElementById('app');
//
// const show = ()=>{
//   const templet = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>{(i%2===1)? 'Hide details':'Show details'}</button>
//       <p hidden={i%2===0}>Hey,These are some details you can now see!</p>
//     </div>
//
//   );
//
//
//   ReactDOM.render(templet,appRoot);
// }
//
// show();
