import React from 'react';
import './RightsPage.scss';

export const RightsPage: React.FC = () => {
  return (
    <div className="rights-page">
      <h1 className="rights-page__title">Rights and Legal Information</h1>

      <section className="rights-page__section">
        <h2 className="rights-page__subtitle">User Rights</h2>
        <p className="rights-page__text">
          As a user of this website, you have the right to access and browse all
          publicly available content. You are also entitled to request the
          removal of your personal data, if applicable.
        </p>
      </section>

      <section className="rights-page__section">
        <h2 className="rights-page__subtitle">Copyright</h2>
        <p className="rights-page__text">
          All content on this website, including images, text, and code, is the
          property of the development team and protected by copyright law.
          Unauthorized use, reproduction, or distribution of this content
          without permission is prohibited.
        </p>
      </section>

      <section className="rights-page__section">
        <h2 className="rights-page__subtitle">Terms of Use</h2>
        <p className="rights-page__text">
          By using this website, you agree to respect the rights of other users
          and not to engage in any activities that may harm the website, its
          functionality, or its reputation.
        </p>
      </section>

      <section className="rights-page__section">
        <h2 className="rights-page__subtitle">Contact Information</h2>
        <p className="rights-page__text">
          If you have any questions about your rights or wish to report a
          copyright infringement, please contact us at{' '}
          <a
            href="mailto:support@nicegadgets.com"
            className="rights-page__link"
          >
            support@gadgetcatalog.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};
