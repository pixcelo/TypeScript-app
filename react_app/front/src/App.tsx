import React, { useState } from 'react';
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

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
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
          <li key={todo.id}>
            <input 
            type="text"
            onChange={(e) => handleEdit(todo.id, e.target.value)}
            className="inputText" 
            value={todo.inputValue}
            disabled={todo.checked}
            />
            <input 
              type="checkbox"
              onChange={(e) => handleChecked(todo.id, todo.checked)}
            />
            <button onClick={() => {handleDelete(todo.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
