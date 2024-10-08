import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext, VARIANT_OPTIONS } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const { message, setMessage, variant, setVariant, setToastMessages, toastMessages } = React.useContext(ToastContext)

  return (

    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={event => {
        event.preventDefault();

        setToastMessages([...toastMessages, { message, variant, id: Math.random() }])

        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
      }}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={event => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option, index) => {
              const id = `id-${option}`;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={event => setVariant(event.target.value)}
                  />
                  {option}
                </label>)
            }
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
