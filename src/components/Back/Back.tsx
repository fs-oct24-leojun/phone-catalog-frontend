import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.scss';

export const Back: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='back'>
      <button className="back__button" onClick={handleBackClick}>
        <span><img className='vector' src="../../../public/icons/Arrow-left.svg" alt="" /></span> Back
      </button>
    </div>
  );
};

