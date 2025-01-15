import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const App: React.FC = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [])

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
