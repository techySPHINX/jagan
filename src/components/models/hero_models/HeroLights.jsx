import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
      position={[2, 5, 6]}
      angle={0.2}
      penumbra={0.3}
      intensity={70}
      color="#93c5fd"
    />
    <spotLight
      position={[-4, 6, 4]}
      angle={0.35}
      penumbra={0.6}
      intensity={40}
      color="#7c3aed"
    />
    <primitive
      object={new THREE.RectAreaLight("#38bdf8", 6, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={10}
    />
    <pointLight position={[0, 1, -3]} intensity={15} color="#0ea5e9" />
  </>
);

export default HeroLights;
