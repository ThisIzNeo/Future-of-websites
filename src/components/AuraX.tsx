import { useGLTF } from "@react-three/drei";
import React, { useLayoutEffect } from "react";
import { ring_smartGLTF } from "../typings";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export const AuraX = () => {
  const { nodes, materials } = useGLTF("/ring_smart.glb") as ring_smartGLTF;
  const { scene, camera } = useThree();
  const timeLine = gsap.timeline();

  useLayoutEffect(() => {
    timeLine
      .to(camera.position, {
        x: 5,
        y: 4,
        z: 2.8,
        scrollTrigger: {
          trigger: ".details-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 1,
        y: 0.1,
        z: -4,
        scrollTrigger: {
          trigger: ".details-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 2.3,
        y: 3.1,
        z: -1.6,
        scrollTrigger: {
          trigger: ".details-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(camera.position, {
        x: 1,
        y: -1,
        z: -9.5,
        scrollTrigger: {
          trigger: ".buy-one",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 4,
        y: 0.5,
        z: -1.5,
        scrollTrigger: {
          trigger: ".buy-one",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: -6.2,
        y: 4.1,
        z: -1.3,
        scrollTrigger: {
          trigger: ".buy-one",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  return (
    <>
      <directionalLight position={[-5, -1, 1]} />
      <group
        scale={1.19}
        position-y={[-1]}
        rotation-z={[Math.PI * 0.5]}
        rotation-y={[Math.PI * 0.5]}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.Led} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Ring} />
      </group>
    </>
  );
};
