import './HomePage.scss';
import CategoryPhones from '/img/category/category-phones.png';
import CategoryTablets from '/img/category/category-tablets.png';
import CategoryAccessories from '/img/category/category-accessories.png';

export const HomePage: React.FC = () => {
  return (
    <>
      <header>here will be header</header>

      <main className="home-page">
        <div className="title">
          <div className="title__container container">
            <h1 className="title__text">Welcome to Nice Gadgets store!</h1>
          </div>
        </div>

        <section className="slider">
          <div className="slider__container container">here will be slider</div>
        </section>
        <section className="new-models">
          <div className="new-models__container container">
            <h2 className="new-models__title">Brand new models</h2>
            <div className="new-models__buttons">
              <button className="new-models__button button--round">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="new-models__button button--round">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="categories">
          <div className="categories__container-title container">
            <h2 className="categories__title">Shop by category</h2>
          </div>
          <div className="categories__container container">
            <article className="category">
              <div className="category__photo">
                <a
                  href="#"
                  className="category__link"
                >
                  <img
                    className="category__img"
                    src={CategoryPhones}
                    alt="Phones"
                  />
                </a>
              </div>

              <div className="category__texts">
                <h3>Mobile phones</h3>
                <p className="category__text">95 models</p>
              </div>
            </article>
            <article className="category">
              <div className="category__photo">
                <a
                  href="#"
                  className="category__link"
                >
                  <img
                    className="category__img"
                    src={CategoryTablets}
                    alt="Tablets"
                  />
                </a>
              </div>

              <div className="category__texts">
                <h3>Tablets</h3>
                <p className="category__text">24 models</p>
              </div>
            </article>
            <article className="category">
              <div className="category__photo">
                <a
                  href="#"
                  className="category__link"
                >
                  <img
                    className="category__img"
                    src={CategoryAccessories}
                    alt="Accessories"
                  />
                </a>
              </div>

              <div className="category__texts">
                <h3>Accessories</h3>
                <p className="category__text">100 models</p>
              </div>
            </article>
          </div>
        </section>
        <section className="hot-prices">
          <div className="new-models__container container">
            <h2 className="new-models__title">Hot prices</h2>
            <div className="new-models__buttons">
              <button className="new-models__button button--round">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="new-models__button button--round">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
