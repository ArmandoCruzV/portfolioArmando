import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

type num = {
  startx: number;
  endx: number;
  totalDistanceX: number;
}

const PlatilloVoladorMetalSlug: React.FC<num> = ({ startx = 0, endx = -2 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Crear escena, cámara y renderizador
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Crear la esfera
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00aaff,
      roughness: 0.4,
      metalness: 0.7,
      emissive: 0x006699,
      emissiveIntensity: 0.3,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Middle ring - smaller radius, bright color ring around, slightly raised
    const ringGeom = new THREE.CylinderGeometry(2, 2, 0.1, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x55ccff,
      metalness: 1,
      roughness: 0.4,
      emissive: new THREE.Color(0x33bbff),
      emissiveIntensity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    scene.add(ringMesh);

    // Antenna - small cylinder + sphere with emissive green light
    const antennaGroup = new THREE.Group();

    const antennaStemGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 12);
    const antennaStemMat = new THREE.MeshStandardMaterial({
      color: 0x44ff33,
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color(0x44ff33),
      emissiveIntensity: 0.9,
    });
    const antennaStem = new THREE.Mesh(antennaStemGeom, antennaStemMat);
    antennaStem.position.y = 0.9;
    antennaStem.position.x = -0.1;
    antennaStem.rotation.z = Math.PI / 1;
    antennaGroup.add(antennaStem);

    const antennaTopGeom = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaTopMat = new THREE.MeshStandardMaterial({
      color: 0x33ff77,
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color(0x33ff77),
      emissiveIntensity: 1,
    });
    const antennaTop = new THREE.Mesh(antennaTopGeom, antennaTopMat);
    antennaTop.position.y = 1.2;
    antennaTop.position.x = -0.1;
    antennaTop.rotation.z = Math.PI / 9;
    antennaGroup.add(antennaTop);

    scene.add(antennaGroup);

    // Lights dotted around rim - small spheres emitting light
    const lightsGroup = new THREE.Group();
    const lightColor = new THREE.Color(0x00ffee);
    const lightMaterial = new THREE.MeshStandardMaterial({
      color: lightColor,
      emissive: lightColor,
      emissiveIntensity: 1,
    });
    const lightGeometry = new THREE.SphereGeometry(0.13, 12, 12);

    const lightCount = 12;
    for (let i = 0; i < lightCount; i++) {
      const angle = (i / lightCount) * 2 * Math.PI;
      const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial.clone());
      lightMesh.position.set(Math.cos(angle) * 1.68, 0.0, Math.sin(angle) * 1.85);
      lightsGroup.add(lightMesh);
    }

    scene.add(lightsGroup);

    // Añadir luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Parámetros de animación

    const startX = startx;   // posición inicial Y (top)
    const endX = endx;    // posición final Y (bottom)
    const startY = 5;   // posición inicial Y (top)
    const endY = -4;    // posición final Y (bottom)
    const totalDistance = startY - endY; // distancia total a recorrer                                                                                                                                  
    const totalDistanceX = startX - endX; // distancia total a recorrer
    const duration = 4000; // duración de la animación en milisegundos

    let startTime: number | null = null;

    //mantener animacion
    function animate2() {
      requestAnimationFrame(animate);

      // Código de actualización de animación, ej. rotación
      sphere.rotation.y += 0.01;

      //renderer.render(scene, camera);
    }

    // Función de animación
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // progreso 0-1

      // Actualizar posición Y de la esfera
      sphere.position.y = startY - totalDistance * progress;
      ringMesh.position.y = startY - totalDistance * progress;
      antennaGroup.position.y = startY - totalDistance * progress;
      lightsGroup.position.y = startY - totalDistance * progress;



      sphere.position.x = startX - totalDistanceX * progress;
      ringMesh.position.x = startX - totalDistanceX * progress;
      antennaGroup.position.x = startX - totalDistanceX * progress;
      lightsGroup.position.x = startX - totalDistanceX * progress;

      //gira
      lightsGroup.rotation.y += 0.04;
      //

      // Escalado: hacer zoom en la mitad y volver al tamaño normal
      if (progress < 0.5) {
        // escala de 1 a 1.5
        const scale = 1 + progress * 1; // 1 a 1.5
        sphere.scale.setScalar(scale);
        ringMesh.scale.setScalar(scale);
        antennaGroup.scale.setScalar(scale);
        lightsGroup.scale.setScalar(scale);
      } else {
        // escala de 1.5 a 1
        const scaleProgress = (progress - 0.5) * 2;
        const scale = 1.5 - 0.5 * scaleProgress;
        sphere.scale.setScalar(scale);
        ringMesh.scale.setScalar(scale);
        antennaGroup.scale.setScalar(scale);
        lightsGroup.scale.setScalar(scale);
      }

      renderer.render(scene, camera);
      renderer.setClearColor(0x000000, 0);


      lightsGroup.rotation.y += 0.006;

      // Continuar animación si no ha terminado
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Finalizar posición y tamaño
        sphere.position.y = endY;
        sphere.scale.setScalar(1);
        ringMesh.position.y = endY;
        ringMesh.scale.setScalar(1);
        antennaGroup.position.y = endY;
        antennaGroup.scale.setScalar(1);
        lightsGroup.position.y = endY;
        lightsGroup.scale.setScalar(1);

        animate2();

        renderer.render(scene, camera);
      }
    };

    // Ajustar tamaño al cambiar ventana
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Iniciar animación
    requestAnimationFrame(animate);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('resize', onResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 1,
      }}
    />
  );
};


