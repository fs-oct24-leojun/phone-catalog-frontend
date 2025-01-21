import { useEffect, useState } from 'react';
import './LoginPage.scss';
import { doSignInWithEmailAndPassword } from '../../../firebases/auth';
import { useAuth } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { userLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const submitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill out both fields.");

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");

      return;
    }

    await doSignInWithEmailAndPassword(email, password);
    if( !userLoggedIn ) {
      setError("That was an invalid email or password. Try again!");

    }
  };


  useEffect(() => {
    console.log(currentUser);
    if( userLoggedIn ) {
      navigate('/home');
    }
  },[currentUser, navigate, userLoggedIn]);

  return (
    <div className="login-page">
      <section className="login-page__form-section">
        <h1 className="login-page__title headline--1">Really Nice Gadgets</h1>
        <form className="login-page__form" onSubmit={submitHandle}>
          {error && <div className="login-page__form-error">{error}</div>}
          <div className="login-page__container-input container">
            <input
              placeholder="email"
              className="login-page__input"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value.trim())
              }}
            />
            <input
              placeholder="password"
              className="login-page__input"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value.trim())
              }}

            />
          </div>
          <button className="login-page__button button">Log in</button>
          <div className="login-page__link-container container">
            <a className="login-page__link-return">Maybe later</a>
          </div>
        </form>
      </section>
      <section className="login-page__image-for-desktop">
        <img
          src="../../../../public/img/login-image.png"
          alt="Image of keyboard"
        />
      </section>
    </div>
  )
};
