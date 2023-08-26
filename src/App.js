
import './App.css';
import Card from './Card';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fad } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



library.add(fas)


function App() {
  return (
    <div className="App">
    <div style={{ display:"flex",justifyContent:"space-evenly",border:" 5 px solid rgb(28, 151, 233)",borderBlockColor:"blue"}}>
    <Card type="FREE"price="0" user="Single users" icon="fa-solid fa-check" />
    <Card type="PLUS" price="9"user="5 users" icon="fa-solid fa-check"/>
    <Card type="PRO" price="49"user="Unlimited users" icon="fa-solid fa-check" />
    </div>
    </div>
  );
}

export default App;
