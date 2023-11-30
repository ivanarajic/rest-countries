import { Link } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import { FaArrowLeft } from 'react-icons/fa6';
import { observer } from 'mobx-react-lite';
function Details() {
  return (
    <div className="px-5 lg:px-20 my-8 flex flex-col gap-12">
      <Link aria-label="Back to the main page" to="/">
        <button className="flex items-center gap-3 bg-white dark:bg-elements-dark px-6 py-2 dark:text-white text-light-secondary shadow-xl rounded-sm">
          <FaArrowLeft />
          Back
        </button>
      </Link>
      <DetailCard />
    </div>
  );
}

export default observer(Details);
