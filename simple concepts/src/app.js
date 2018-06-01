/*
// JSX - JavaScript XML

const templet = (
  <div>
    <h1>Indecision_app</h1>
    <p>this is a cool app</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);  // htis is the JSX syntex <>something...</>, direct using this gives error so we have to use babel compiler

// var tamplet = React.createElement(
//   "h1",
//   {id:app},
//   "hiii there, this is Dixit bishwas and i m going to make this app"
// );  // this is the babel code for that tamplet

// Create a templateTwo var JSX expressio
//div
//h1-> Dixit Bishwas
// p -> Age: 26
// p-> Loaction:Bhopal
// Render templateTwo instead of template

const templateTwo = (
    <div>
      <h1>Dixit Bishwas</h1>
      <p>Age: 26</p>
      <p>Location: Bhopal</p>
    </div>
);
// create app object title/subtitle
// use title/subtitle in the templateTwo
// render template


// only render the subtitle(and p tag) if subtitle exist - logical and operator
// render new p tag  - if options.length> "Here are your options" "no options"

const app = {
title: 'Indecision App',
subtitle: 'Put your life in the hands of a computer',
options: ['One','Two']
};

const userReturn = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? 'Here are your options':'No options'}</p>
  </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(userReturn,appRoot);  // here it takes the (element which we want to show, and the place we want to show)
*/
  let count = 0;
  const addOne = ()=>{
    count+=1;
    //document.getElementById('show').textContent = `count: ${count}`;
    renderCounterApp();
  };
  const minusOne = ()=>{
    count-=1;
      //document.getElementById('show').textContent = `count: ${count}`;
      renderCounterApp();
  };
  const reset = ()=>{
    count=0;
    //  document.getElementById('show').textContent = `count: ${count}`;
    renderCounterApp();
  };



  // chalange
  // make button "-1" setup minusOne button and register -log"minusOne"
  // make reset button "reset" - setup reset function -log"reset"

  const appRoot = document.getElementById('app');

  const renderCounterApp = ()=>{
    const templet =(
      <div>
        <h1 id="show">count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    );

      ReactDOM.render(templet,appRoot);
  };

  renderCounterApp();
