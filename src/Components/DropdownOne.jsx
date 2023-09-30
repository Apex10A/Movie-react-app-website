import React, { useState } from 'react';

function DropdownOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const options = ['Popular', 'Now-playing', 'Upcoming', 'Top-rated'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="text-left">
      <div>
        <p
          className="text-white font-bold pointer"
          onClick={toggleDropdown}
        >
          Movie
        </p>
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 hover:text-white hover:bg-red-400"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownOne;
