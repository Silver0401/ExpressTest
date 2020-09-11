import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {

  const [list,changeList] = useState("fetching users")

  const [counter, changeCounter] = useState(0)

  useEffect(() => {

    axios.get("/users").then((request) => {
      changeList(request.data)
      // console.log(list) 
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => changeCounter(number => number + 1)}>click me</button>
        <p id="paragraph">
          {list[counter].name}
        </p>
      </header>
    </div>
  );
}

export default App;
