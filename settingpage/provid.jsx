import { SettingsProvider } from './context/SettingContext';

export default function App() {
  return (
    <SettingsProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </SettingsProvider>
  );
}