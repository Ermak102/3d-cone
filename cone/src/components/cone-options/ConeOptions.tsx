import { FC, useState } from "react";
import OptionsItem from "../options-item/OptionsItem";
import styles from "./ConeOptions.module.scss";
import {
  heightOptionData as heightData,
  radiusOptionData as radiusData,
  segmentOptionData as segmentData,
} from "./cone-options.data";
import { IConeQueryParams } from "../../services/Cone.interface";

interface IConeOptions {
  cone: IConeQueryParams;
  setCone: (value: IConeQueryParams) => void;
  isSmooth: boolean;
  setSmooth: (value: boolean) => void;
  isWireframe: boolean;
  setIsWireframe: (value: boolean) => void;
}

const ConeOptions: FC<IConeOptions> = ({
  cone,
  setCone,
  isSmooth,
  setSmooth,
  isWireframe,
  setIsWireframe,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <section className={styles.options + ` ${isOpenMenu && styles.open}`}>
      <div className={styles.burger} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.list}>
        <ul>
          <OptionsItem
            value={cone.height}
            setValue={(value) => setCone({ ...cone, height: value })}
            title={heightData.title}
            min={heightData.min}
            max={heightData.max}
            step={heightData.step}
          />
          <OptionsItem
            value={cone.radius}
            setValue={(value) => setCone({ ...cone, radius: value })}
            title={radiusData.title}
            min={radiusData.min}
            max={radiusData.max}
            step={radiusData.step}
          />
          <OptionsItem
            value={cone.segmentCount}
            setValue={(value) => setCone({ ...cone, segmentCount: value })}
            title={segmentData.title}
            min={segmentData.min}
            max={segmentData.max}
            step={segmentData.step}
          />

          <div className={styles.wrapper}>
            <div className={styles.smooth}>isSmooth</div>
            <input
              type="checkbox"
              defaultChecked={isSmooth}
              onClick={() => setSmooth(!isSmooth)}
            />
          </div>

          <div className={styles.wrapper}>
            <div className={styles.smooth}>isWireframe</div>
            <input
              type="checkbox"
              defaultChecked={isWireframe}
              onClick={() => setIsWireframe(!isWireframe)}
            />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default ConeOptions;
