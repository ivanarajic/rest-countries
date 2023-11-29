import { HiOutlineMoon } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

function Header() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="dark:bg-elements-dark bg-white flex justify-between px-4 py-8 shadow-md lg:px-20">
      <h1 className="font-extrabold text-base lg:text-xl text-light-secondary dark:text-white">
        Where in the world?
      </h1>
      <div className="flex gap-2 items-center text-black">
        <div onClick={handleThemeSwitch}>
          <HiOutlineMoon
            size={20}
            className="cursor-pointer dark:fill-white dark:text-white"
          />
        </div>
        <h2 className="text-sm lg:text-base font-semibold text-light-secondary dark:text-white">
          Dark Mode
        </h2>
      </div>
    </div>
  );
}

export default observer(Header);
