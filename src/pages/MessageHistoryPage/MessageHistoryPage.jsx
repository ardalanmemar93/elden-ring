// MessageHistoryPage.jsx
import React, { useState, useEffect } from 'react';
import Message from '../../components/Message/Message'; 
import { formattedMessage } from '../NewMessagePage/NewMessagePage';

export default function MessageHistoryPage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Messages</h1>
      {error ? (
        <p>Error fetching messages: {error}</p>
      ) : (
        <ul>
          {messages.map((message) => {
            return <Message key={message._id} message={formattedMessage(message)} />;
          })}
        </ul>
      )}
    </div>
  );
}
