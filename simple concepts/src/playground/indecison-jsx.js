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
/*
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

  */
  const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
  };

  const onFormSubmit = (e)=>{
   //console.log('form-submitted');
   const option = e.target.elements.option.value;
   // console.log(option);

   if(option) {
     app.options.push(option);
    e.target.elements.option.value =" ";
     renderFunction();
   }

   e.preventDefault();
  };

  const removeAll = ()=>{
  app.options.length =0;
  renderFunction();
  };

  const onMakeDecision = ()=>{
    const randnomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randnomNum];
    alert(option);
  };
const number = [10,20,30];


  const appRoot = document.getElementById('app');


  // create a render function
  // call it rignt away
  // call it after options array needed //



    const renderFunction = ()=>{
    const templet = (
      <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{(app.options.length > 0) ? 'Here are your options':'No options'}</p>
          {/* <p>{app.options.length}</p> */}
          <button disabled={app.options.length===0}onClick={onMakeDecision}>What should I do ?</button>
          <button onClick={removeAll}>Remove All</button>
          {
            // number.map((num)=>{
            //   return <p key="num">Number:{num}</p>;
            // })
          }
          <ol>
          {
            app.options.map((option)=>{
              return <li key={option}>{option}</li>;
            })
          }

        </ol>
        <form onSubmit={onFormSubmit} >
          <input type="text" placeholder="enter text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );

      ReactDOM.render(templet,appRoot);
  };
  renderFunction();

  // create remove all button above list
  // on click -> wipe the array -> rerender
