import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NotificationProvider } from './context/NotificationContext';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

export const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  console.log(`App: ${theme}`);

  return (
    <NotificationProvider>
      <div className="theme-wrapper" data-theme={`${theme}`}>
        <Header />
        <main className="wrapper">
          <div className="wrapper__container container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </NotificationProvider>
  );
};
