import { observer } from "mobx-react-lite";
import ConeOptions from "../../components/cone-options/ConeOptions";
import Cone from "../../components/cone/Cone";
import CanvasLayout from "../../components/layout/CanvasLayout";
import coneStore from "../../store/cone-store";
import { useEffect, useState } from "react";

import {
  heightOptionData as heightData,
  radiusOptionData as radiusData,
  segmentOptionData as segmentData,
} from "../../components/cone-options/cone-options.data";
import { IConeQueryParams } from "../../services/Cone.interface";
import ErrorWindow from "../../components/UI/ErrorWindow/ErrorWindow";

const ConePage = observer(() => {
  const { fetchConeData, clearingError, cone, error } = coneStore;

  const [coneParams, setConeParams] = useState<IConeQueryParams>({
    height: heightData.default,
    radius: radiusData.default,
    segmentCount: segmentData.default,
  });

  const [isImplementSmooth, setIsImplementSmooth] = useState<boolean>(false);
  const [isWireframe, setIsWirframe] = useState<boolean>(true);

  useEffect(() => {
    fetchConeData(coneParams);
  }, [coneParams]);

  return (
    <main className="canvas" id="root-canvas">
      {cone.trianglesPosition.length && cone.normals.length && (
        <CanvasLayout isVisibleStats={true}>
          <Cone
            coneData={cone.trianglesPosition}
            isSmooth={isImplementSmooth}
            normals={cone.normals}
            isWireframe={isWireframe}
          />
        </CanvasLayout>
      )}

      {error && <ErrorWindow error={error} hideError={clearingError} />}

      <ConeOptions
        cone={coneParams}
        setCone={setConeParams}
        isSmooth={isImplementSmooth}
        setSmooth={setIsImplementSmooth}
        isWireframe={isWireframe}
        setIsWireframe={setIsWirframe}
      />
    </main>
  );
});

export default ConePage;
