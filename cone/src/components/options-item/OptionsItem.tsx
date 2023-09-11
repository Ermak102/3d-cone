import React, { FC } from "react";
import styles from "./OptionsItem.module.scss";
import coneStore from "../../store/cone-store";

interface IOptionsItem {
  title: string;
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: (value: number) => void;
}

const OptionsItem: FC<IOptionsItem> = ({
  title,
  min,
  max,
  step,
  value,
  setValue,
}) => {
  const { isLoading } = coneStore;

  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <input
          className={styles["input-number"]}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseFloat(e.currentTarget.value))}
          disabled={isLoading}
        ></input>
      </div>
      <input
        className={styles["input-range"]}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseFloat(e.currentTarget.value))}
        disabled={isLoading}
      ></input>
    </div>
  );
};

export default OptionsItem;
