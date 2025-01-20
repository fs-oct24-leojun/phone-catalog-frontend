import './SuccessOrderPage.scss';

export const SuccessOrderPage: React.FC = () => (
  <div className="wrapper__success-order success-order">
    <div className="success-order__container container">
      <div className="success-order__image image">
        <img
          src="/img/product-success-order.png"
          alt=""
          className="success-order__img img"
        />
      </div>
      <h4 className="success-order__headline-4 headline-4">
        Thank you, for your order!
      </h4>
    </div>
  </div>
);
