import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageForm from '../../components/MessageForm/MessageForm'; 
import { getUser } from '../../utilities/users-service';
import { templatesData, wordsData, conjunctionsData } from '../../utilities/seed';

export default function NewMessagePage() {
  const [user, setUser] = useState(getUser());
  const history = useNavigate(); // Create a history object using useHistory

  // Define a function to create a new message
  const createMessage = async (messageData) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getUser().token}`,
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        // Redirect to a different page or update the UI as needed
        history.push('/'); // Redirect to the home page, for example
      } else {
        // Handle the error, e.g., show a notification to the user
        console.error('Failed to create message');
      }
    } catch (error) {
      console.error('Error creating message:', error);
    }
  };

  // Callback function to handle form submission
  const handleSubmit = async (formData) => {
    // Call createMessage function with form data
    await createMessage(formData);
  };

  return (
    <>
      <div className="text-white p-8">
        <h1 className="text-4xl font-bold mb-6">New Message Page</h1>
        {/* Pass the handleSubmit function to MessageForm */}
        <MessageForm 
          templatesData={templatesData} 
          wordsData={wordsData} 
          conjunctionsData={conjunctionsData} 
          onSubmit={handleSubmit} // Pass the handleSubmit function as a prop
        />
      </div>
    </>
  );
}
