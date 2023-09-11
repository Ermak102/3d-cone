import { MeshProps } from "@react-three/fiber";
import React, { FC } from "react";

interface IObjectLayout extends MeshProps {
  geometryType: THREE.BufferGeometry;
  children: React.ReactNode;
}

const ObjectLayout: FC<IObjectLayout> = ({
  geometryType,
  children,
  ...props
}) => {
  return (
    <mesh {...props} geometry={geometryType}>
      {children}
    </mesh>
  );
};

export default ObjectLayout;
