import { Canvas } from "@react-three/fiber";
import { AuraX } from "./AuraX";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense } from "react";
import { Loading } from "./Loading";
gsap.registerPlugin(ScrollTrigger);

export const CanvasContainer = () => {
  return (
    <Canvas
      className="overflow-x-hidden"
      camera={{ position: [-3.730649658369964e-7, 0, 5.166775120387718] }}
    >
      <mesh>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <AuraX />
        <Environment preset="studio" />
      </mesh>
    </Canvas>
  );
};
