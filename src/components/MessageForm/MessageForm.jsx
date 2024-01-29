import React, { useState } from 'react';


const MessageForm = ({ templatesData, wordsData, conjunctionsData, onSubmit }) => {
  // State and functions for the form
  const [formData, setFormData] = useState({
    template: '',
    words: '',
    conjunctions: '',
    additionalTemplate: '',  
    additionalWords: '',    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the selected option is a category, set it as the formData[name] value
    const updatedValue = wordsData[value] ? value : value;
  
    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {/* First Row: Template and Words */}
      <div className="mb-6">
        <label htmlFor="template" className="block text-white text-lg font-bold mb-2">
          Template:
        </label>
        <select
          id="template"
          name="template"
          value={formData.template}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Template</option>
          {templatesData.map((templateOption) => (
            <option key={templateOption.name} value={templateOption.name}>
              {templateOption.name}
            </option>
          ))}
        </select>
      </div>
  
      <div className="mb-6">
        <label htmlFor="words" className="block text-white text-lg font-bold mb-2">
          Words:
        </label>
        <select
          id="words"
          name="words"
          value={formData.words}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Words</option>
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
  
      {/* Second Row: Conjunctions */}
      <div className="mb-6 col-span-2">
        <label htmlFor="conjunctions" className="block text-white text-lg font-bold mb-2">
          Conjunctions:
        </label>
        <select
          id="conjunctions"
          name="conjunctions"
          value={formData.conjunctions}
          onChange={handleChange}
          className="w-1/2 p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Conjunction</option>
          {conjunctionsData.map((conjunctionOption) => (
            <option key={conjunctionOption.name} value={conjunctionOption.name}>
              {conjunctionOption.name}
            </option>
          ))}
        </select>
      </div>
  
      {/* Third Row: Additional Template and Additional Words */}
      <div className="mb-6">
        <label htmlFor="additionalTemplate" className="block text-white text-lg font-bold mb-2">
          Template:
        </label>
        <select
          id="additionalTemplate"
          name="additionalTemplate"
          value={formData.additionalTemplate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Additional Template</option>
          {templatesData.map((templateOption) => (
            <option key={templateOption.name} value={templateOption.name}>
              {templateOption.name}
            </option>
          ))}
        </select>
      </div>
  
      <div className="mb-6">
        <label htmlFor="additionalWords" className="block text-white text-lg font-bold mb-2">
          Words:
        </label>
        <select
          id="additionalWords"
          name="additionalWords"
          value={formData.additionalWords}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Additional Words</option>
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
  
      {/* Message */}
      <div className="mb-6 col-span-2">
        <h2 className="text-2xl text-white font-bold mb-2">Message:</h2>
        <p className="text-white text-lg">
          {` ${String(formData.template).replace(/\*\*\*\*/g, formData.words)} ${formData.conjunctions} 
            ${String(formData.additionalTemplate).replace(/\*\*\*\*/g, formData.additionalWords)}`}
        </p>
      </div>
  
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline col-span-2"
      >
        Create Message
      </button>
    </form>
  );
  
};

export default MessageForm;
