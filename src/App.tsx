import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NotificationProvider } from './context/NotificationContext';
import { AuthProvider } from './AuthContext';

export const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <NotificationProvider>
          <Header />
          <main className="wrapper">
            <div className="wrapper__container container">
              <Outlet />
            </div>
          </main>
          <Footer />
        </NotificationProvider>
      </AuthProvider>
    </>
  );
};
