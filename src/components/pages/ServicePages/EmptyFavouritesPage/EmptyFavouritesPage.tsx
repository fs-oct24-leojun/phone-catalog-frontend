import '../ServicePages.scss';

export const EmptyFavouritesPage: React.FC = () => (
  <div className="wrapper__not-found not-found">
    <div className="not-found__container container">
      <div className="not-found__image image">
        <img
          src="/img/error images/product-not-found.png"
          alt=""
          className="not-found__img img"
        />
      </div>
      <h4 className="not-found__headline headline--4">
        O-ops! Seems there is no products!
      </h4>
    </div>
  </div>
);
