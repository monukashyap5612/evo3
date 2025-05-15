import { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [layout, setLayout] = useState('list');
  const [todoLimit, setTodoLimit] = useState(10);

  return (
    <SettingsContext.Provider value={{ theme, setTheme, layout, setLayout, todoLimit, setTodoLimit }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);