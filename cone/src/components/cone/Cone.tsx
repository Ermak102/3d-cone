import { BufferAttribute, BufferGeometry, MeshStandardMaterial } from "three";
import ObjectLayout from "../layout/ObjectLayout";

import { FC, useMemo } from "react";

interface ICone {
  coneData: number[];
  isSmooth: boolean;
  normals: number[];
  isWireframe: boolean;
}

const Cone: FC<ICone> = ({ coneData, isSmooth, normals, isWireframe }) => {
  const addSmooth = (geometry: BufferGeometry) => {
    geometry.setAttribute(
      "normal",
      new BufferAttribute(new Float32Array(normals), 3)
    );
  };

  const getGeometry = useMemo(() => {
    const geometry = new BufferGeometry();

    geometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(coneData), 3)
    );

    isSmooth ? addSmooth(geometry) : geometry.computeVertexNormals();

    return geometry;
  }, [coneData, isSmooth]);

  return (
    <>
      <ObjectLayout
        geometryType={getGeometry}
        position={[0, -1, 0]}
        rotation={[-1.5, 0, 0]}
      >
        {isSmooth && <meshLambertMaterial color={"rgb(0, 183, 255)"} />}

        {!isSmooth && (
          <meshStandardMaterial
            color={"rgb(45, 216, 247)"}
            wireframe={isWireframe}
          />
        )}
      </ObjectLayout>
    </>
  );
};

export default Cone;
