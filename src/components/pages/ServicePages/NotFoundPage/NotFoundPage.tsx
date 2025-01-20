import '../ServicePages.scss';

export const NotFoundPage: React.FC = () => (
  <div className="wrapper__not-found not-found">
    <div className="not-found__container container">
      <div className="not-found__image image">
        <img
          src="/img/error images/page-not-found.png"
          alt=""
          className="not-found__img img"
        />
      </div>
      <h4 className="not-found__headline headline--4">Page not found</h4>
    </div>
  </div>
);
