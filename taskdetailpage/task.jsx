
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

export default function Task() {
  const { id } = useParams();
  const task = useSelector(state => state.todos.data.find(t => t.id === Number(id)));
  const [notes, setNotes] = useState('');
  const [logs, setLogs] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  
  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setSeconds(prev => prev + 1), 1000);
      addLog('Started timer');
    }
  };

  
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      addLog('Stopped timer');
    }
  };

  const addLog = msg => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>Task Details</h2>
      <p><strong>{task.todo}</strong></p>
      <p>Status: {task.completed ? 'Done' : 'Pending'}</p>
      <p>Urgency: {task.urgency || 'low'}</p>

      <div style={{ marginTop: '20px' }}>
        <h3>Timer</h3>
        <p>{seconds} sec</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>

      <div>
        <h3>Notes</h3>
        <textarea rows="4" cols="40" value={notes} onChange={e => setNotes(e.target.value)} />
      </div>

      <div>
        <h3>Action Logs</h3>
        {logs.map((log, idx) => <p key={idx}>{log}</p>)}
      </div>
    </div>
  );
}