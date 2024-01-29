// Message.jsx
import React from 'react';

const Message = ({ message }) => {
  return (
    <li>
      {message.template} - {message.phrases.beforeTemplate} - {message.phrases.afterTemplate}
    </li>
  );
};

export default Message;
