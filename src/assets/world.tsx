import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Para tener controles orbitales interactivos por el usuario
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeWorld: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Tamaño para el renderizador y cámara inicial
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x20232a);

    // Cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Añadir una luz
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Crear una geometría simple para el "mundo": caja giratoria
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x61dafb });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Controles orbit para manipular la escena con el mouse/touch
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // movimiento suave

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Manejar redimension de ventana para mantener proporciones
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '600px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
      }}
    />
  );
};

export default ThreeWorld;
