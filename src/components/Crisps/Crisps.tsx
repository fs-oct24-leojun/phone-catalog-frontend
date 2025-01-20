import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Crisps.scss';
import { Crumb } from '../Crumb/Crumb';


export const Crisps: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bread-crumbs">
      <Link
        className='bread-crumbs__crumb bread-crumbs__home'
        to="/"
      />

      <Crumb location={location.pathname} />
    </div>
  );
};