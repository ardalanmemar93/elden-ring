import React, { useState } from 'react';

const MessageForm = ({ templatesData, wordsData, conjunctionsData }) => {
  // State and functions for the form
  const [formData, setFormData] = useState({
    template: '',
    words: [],
    conjunctions: '',
    additionalTemplate: '',  // New state for additional template
    additionalWords: [],    // New state for additional words
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdditionalWordsChange = (e) => {
    const { options } = e.target;
    const selectedWords = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedWords.push(options[i].value);
      }
    }
    setFormData((prevData) => ({ ...prevData, additionalWords: selectedWords }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log('Form Data:', formData);
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
          onChange={handleChange}
        >
          {wordsData.map((wordOption, index) => (
            <option key={`${wordOption.name}-${index}`} value={wordOption.name}>
              {wordOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Conjunctions Input */}
      <div>
        <label htmlFor="conjunctions">Conjunctions:</label>
        <select
          id="conjunctions"
          name="conjunctions"
          value={formData.conjunctions}
          onChange={handleChange}
        >
          <option value="">Select Conjunction</option>
          {conjunctionsData.map((conjunctionOption) => (
            <option key={conjunctionOption.name} value={conjunctionOption.name}>
              {conjunctionOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Templates Input */}
      <div>
        <label htmlFor="additionalTemplate">Additional Template:</label>
        <select
          id="additionalTemplate"
          name="additionalTemplate"
          value={formData.additionalTemplate}
          onChange={handleChange}
        >
          <option value="">Select Additional Template</option>
          {templatesData.map((templateOption) => (
            <option key={templateOption.name} value={templateOption.name}>
              {templateOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Words Input */}
      <div>
        <label htmlFor="additionalWords">Additional Words:</label>
        <select
          id="additionalWords"
          name="additionalWords"
          multiple
          value={formData.additionalWords}
          onChange={handleAdditionalWordsChange}
        >
          {wordsData.map((wordOption, index) => (
            <option key={`${wordOption.name}-${index}`} value={wordOption.name}>
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
