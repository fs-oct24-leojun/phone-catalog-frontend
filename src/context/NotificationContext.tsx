import React, {
  createContext, ReactNode, useCallback, useState 
} from 'react';
import { Notification } from '../components/Notification/Notification';

type NotificationType = 'success' | 'info' | 'warn' | 'error';

interface NotificationContextType {
  showNotification: (message: string, type: NotificationType) => void;
}

const defaultValue: NotificationContextType = { showNotification: () => {} };

export const NotificationContext =
  createContext<NotificationContextType>(defaultValue);

// eslint-disable-next-line max-len
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationType;
  } | null>(null);

  const showNotification = useCallback(
    (message: string, type: NotificationType) => {
      setNotification({ message, type });

      setTimeout(() => setNotification(null), 5000);
    },
    [],
  );

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </NotificationContext.Provider>
  );
};
