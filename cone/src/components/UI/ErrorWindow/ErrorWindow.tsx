import React, { FC } from "react";

import { AiOutlineClose } from "react-icons/ai";
import styles from "./ErrorWindow.module.scss";

interface IErrorWindow {
  error: string;
  hideError: () => void;
}

const ErrorWindow: FC<IErrorWindow> = ({ error, hideError }) => {
  return (
    <div className={styles.error}>
      <AiOutlineClose
        className={styles.close}
        size={18}
        onClick={() => hideError()}
      />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.title}>Error</div>
          <div className={styles.subtitle}>{error}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorWindow;
