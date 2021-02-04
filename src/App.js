import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'
import React,{useEffect,useState} from "react";




function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
