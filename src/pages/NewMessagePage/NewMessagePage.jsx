import React, { useState } from 'react';
import MessageForm from '../../components/MessageForm/MessageForm'; 
import NavBar from '../../components/NavBar/NavBar'; 
import { getUser } from '../../utilities/users-service';
import { templatesData, enemiesData } from '../../utilities/data';

export default function NewMessagePage() {
  const [user, setUser] = useState(getUser());

  console.log('templatesData:', templatesData);
  console.log('enemiesData:', enemiesData);

  return (
    <>
      <div className="text-white p-8">
        <h1 className="text-4xl font-bold mb-6">New Message Page</h1>
        <MessageForm templatesData={templatesData} enemiesData={enemiesData} />
      </div>
    </>
  );
}
