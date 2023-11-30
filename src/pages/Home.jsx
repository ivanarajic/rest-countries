import CountryItem from '../components/CountryItem';
import Filter from '../components/Filter';
import Input from '../components/Input';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../main';
import { action } from 'mobx';

function Home() {
  const store = useContext(StoreContext);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  const handleSearchCountry = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    store.fetchCountries();
  }, []);

  return (
    <div className="bg-light-primary dark:bg-dark-primary">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 m-5 lg:my-10 lg:mx-20">
        <Input search={search} onSearchChange={handleSearchCountry} />
        <Filter onFilterRegionChange={(reg) => setRegion(reg)} />
      </div>

      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-6 lg:gap-8 lg:gap-y-16 items-center justify-center m-8 lg:mx-20">
        {store.filterCountries(search || region).map((country, index) => (
          <CountryItem key={index} data={country} />
        ))}
      </div>
    </div>
  );
}

export default observer(Home);
