import './Footer.scss'
import { scrollTop } from '../../utils/scroll';

export const Footer: React.FC = () => (
    <div className="wrapper__footer footer">
        <div className="footer__container container">
            <div className="footer__logo-image image">
                <img src='/img/Logo.png' alt="" className="footer__logo-img img" />
            </div>
            <nav className="footer__nav nav">
                <ul className="nav__list nav__list--footer">
                    <li className="nav__item">
                        <a 
                            href="https://github.com/fs-oct24-leojun/phone-catalog-frontend" 
                            className="nav__link">
                            Github
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="https://github.com/fs-oct24-leojun/phone-catalog-frontend"
                            className="nav__link">
                            Contacts
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="https://github.com/fs-oct24-leojun/phone-catalog-frontend"
                            className="nav__link">
                            Rights
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="footer__back-to-top">
                <p className="footer__back-to-top-text text">
                    Back to top
                </p>
                <button
                    className="footer__back-to-top-button button button--secondary button--round"
                    onClick={scrollTop}>
                    <i className="fa-solid fa-angle-up"></i>
                </button>
            </div>
        </div>
    </div>
);