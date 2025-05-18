import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Tux3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0f2fe);

    // Camera setup
    const width = 350;
    const height = 600;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.minDistance = 2;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI / 1.8;
    // Disable zoom functionality
    controls.enableZoom = false;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Group to hold the whole Tux model for rotation
    const tuxGroup = new THREE.Group();
    scene.add(tuxGroup);

    // Helper function to create a sphere
    function createSphere(radius: number, color: number) {
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      return mesh;
    }

    // Helper function to create a cone
    function createCone(radius: number, height: number, color: number) {
      const geometry = new THREE.ConeGeometry(radius, height, 32);
      const material = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      return mesh;
    }

    // Helper function to create a cylinder
    function createCylinder(radiusTop: number, radiusBottom: number, height: number, color: number) {
      const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 32);
      const material = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      return mesh;
    }

    // Main Tux model construction, added to tuxGroup:

    // Main body - black big sphere
    const body = createSphere(1, 0x000000);
    body.position.y = 0;
    tuxGroup.add(body);

    // Belly - white smaller sphere, front shifted
    const belly = createSphere(0.80, 0xffffff);
    belly.position.set(0, -0.0, 0.3);
    tuxGroup.add(belly);

    // Head - smaller black sphere on top
    const head = createSphere(0.6, 0x000000);
    head.position.set(0, 1.1, 0.1);
    tuxGroup.add(head);

    // Face patch - white sphere on face
    const facePatch = createSphere(0.5, 0xffffff);
    facePatch.position.set(0, 1.15, 0.3);
    tuxGroup.add(facePatch);

    // Eyes white base
    const eyeLeft = createSphere(0.12, 0xffffff);
    eyeLeft.position.set(-0.18, 1.3, 0.65);
    tuxGroup.add(eyeLeft);
    const eyeRight = createSphere(0.12, 0xffffff);
    eyeRight.position.set(0.18, 1.3, 0.65);
    tuxGroup.add(eyeRight);

    // Pupils black smaller spheres
    const pupilLeft = createSphere(0.06, 0x000000);
    pupilLeft.position.set(-0.18, 1.3, 0.75);
    tuxGroup.add(pupilLeft);
    const pupilRight = createSphere(0.06, 0x000000);
    pupilRight.position.set(0.18, 1.3, 0.75);
    tuxGroup.add(pupilRight);

    // Beak - orange cone
    const beak = createCone(0.12, 0.25, 0xffa500);
    beak.position.set(0, 1.1, 0.85);
    beak.rotation.x = Math.PI / 2;
    tuxGroup.add(beak);

    // Feet - orange cylinders flattened
    const footLeft = createCylinder(0.15, 0.15, 0.1, 0xffa500);
    footLeft.position.set(-0.5, -0.9, 0.3);
    footLeft.rotation.x = Math.PI / 2;
    tuxGroup.add(footLeft);
    const footRight = createCylinder(0.15, 0.15, 0.1, 0xffa500);
    footRight.position.set(0.5, -0.9, 0.3);
    footRight.rotation.x = Math.PI / 2;
    tuxGroup.add(footRight);

    // Wings - black half spheres at sides
    const wingLeft = createSphere(0.65, 0x000000);
    wingLeft.position.set(-0.82, 0.2, 0);
    wingLeft.scale.set(0.4, 1, 0.5);
    wingLeft.rotation.z = Math.PI / -6;
    tuxGroup.add(wingLeft);
    const wingRight = createSphere(0.65, 0x000000);
    wingRight.position.set(0.82, 0.2, 0);
    wingRight.scale.set(0.4, 1, 0.5);
    wingRight.rotation.z = -Math.PI / -6;
    tuxGroup.add(wingRight);

    // Shadow plane beneath
    const shadowGeometry = new THREE.CircleGeometry(1.2, 32);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.15 });
    const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.0;
    shadow.receiveShadow = true;
    scene.add(shadow);

    // Animation loop with continuous rotation + orbit controls
    const animate = () => {
      requestAnimationFrame(animate);
      tuxGroup.rotation.y += 0.01; // rotate slowly around Y axis
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      controls.dispose();
      renderer.dispose();
      scene.clear();
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
        height: '400px',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        touchAction: 'none',
        userSelect: 'none',
        zIndex: '0',
        position: 'absolute',
        top: 0,
        left: 90,
        cursor: 'grab',
      }}
    />
  );
};

export default Tux3D;


