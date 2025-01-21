import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NotificationProvider } from './context/NotificationContext';
import { ThemeContext } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { useContext } from 'react';

export const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  // TO DO: Implement Firebase
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};
