import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

function CountryItem({ data }) {
  return (
    <Link
      aria-label="Click for more info"
      to={data.alpha3Code}
      className="rounded-md shadow-lg dark:bg-elements-dark bg-white w-64"
    >
      <div className="h-40 w-full cursor-pointer ">
        <img
          src={data.flag}
          alt={`${data.name} flag`}
          className="rounded-t-md object-cover w-full h-full"
        />
      </div>
      <div className="text-light-secondary dark:text-white p-6 min-h-max">
        <h2 className="font-extrabold text-lg mb-4">{data.name}</h2>
        <h3 className="font-semibold text-sm">
          Population:{' '}
          <span className="font-normal">
            {data.population.toLocaleString()}
          </span>
        </h3>
        <h3 className="font-semibold text-sm">
          Region: <span className="font-normal">{data.region}</span>
        </h3>
        {data?.capital && (
          <h3 className="font-semibold text-sm">
            Capital: <span className="font-normal">{data.capital}</span>
          </h3>
        )}
      </div>
    </Link>
  );
}

export default observer(CountryItem);
