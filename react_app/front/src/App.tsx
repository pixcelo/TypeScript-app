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
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 新しいTodoを作成
     const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
     }

     setTodos([newTodo, ...todos]);
     setInputValue("");
  }

  return (
    <div className="App">  
      <div>Todo List</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text"
          onChange={(e) => handleChange(e)}
          className="inputText" 
        />
        <input type="submit" value="add" className='submitButton' />
      </form>
    </div>
  );
}

export default App;
