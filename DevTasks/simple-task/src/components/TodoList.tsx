import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }else{
      alert('Please enter a task');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-dark-bg min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p-4 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">To-Do List</h2>
        <div className="flex flex-col items-center mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="border border-gray-700 bg-gray-800 text-white p-2 mb-4 w-full rounded-md"
            placeholder="Add a new task"
          />
          <button 
            onClick={addTodo} 
            className="bg-primary w-full py-2 rounded-md text-lg font-semibold transition duration-300 hover:bg-primary-hover">
            Add Task
          </button>
        </div>
        <ul className="mt-4 space-y-2 w-full">
          {todos.map((todo, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center bg-gray-800 p-4 rounded-md">
              <span>{todo}</span>
              <button 
                onClick={() => removeTodo(index)} 
                className="bg-red-600 p-2 rounded-md text-white transition duration-300 hover:bg-red-500">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
