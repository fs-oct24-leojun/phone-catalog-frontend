import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
    <div className="wrapper__not-found not-found">
        <div className="not-found__container container">
            <div className="not-found__image image">
                <img src="/img/product-not-found.png" alt="" className="not-found__img img" />
            </div>
            <h4 className="not-found__headline-4 headline-4">Page not found</h4>
        </div>
    </div>
);