import './LoginPage.scss';

export const LoginPage = () => (
  <div className="login-page">
    <section className="login-page__form-section">
      <h1 className="login-page__title headline--1">Really Nice Gadgets</h1>
      <form className="login-page__form">
        <div className="login-page__container-input container">
          <input
            placeholder="Username"
            className="login-page__input"
          />
          <input
            placeholder="Email"
            className="login-page__input"
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
);
