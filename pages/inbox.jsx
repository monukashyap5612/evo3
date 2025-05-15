
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, updateUrgency, updateCompleted } from '../redux/todoSlice';

export default function Inbox() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.data);
  const loading = useSelector(state => state.todos.loading);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (todos.length > 0) {
        const random = todos[Math.floor(Math.random() * todos.length)];
        const type = Math.random() > 0.5 ? 'urgency' : 'completed';
        if (type === 'urgency') {
          dispatch(updateUrgency({ id: random.id, urgency: Math.random() > 0.5 ? 'high' : 'low' }));
        } else {
          dispatch(updateCompleted({ id: random.id }));
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [todos]);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>Inbox</h2>
      {todos.map(todo => (
        <div key={todo.id} style={{ border: "1px solid gray", margin: "10px" }}>
          <p>{todo.todo}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          <p>Urgency: {todo.urgency || 'low'}</p>
        </div>
      ))}
    </div>
  );
}
import { useSettings } from '../context/SettingsContext';


const { layout, todoLimit } = useSettings();
const limitedTodos = todos.slice(0, todoLimit);
{limitedTodos.map(todo => (
    <div key={todo.id} style={{
      border: "1px solid gray",
      margin: "10px",
      display: layout === "cards" ? "block" : "flex"
    }}>
      <p>{todo.todo}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p>Urgency: {todo.urgency || 'low'}</p>
    </div>
  ))}