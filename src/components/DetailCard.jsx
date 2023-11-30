import { useContext } from 'react';
import { useParams } from 'react-router';
import { StoreContext } from '../main';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

function DetailCard() {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const country = store.data.filter((country) => country.alpha3Code === id)[0];

  const currencies =
    country.currencies == undefined
      ? (country.currencies = [])
      : country.currencies.map((c) => c.name);

  const languages = country.languages.map((lang) => lang.name);
  const borders =
    country.borders == undefined ? (country.borders = []) : country.borders;

  const borderNames =
    borders &&
    borders.map((border) => {
      return store.data.filter((country) =>
        country.alpha3Code.includes(border)
      )[0].name;
    });

  return (
    <div
      className="max-w-sm lg:min-w-full mx-auto flex flex-col items-center lg:flex-row lg:justify-center lg:gap-28
    "
    >
      <div className="h-64 w-full lg:h-80 lg:w-2/5">
        <img
          src={country?.flag}
          alt={country.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="self-start lg:self-center lg:w-3/5">
        <h1 className="text-2xl text-light-secondary dark:text-white font-extrabold mt-10 lg:mt-0">
          {country.name}
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div className="text-light-secondary dark:text-white mt-8 leading-8 font-semibold">
            <p>
              Native Name:{' '}
              <span className="font-light">{country.nativeName}</span>
            </p>
            <p>
              Population:{' '}
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p>
              Region: <span className="font-light">{country.region}</span>
            </p>
            <p>
              Sub Region:{' '}
              <span className="font-light">{country.subregion}</span>
            </p>
            {country?.capital && (
              <p>
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            )}
          </div>
          <div className="text-light-secondary dark:text-white mt-10 leading-8 font-semibold">
            <p>
              Top Level Domain:{' '}
              <span className="font-light">
                {country.topLevelDomain.join(', ')}
              </span>
            </p>
            {currencies.length > 0 && (
              <p>
                Currencies:{' '}
                <span className="font-light">{currencies.join(', ')}</span>
              </p>
            )}
            <p>
              Languages:{' '}
              <span className="font-light">{languages.join(', ')}</span>
            </p>
          </div>
        </div>
        <div
          className="text-light-secondary dark:text-white leading-8 font-semibold flex flex-col lg:flex-row
         gap-4 mt-10"
        >
          {borders.length > 0 && <p>Border Countries: </p>}

          <div className="flex gap-2 flex-wrap">
            {borderNames.map((border, i) => (
              <Link aria-label="Go to" to={`/${borders[i]}`} key={i}>
                <button
                  key={i}
                  className="bg-white dark:bg-elements-dark px-4 py-1 text-sm dark:text-white text-light-secondary shadow-xl rounded-sm font-light"
                >
                  {border}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(DetailCard);
