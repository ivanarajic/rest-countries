import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';

function Filter({ onFilterRegionChange }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleRegionClick = (value) => {
    onFilterRegionChange(value);
    setOpenDropdown(false);
  };

  const handleButtonClick = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <div className="w-64 relative">
      <button
        onClick={handleButtonClick}
        className="flex justify-between  items-center bg-white shadow-md dark:bg-elements-dark text-light-secondary dark:text-white p-4 rounded-md w-full"
      >
        Filter by Region
        <FaAngleDown />
      </button>

      {openDropdown && (
        <div className="bg-white dark:bg-elements-dark w-full mt-3 rounded-md absolute z-50 shadow-md">
          <ul className="p-4 px-6 text-light-secondary dark:text-white">
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('')}
            >
              All
            </li>
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('Africa')}
            >
              Africa
            </li>
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('Americas')}
            >
              Americas
            </li>
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('Asia')}
            >
              Asia
            </li>
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('Europe')}
            >
              Europe
            </li>
            <li
              className="mt-2 cursor-pointer hover:text-slate-400   hover:dark:text-light-secondary"
              onClick={() => handleRegionClick('Oceania')}
            >
              Oceania
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default observer(Filter);
