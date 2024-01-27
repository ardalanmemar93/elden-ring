import React, { useState } from 'react';

const MessageForm = ({ templatesData, wordsData, conjunctionsData }) => {
  // State and functions for the form
  const [formData, setFormData] = useState({
    template: '',
    words: [],
    conjunctions: '',
    additionalTemplate: '',  
    additionalWords: [],    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the selected option is a category, update the formData[name] accordingly
    if (wordsData[value]) {
      setFormData((prevData) => ({ ...prevData, [name]: [value] }));
    } else {
      // If the selected option is an actual word, update the formData[name] array
      setFormData((prevData) => ({ ...prevData, [name]: [...prevData[name], value] }));
    }
  };
  

  const handleAdditionalWordsChange = (e) => {
    const { options } = e.target;
    const selectedWords = [];
  
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value;
  
      // Check if the selected option is a category or an actual word
      if (wordsData[optionValue]) {
        // If it's a category, add all words from that category
        selectedWords.push(...wordsData[optionValue].map((word) => word.name));
      } else {
        // If it's an actual word, add the word to the selectedWords array
        selectedWords.push(optionValue);
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
    {Object.keys(wordsData).map((category) => (
      <optgroup key={category} label={category}>
        {wordsData[category].map((wordOption, wordIndex) => (
          <option key={`${wordOption.name}-${wordIndex}`} value={wordOption.name}>
            {wordOption.name}
          </option>
        ))}
      </optgroup>
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
        <label htmlFor="additionalTemplate">Template(2):</label>
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

      {/* Words Input */}
      <div>
        <label htmlFor="words">Words:</label>
        <select
          id="words"
          name="words"
          multiple
          value={formData.words}
          onChange={handleAdditionalWordsChange} 
        >
          {Object.keys(wordsData).map((category, index) => (
            <option key={`${category}-${index}`} value={category}>
              {category}
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
