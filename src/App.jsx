
import './App.css'
import Tudo from './todu';

function App() {

  const time = 40;

  return (
    <>
      <h1>vite React</h1>
      <Tudo task="larne react" isDane={false}></Tudo >
      <Tudo task="Riverse Js" isDane={true} ></Tudo >
      <Tudo task="Take a shower" isDane={true} ></Tudo >

      {/* <Person />
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Deloper name="Mozumdar" tech="js"></Deloper>
      <Deloper name="rajuda" tech="python"></Deloper>
      <Deloper name="shabana" tech="java"></Deloper>
      <Player name="Tanim" Runs="5000" ></Player>
      <Salami event="roja Eid" Amount="20" ></Salami>
      <Salami event="Graduation"></Salami> */}



    </>

  )
}


function Salami({ event, Amount = 0 }) {

  return (
    <>
      <div className='person'>
        <p> Salami for: {event} </p>
        <p> Amount: {Amount} </p>

      </div>

    </>
  )
}








function Player({ name, Runs }) {

  return (
    <>
      <div className='person'>
        <p> name: {name} </p>
        <p> Runs: {Runs} </p>

      </div>

    </>
  )
}



function Person() {

  const age = 24;
  const name = "masud";
  const id = 23;
  const personStyle = {
    color: 'blue',
    textAlign: 'left'
  }
  return (
    <>
      <div className='person'>
        <p style={personStyle}>I am a person {id} {name}</p>

      </div>

    </>
  )
}


function Sports() {

  return (
    <>
      <h1>cricket</h1>


    </>
  )
}


function Deloper(props) {
  console.log(props);
  return (
    <>
      <div style={{
        border: '2px solid green',
        borderRadius: '20px',
      }}>
        <h3>Deloper: {props.name} </h3>
        <p> techlogy: {props.tech} </p>
      </div>


    </>
  )
}

export default App
