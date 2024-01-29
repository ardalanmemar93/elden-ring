import React, { useState, useEffect } from 'react';
import Message from '../../components/Message/Message'; 

export default function MessageHistoryPage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error(`Failed to fetch messages: ${response.status} ${response.statusText}`);
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
    <div className='text-white p-8'>
      <h1 className="text-4xl font-bold mb-6">Message History Page</h1>
      {error ? (
        <p>Error fetching messages: {error}</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
        </ul>
      )}
    </div>
  );
}
