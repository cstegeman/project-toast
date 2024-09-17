import React from 'react';
import { useKeyDown } from '../../hooks';

export const ToastContext = React.createContext(null);
export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastMessages, setToastMessages] = React.useState([]);

  useKeyDown('Escape', () => {
    setToastMessages([]);
  })

  function onClose(id) {
    setToastMessages(toastMessages.filter(messages => messages.id !== id))
  }

  return <ToastContext.Provider value={{
    message, setMessage, variant, setVariant, toastMessages, setToastMessages, onClose
  }}>{children}</ToastContext.Provider>
}

export default ToastProvider;
