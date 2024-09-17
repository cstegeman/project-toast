import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastMessages, onClose } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastMessages.map(({ message, variant, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onClose={() => onClose(id)}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
