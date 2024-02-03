import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">  
      <div>Todo List</div>
      <form onSubmit={() => {}}>
        <input type="text" onChange={() => {}} className="inputText" />
        <input type="submit" value="add" className='submitButton' />
      </form>
    </div>
  );
}

export default App;
