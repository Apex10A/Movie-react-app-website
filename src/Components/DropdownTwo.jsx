import React, { useState } from 'react';

function DropdownTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tv shows');
  const options = ['Popular', 'Airing today', 'On Tv', 'Top Rated'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
      <p
          className="text-white font-bold pointer"
          onClick={toggleDropdown}
        >
          Tv Shows
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

export default DropdownTwo;
