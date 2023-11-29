import { IoMdSearch } from 'react-icons/io';
import { observer } from 'mobx-react-lite';

function Input({ onSearchChange, search }) {
  return (
    <form onChange={() => {}} className="w-full ">
      <div className="relative">
        <IoMdSearch
          size={22}
          className="absolute top-[50%] translate-y-[-50%] left-7 fill-light-input dark:fill-white"
        />
        <input
          value={search}
          onChange={onSearchChange}
          type="text"
          placeholder="Search for a country..."
          className="py-4 px-16 w-full lg:w-2/5 bg-white dark:text-white dark:bg-elements-dark shadow-md  focus:outline-none rounded-md font-semibold   placeholder:text-light-input/70 dark:placeholder:text-white/60 dark:caret-light-input"
        />
      </div>
    </form>
  );
}

export default observer(Input);
