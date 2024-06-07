import React, { useState } from 'react'

let Dropdown = (props) => {
    const { optionToParent, additionalToParent } = props

   const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        optionToParent(event.target.value)
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        additionalToParent(event.target.value)
    };

    return (
        <div>
        <label htmlFor="dropdown">O jakou službu se jedná?</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3 (shows input)</option>
        </select>

        {selectedOption === 'option3' && (
            <div>
            <label htmlFor="additionalInput">Please specify:</label>
            <input
                id="additionalInput"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            </div>
        )}
        </div>
    );
};

export default Dropdown
