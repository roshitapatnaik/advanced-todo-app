import React, { useState } from 'react';
import './TodoList.css'; // We'll add CSS later

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    setCompletedTasks(updatedTasks.filter(task => task.completed).length);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <p>Total tasks: {tasks.length}, Completed tasks: {completedTasks}</p>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className="task-input"
      />
      <button onClick={addTask} className="add-task-btn">Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(index)} 
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
