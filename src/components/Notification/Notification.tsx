import './Notification.scss';
import React, { useEffect } from 'react';

interface Props {
  message: string;
  type: 'success' | 'info' | 'warn' | 'error';
  onClose: () => void;
}

export const Notification: React.FC<Props> = ({
  message, type, onClose 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification notification--${type}`}>
      <div className="notification__content">
        <h4 className="notification__title">{type}</h4>
        <p className="notification__message">{message}</p>
      </div>
      <button
        className="notification__close"
        onClick={() => onClose()}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};
