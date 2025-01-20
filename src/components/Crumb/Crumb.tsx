import React from 'react';
import { Link } from 'react-router-dom';
import '../Crisps/Crisps.scss';

interface Props {
  location: string;
}

export const Crumb: React.FC<Props> = ({ location }) => {
  const pathSegments = location
    .split('/')
    .filter((crumb) => crumb !== '' && !+crumb);

  let currentLink = '/catalog';

  return pathSegments.map((crumb, index) => {
    if (crumb === 'catalog') {
      return null;
    }

    currentLink += `/${crumb}`;

    const crumbLink =
      index === pathSegments.length - 1 ? location : currentLink;

    return (
      <React.Fragment key={crumb}>
        <div className="bread-crumbs__crumb bread-crumbs__arrow" />
        <div className="bread-crumbs__crumb">
          <Link
            className="bread-crumbs__link"
            to={crumbLink}
          >
            {crumb.replace(/-/g, ' ')}
          </Link>
        </div>
      </React.Fragment>
    );
  });
};
