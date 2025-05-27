import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { num } from './animate-type';

const PlatilloVoladorMetalSlug: React.FC<num> = ({ startx = 0, endx = -2, starty = 5, endy = -4 }: num) => {
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
    const startY = starty;   // posición inicial Y (top)
    const endY = endy;    // posición final Y (bottom)
    const totalDistance = startY - endY; // distancia total a recorrer                                                                                                                                  
    const totalDistanceX = startX - endX; // distancia total a recorrer
    const duration = 2300; // duración de la animación en milisegundos

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
 
*/

export { PlatilloVoladorMetalSlug };


