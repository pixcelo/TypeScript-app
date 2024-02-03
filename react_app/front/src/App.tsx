import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // hooks
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 型を宣言
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // 入力を受け取る
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div className="App">  
      <div>Todo List</div>
      <form onSubmit={() => {}}>
        <input 
          type="text"
          onChange={(event) => handleChange(event)}
          className="inputText" 
        />
        <input type="submit" value="add" className='submitButton' />
      </form>
    </div>
  );
}

export default App;
