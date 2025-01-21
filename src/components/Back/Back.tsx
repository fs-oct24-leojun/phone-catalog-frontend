import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.scss';

export const Back: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="back">
      <button
        className="back__button"
        onClick={handleBackClick}
      >
        <span>
          <i className="fa-solid fa-angle-left"></i>
        </span>{' '}
        Back
      </button>
    </div>
  );
};
