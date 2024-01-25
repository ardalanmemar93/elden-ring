import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewMessagePage from '../NewMessagePage/NewMessagePage';
import MessageHistoryPage from '../MessageHistoryPage/MessageHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

// App.jsx

return (
  <div>
    <nav>
      <NavBar user={user} setUser={setUser} />
    </nav>
    <main>
      {user ? (
        <Routes>
          <Route path="/messages/new" element={<NewMessagePage />} />
          <Route path="/messages" element={<MessageHistoryPage />} />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  </div>
);

}
