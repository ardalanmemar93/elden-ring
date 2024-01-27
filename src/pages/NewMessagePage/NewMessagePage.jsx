import React, { useState } from 'react';
import MessageForm from '../../components/MessageForm/MessageForm'; 
import { getUser } from '../../utilities/users-service';
import { templatesData, wordsData } from '../../utilities/seed';

export default function NewMessagePage() {
  const [user, setUser] = useState(getUser());

  console.log('templatesData:', templatesData);
  console.log('wordsData:', wordsData);

  return (
    <>
      <div className="text-white p-8">
        <h1 className="text-4xl font-bold mb-6">New Message Page</h1>
        <MessageForm templatesData={templatesData} wordsData={wordsData} />
      </div>
    </>
  );
}
