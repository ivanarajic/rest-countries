import { observer } from 'mobx-react-lite';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Header from './components/Header';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default observer(App);
