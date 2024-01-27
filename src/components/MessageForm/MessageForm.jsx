import React, { useState } from 'react';
import { wordsData } from '../../utilities/seed'; 

const MessageForm = ({ templatesData }) => {
  const [formData, setFormData] = useState({
    template: '',
    words: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWordsChange = (e) => {
    const { options } = e.target;
    const selectedWords = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData((prevData) => ({ ...prevData, words: selectedWords }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the message using form data
    const message = `${formData.template} ${formData.words.join(' ')}`;

    // Now you can do something with the created message, like sending it to a server, etc.
    console.log('Created Message:', message);

    // Clear the form after submission
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      template: '',
      words: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Template Input */}
      <div>
        <label htmlFor="template">Template:</label>
        <select
          id="template"
          name="template"
          value={formData.template}
          onChange={handleChange}
        >
          <option value="">Select Template</option>
          {templatesData.map((templateOption) => (
            <option key={templateOption.name} value={templateOption.name}>
              {templateOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Words Input */}
      <div>
        <label htmlFor="words">Words:</label>
        <select
          id="words"
          name="words"
          multiple
          value={formData.words}
          onChange={handleWordsChange}
        >
          {/* Dynamically generate options based on your words data */}
          {wordsData.map((wordOption) => (
            <option key={wordOption.name} value={wordOption.name}>
              {wordOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit">Create Message</button>
    </form>
  );
};

export default MessageForm;
