
import { useSettings } from '../context/SettingsContext';

export default function Settings() {
  const { theme, setTheme, layout, setLayout, todoLimit, setTodoLimit } = useSettings();

  return (
    <div>
      <h2>Preferences</h2>

      <label>
        Theme:
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <br />

      <label>
        Layout:
        <select value={layout} onChange={e => setLayout(e.target.value)}>
          <option value="list">List</option>
          <option value="cards">Cards</option>
        </select>
      </label>

      <br />

      <label>
        Number of Todos:
        <input
          type="number"
          value={todoLimit}
          min={1}
          onChange={e => setTodoLimit(Number(e.target.value))}
        />
      </label>
    </div>
  );
}