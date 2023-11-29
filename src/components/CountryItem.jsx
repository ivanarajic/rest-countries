import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

function CountryItem({ data }) {
  return (
    <div className="rounded-md shadow-lg dark:bg-elements-dark bg-white h-80 w-64">
      <div onClick={() => {}} className="h-40 w-full cursor-pointer ">
        <Link to={data.alpha3Code}>
          <img
            src={data.flag}
            className="rounded-t-md object-cover w-full h-full"
          />
        </Link>
      </div>
      <div className="text-light-secondary dark:text-white p-5">
        <h2 className="font-extrabold text-lg mb-4">{data.name}</h2>
        <h3 className="font-semibold text-sm">
          Population: <span className="font-normal">{data.population}</span>
        </h3>
        <h3 className="font-semibold text-sm">
          Region: <span className="font-normal">{data.region}</span>
        </h3>
        <h3 className="font-semibold text-sm">
          Capital: <span className="font-normal">{data.capital}</span>
        </h3>
      </div>
    </div>
  );
}

export default observer(CountryItem);
