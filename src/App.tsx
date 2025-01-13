import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="wrapper__container container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
