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

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-6xl mx-auto p-4">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/orders/new" element={<NewMessagePage />} />
              <Route path="/orders" element={<MessageHistoryPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
