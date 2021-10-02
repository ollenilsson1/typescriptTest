import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';

//Eftersom det kommer vara samma state på alla sidor, export för mindre kod
export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string

  }[]
}

function App() {
  // Använd interface IState och lägg in en hårdkodad
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Olle Nilsson",
      url: "",
      age: 28,
      note: "best guest"
    }
  ]);

  
  //Skickar people och setPeople som props för att kunna använda dom i List och AddToList
  return (
    <div className="App">
     <h1>People invited to the Party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
