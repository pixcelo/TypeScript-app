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
  };

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
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

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
      <ul>
        {todos.map(todo => (
          // <li key={todo.id}>{todo.inputValue}</li>
          <input 
            type="text"
            onChange={(e) => handleEdit(todo.id, e.target.value)}
            className="inputText" 
            value={todo.inputValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