/*
  const mountRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if (!mountRef.current) return;
 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101020);
 
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);
 
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x101020, 1);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
 
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x808080, 0.6);
    scene.add(ambientLight);
 
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);
 
    // Saucer base - 3 layered discs with different sizes and colors for detail
    const baseGroup = new THREE.Group();
 
    // Bottom disc - main body
    const bottomGeom = new THREE.CylinderGeometry(2.2, 2.2, 0.5, 48, 1, true);
    const bottomMat = new THREE.MeshStandardMaterial({
      color: 0x4477aa,
      metalness: 0.9,
      roughness: 0.25,
      side: THREE.DoubleSide,
      emissive: new THREE.Color(0x113355),
      emissiveIntensity: 0.3,
    });
    const bottomMesh = new THREE.Mesh(bottomGeom, bottomMat);
    bottomMesh.rotation.x = Math.PI / 2;
    baseGroup.add(bottomMesh);
 
    // Middle ring - smaller radius, bright color ring around, slightly raised
    const ringGeom = new THREE.TorusGeometry(1.7, 0.15, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x55ccff,
      metalness: 1,
      roughness: 0.2,
      emissive: new THREE.Color(0x33bbff),
      emissiveIntensity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.1;
    baseGroup.add(ringMesh);
 
    // Top rim with pulsing glow
    const topRimGeom = new THREE.CylinderGeometry(1.8, 1.8, 0.12, 48);
    const topRimMat = new THREE.MeshStandardMaterial({
      color: 0x99ddff,
      metalness: 1,
      roughness: 0.3,
      emissive: new THREE.Color(0x77ccff),
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.8,
    });
    const topRimMesh = new THREE.Mesh(topRimGeom, topRimMat);
    topRimMesh.position.y = 0.3;
    baseGroup.add(topRimMesh);
 
    // Dome cockpit - hemisphere with some transparency
    const domeGeom = new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0xaaddff,
      metalness: 0.8,
      roughness: 0.15,
      transparent: true,
      opacity: 0.6,
      emissive: new THREE.Color(0x88ccff),
      emissiveIntensity: 0.4,
      side: THREE.FrontSide,
    });
    const domeMesh = new THREE.Mesh(domeGeom, domeMat);
    domeMesh.position.y = 0.55;
    baseGroup.add(domeMesh);
 
    scene.add(baseGroup);
 
    // Antenna - small cylinder + sphere with emissive green light
    const antennaGroup = new THREE.Group();
 
    const antennaStemGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 12);
    const antennaStemMat = new THREE.MeshStandardMaterial({
      color: 0x44ff33,
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color(0x44ff33),
      emissiveIntensity: 0.9,
    });
    const antennaStem = new THREE.Mesh(antennaStemGeom, antennaStemMat);
    antennaStem.position.y = 1.15;
    antennaGroup.add(antennaStem);
 
    const antennaTopGeom = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaTopMat = new THREE.MeshStandardMaterial({
      color: 0x33ff77,
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color(0x33ff77),
      emissiveIntensity: 1,
    });
    const antennaTop = new THREE.Mesh(antennaTopGeom, antennaTopMat);
    antennaTop.position.y = 1.5;
    antennaGroup.add(antennaTop);
 
    scene.add(antennaGroup);
 
    // Lights dotted around rim - small spheres emitting light
    const lightsGroup = new THREE.Group();
    const lightColor = new THREE.Color(0x00ffee);
    const lightMaterial = new THREE.MeshStandardMaterial({
      color: lightColor,
      emissive: lightColor,
      emissiveIntensity: 1,
    });
    const lightGeometry = new THREE.SphereGeometry(0.07, 12, 12);
 
    const lightCount = 12;
    for (let i = 0; i < lightCount; i++) {
      const angle = (i / lightCount) * 2 * Math.PI;
      const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial.clone());
      lightMesh.position.set(Math.cos(angle) * 1.85, 0.25, Math.sin(angle) * 1.85);
      lightsGroup.add(lightMesh);
    }
    scene.add(lightsGroup);
 
    // Animation variables
    let frameId: number;
    let time = 0;
 
    const animate = () => {
      frameId = requestAnimationFrame(animate);
 
      time += 0.02;
 
      // Rotate the entire base group slowly
      baseGroup.rotation.y += 0.006;
      antennaGroup.rotation.y += 0.006;
      lightsGroup.rotation.y += 0.006;
 
      // Bobbing motion
      const bob = Math.sin(time) * 0.1;
      baseGroup.position.y = bob;
      antennaGroup.position.y = bob;
      lightsGroup.position.y = 0.25 + bob;
 
      // Pulsing light intensity on lights group
      lightsGroup.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const pulse = (Math.sin(time * 5 + index) + 1) / 2 * 0.8 + 0.2;
        (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
      });
 
      renderer.render(scene, camera);
    };
    animate();
 
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
// Clean up on unmount
return () => {
  cancelAnimationFrame(frameId);
  window.removeEventListener('resize', handleResize);

  bottomGeom.dispose();
  bottomMat.dispose();
  ringGeom.dispose();
  ringMat.dispose();
  topRimGeom.dispose();
  topRimMat.dispose();
  domeGeom.dispose();
  domeMat.dispose();
  antennaStemGeom.dispose();
  antennaStemMat.dispose();
  antennaTopGeom.dispose();
  antennaTopMat.dispose();
  lightGeometry.dispose();
  lightMaterial.dispose();

  renderer.dispose();

  if (mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
  }
};
}, []);
return (
<div
  ref={mountRef}
  style={{
    width: '100%',
    height: '600px',
    borderRadius: '20px',
    boxShadow: '0 0 25px rgba(51, 204, 255, 0.8)',
    backgroundColor: '#101020',
    marginTop: '1rem',
  }}
/>
);
};
*/

export { PlatilloVoladorMetalSlug };


