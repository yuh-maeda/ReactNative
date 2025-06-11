import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber/native";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "@react-three/drei/native";

// Componente que posiciona o modelo
function HumanInstance({ object, position }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      ref.current.position.sub(center); // Centraliza o modelo
      ref.current.position.add(new THREE.Vector3(...position)); // Move para posição desejada
    }
  }, [object, position]);

  return <primitive ref={ref} object={object.clone()} />;
}

// Componente principal que carrega o modelo uma única vez
function Scene() {
  const obj = useLoader(OBJLoader, require("../assets/models/human.obj"));
  const { camera } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const distance = size.length() * 2.5;

    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);
  }, [obj, camera]);

  // Calcular largura do modelo
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const modelWidth = size.x;
  const offset = modelWidth + 1; // 1 unidade de margem

  return (
    <>
      <HumanInstance object={obj} position={[-offset/2, 0, 0]} />
      <HumanInstance object={obj} position={[offset/2, 0, 0]} />
    </>
  );
}



export default function AnimationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Canvas camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense>
          <Scene />
        </Suspense>
        <OrbitControls 
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </View>
  );
}
