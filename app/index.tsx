import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber/native";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "@react-three/drei/native";

// Componente para centralizar e ajustar a câmera automaticamente
function Human() {
  const obj = useLoader(OBJLoader, require("../assets/models/human.obj"));
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Centraliza o modelo na origem
      ref.current.position.sub(center);

      // Ajusta a câmera com base no tamanho
      const distance = size.length() * 1.5;
      camera.position.set(0, 0, distance);
      camera.lookAt(0, 0, 0);
    }
  }, [obj, camera]);

  return <primitive ref={ref} object={obj} />;
}

// Componente de fallback de carregamento
function Loader() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Carregando modelo...</Text>
    </View>
  );
}

export default function AnimationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Suspense>
        <Canvas camera={{ fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Human />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </View>
  );
}
