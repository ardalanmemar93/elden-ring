// Message.jsx
import React from 'react';

const Message = ({ message }) => {
  const { template, words, conjunctions, additionalTemplate, additionalWords } = message;

  return (
    <li>
      {`${template.replace(/\*\*\*\*/g, words)} ${conjunctions} ${additionalTemplate.replace(/\*\*\*\*/g, additionalWords)}`}
    </li>
  );
};

export default Message;
