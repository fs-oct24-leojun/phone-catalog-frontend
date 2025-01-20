import './App.scss';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NotificationProvider } from './utils/NotificationContext';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export const App: React.FC = () => {
  const themeValue = useContext(ThemeContext);
  
  return (
    <div className={`${themeValue.theme}`}>
      <NotificationProvider>
        <Header />
        <main className="wrapper">
          <div className="wrapper__container container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </NotificationProvider>
    </div>
  );
};
