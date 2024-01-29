// Message.jsx
import React from 'react';

const Message = ({ message }) => {
  const { template, words, conjunctions, additionalTemplate, additionalWords } = message;

  return (
    <li className="bg-green-950 p-4 mb-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-green-800">
      <p className="text-lg font-bold text-white">
        {`${template.replace(/\*\*\*\*/g, words)} ${conjunctions} ${additionalTemplate.replace(/\*\*\*\*/g, additionalWords)}`}
      </p>
    </li>
  );
};

export default Message;
