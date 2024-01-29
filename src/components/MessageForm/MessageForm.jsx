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
    <form onSubmit={handleSubmit} className="">
    {/* Template Input */}
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

      {/* Words Input */}
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

      {/* Conjunctions Input */}
      <div className="mb-6">
        <label htmlFor="conjunctions" className="block text-white text-lg font-bold mb-2">
          Conjunctions:
        </label>
        <select
          id="conjunctions"
          name="conjunctions"
          value={formData.conjunctions}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
        >
          <option value="">Conjunction</option>
          {conjunctionsData.map((conjunctionOption) => (
            <option key={conjunctionOption.name} value={conjunctionOption.name}>
              {conjunctionOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Templates Input */}
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
          <option value="">Template</option>
          {templatesData.map((templateOption) => (
            <option key={templateOption.name} value={templateOption.name}>
              {templateOption.name}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Words Input */}
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

      {/* Message */}
      <div className="mb-6">
        <h2 className="text-2xl text-white font-bold mb-2">Message:</h2>
        <p className="text-white text-lg">
          {` ${String(formData.template).replace(/\*\*\*\*/g, formData.words)} ${formData.conjunctions} 
            ${String(formData.additionalTemplate).replace(/\*\*\*\*/g, formData.additionalWords)}`}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        Create Message
      </button>
    </form>
  );
};

export default MessageForm;
