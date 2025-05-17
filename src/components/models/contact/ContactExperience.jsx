import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(to bottom, #5662ea, #a0a7f9)",
      }}
    >
      <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
        {/* Ambient light with cool hue */}
        <ambientLight intensity={0.5} color="#cfd9ff" />

        {/* Directional lights with slightly bluish tint */}
        <directionalLight position={[5, 5, 3]} intensity={2} color="#b0c6ff" />
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2}
          color="#b0c6ff"
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        {/* Ground plane */}
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#5d61b5" />
          </mesh>
        </group>

        {/* Computer model */}
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;
