import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type ring_smartGLTF = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    Led: THREE.MeshstandardMaterial;
    Ring: THREE.MeshstandardMaterial;
  };
};
