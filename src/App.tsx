import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string

  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Olle Nilsson",
      url: "",
      age: 28,
      note: "best guest"
    }
  ]);

  
  //Skickar peopleState som props, och setPeople för att kunna använda den i AddToList
  return (
    <div className="App">
     <h1>People invited to my Party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
