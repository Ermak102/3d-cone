import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Loading from "../UI/Loading/Loading";

interface ICanvasLayout {
  isVisibleStats: boolean;
  children: React.ReactNode;
}

const CanvasLayout: FC<ICanvasLayout> = ({ isVisibleStats, children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas>
        <directionalLight intensity={1} position={[-0.5, 4, 1]} />

        {children}

        {isVisibleStats && <Stats />}
        <OrbitControls position={[0, 0, 0]} />
      </Canvas>
    </Suspense>
  );
};

export default CanvasLayout;
