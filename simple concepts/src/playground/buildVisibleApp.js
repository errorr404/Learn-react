const showDetails = ()=>{
  i++;
  show();
};


var i =0;
const appRoot = document.getElementById('app');

const show = ()=>{
  const templet = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{(i%2===1)? 'Hide details':'Show details'}</button>
      <p hidden={i%2===0}>Hey,These are some details you can now see!</p>
    </div>

  );


  ReactDOM.render(templet,appRoot);
}

show();
