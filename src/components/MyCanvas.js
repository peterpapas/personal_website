import React from "react";
import { Canvas } from "react-three-fiber";
import "../index.css";

export default function MyCanvas() {
  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}
