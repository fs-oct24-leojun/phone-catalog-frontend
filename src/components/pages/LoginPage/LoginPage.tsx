import './LoginPage.scss';
import * as auth from '../../../firebases/auth';
import { useState } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-page">
      <section className="login-page__form-section">
        <div className="login-page__headline-block headline-block">
          <h1 className="headline-block__headline headline--1">
            Really Nice Gadgets
          </h1>
        </div>
        <form className="login-page__form">
          <div className="login-page__container-input container">
            <input
              placeholder="Email"
              className="login-page__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              placeholder="Password"
              className="login-page__input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="login-page__button button button--primary"
            onClick={() =>
              auth.doCreateUserWithEmailAndPassword(email, password)
            }
          >
            Log in
          </button>
          <div className="login-page__link-container container">
            <a className="login-page__link-return small-text">Maybe later</a>
          </div>
        </form>
      </section>
      <section className="login-page__image-for-desktop">
        <img
          src="/img/login-image.png"
          alt="Image of keyboard"
        />
      </section>
    </div>
  );
};
