import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';

export default function MinecraftCharacter3D() {
  const mountRef = useRef(null);
  const characterGroupRef = useRef(null);
  const headRef = useRef(null);
  const rightArmRef = useRef(null);
  const leftArmRef = useRef(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene, camera, renderer, animId;

    try {
      // Scene
      scene = new THREE.Scene();
      
      // Pixel-perfect lighting matching Minecraft daytime
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xfff7d6, 1.2);
      dirLight.position.set(5, 10, 7);
      scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight(0x78a7ff, 0.4);
      fillLight.position.set(-5, -2, -5);
      scene.add(fillLight);

      const width = mount.clientWidth || 380;
      const height = mount.clientHeight || 380;
      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 2.5, 9.5);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      mount.appendChild(renderer.domElement);

      // Root Group for Character and Pedestal
      const worldGroup = new THREE.Group();
      scene.add(worldGroup);

      // 1. ISOMETRIC GRASS BLOCK PEDESTAL
      const grassGroup = new THREE.Group();
      grassGroup.position.set(0, -2.6, 0);

      // Dirt base
      const dirtGeo = new THREE.BoxGeometry(3.6, 1.8, 3.6);
      const dirtMat = new THREE.MeshLambertMaterial({ color: 0x866043 });
      const dirtMesh = new THREE.Mesh(dirtGeo, dirtMat);
      grassGroup.add(dirtMesh);

      // Grass Top
      const grassTopGeo = new THREE.BoxGeometry(3.64, 0.4, 3.64);
      const grassTopMat = new THREE.MeshLambertMaterial({ color: 0x5b8c32 });
      const grassTopMesh = new THREE.Mesh(grassTopGeo, grassTopMat);
      grassTopMesh.position.y = 0.8;
      grassGroup.add(grassTopMesh);

      // Flower on grass
      const flowerStemGeo = new THREE.BoxGeometry(0.1, 0.5, 0.1);
      const flowerStemMat = new THREE.MeshLambertMaterial({ color: 0x3e6120 });
      const flowerStem = new THREE.Mesh(flowerStemGeo, flowerStemMat);
      flowerStem.position.set(1.2, 1.1, 1.1);
      grassGroup.add(flowerStem);

      const flowerPetalGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const flowerPetalMat = new THREE.MeshLambertMaterial({ color: 0xff3333 });
      const flowerPetal = new THREE.Mesh(flowerPetalGeo, flowerPetalMat);
      flowerPetal.position.set(1.2, 1.4, 1.1);
      grassGroup.add(flowerPetal);

      worldGroup.add(grassGroup);

      // 2. MINECRAFT CHARACTER
      const charGroup = new THREE.Group();
      charGroup.position.y = -1.4;
      characterGroupRef.current = charGroup;
      worldGroup.add(charGroup);

      const createMat = (color) => new THREE.MeshLambertMaterial({ color });

      const skinMat = createMat(0xdbad84);
      const hairMat = createMat(0x382212);
      const eyeWhiteMat = createMat(0xffffff);
      const eyePupilMat = createMat(0x28479e);
      const mouthMat = createMat(0x945b4b);
      const hoodieMat = createMat(0x1976d2);
      const hoodieAccentMat = createMat(0x43a047);
      const pantsMat = createMat(0x273b52);
      const bootsMat = createMat(0x424242);

      // HEAD GROUP
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 2.5, 0);
      headRef.current = headGroup;

      const headBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), skinMat);
      headGroup.add(headBase);

      const hairTop = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.4, 1.24), hairMat);
      hairTop.position.set(0, 0.45, 0);
      headGroup.add(hairTop);

      const hairBack = new THREE.Mesh(new THREE.BoxGeometry(1.24, 1.24, 0.3), hairMat);
      hairBack.position.set(0, 0, -0.48);
      headGroup.add(hairBack);

      // Eyes
      const leftEyeWhite = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.04), eyeWhiteMat);
      leftEyeWhite.position.set(-0.3, 0.05, 0.61);
      headGroup.add(leftEyeWhite);

      const leftPupil = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.05), eyePupilMat);
      leftPupil.position.set(-0.24, 0.05, 0.62);
      headGroup.add(leftPupil);

      const rightEyeWhite = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.04), eyeWhiteMat);
      rightEyeWhite.position.set(0.3, 0.05, 0.61);
      headGroup.add(rightEyeWhite);

      const rightPupil = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.05), eyePupilMat);
      rightPupil.position.set(0.36, 0.05, 0.62);
      headGroup.add(rightPupil);

      // Mouth
      const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.04), mouthMat);
      mouth.position.set(0, -0.25, 0.61);
      headGroup.add(mouth);

      charGroup.add(headGroup);

      // TORSO
      const torsoGroup = new THREE.Group();
      torsoGroup.position.set(0, 1.2, 0);

      const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 0.6), hoodieMat);
      torsoGroup.add(torsoMesh);

      const chestBadge = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.04), hoodieAccentMat);
      chestBadge.position.set(0, 0.1, 0.31);
      torsoGroup.add(chestBadge);

      charGroup.add(torsoGroup);

      // RIGHT ARM & HELD DIAMOND PICKAXE
      const rightArmGroup = new THREE.Group();
      rightArmGroup.position.set(0.9, 1.7, 0);
      rightArmRef.current = rightArmGroup;

      const armGeo = new THREE.BoxGeometry(0.5, 1.4, 0.5);
      const armMesh = new THREE.Mesh(armGeo, hoodieMat);
      armMesh.position.set(0, -0.5, 0);
      rightArmGroup.add(armMesh);

      const handMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.5), skinMat);
      handMesh.position.set(0, -1.1, 0);
      rightArmGroup.add(handMesh);

      // Diamond Pickaxe
      const pickaxeGroup = new THREE.Group();
      pickaxeGroup.position.set(0, -1.1, 0.3);
      pickaxeGroup.rotation.set(0.6, 0, -0.2);

      const handleMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), createMat(0x6d4c28));
      handleMesh.position.set(0, 0.4, 0);
      pickaxeGroup.add(handleMesh);

      const pickHeadMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.18, 0.12), createMat(0x4deeea));
      pickHeadMesh.position.set(0, 0.95, 0);
      pickaxeGroup.add(pickHeadMesh);

      rightArmGroup.add(pickaxeGroup);
      charGroup.add(rightArmGroup);

      // LEFT ARM
      const leftArmGroup = new THREE.Group();
      leftArmGroup.position.set(-0.9, 1.7, 0);
      leftArmRef.current = leftArmGroup;

      const leftArmMesh = new THREE.Mesh(armGeo, hoodieMat);
      leftArmMesh.position.set(0, -0.5, 0);
      leftArmGroup.add(leftArmMesh);

      const leftHandMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.5), skinMat);
      leftHandMesh.position.set(0, -1.1, 0);
      leftArmGroup.add(leftHandMesh);

      charGroup.add(leftArmGroup);

      // LEGS
      const legGeo = new THREE.BoxGeometry(0.55, 1.4, 0.55);

      const leftLegGroup = new THREE.Group();
      leftLegGroup.position.set(-0.32, 0.3, 0);
      const leftLeg = new THREE.Mesh(legGeo, pantsMat);
      leftLeg.position.set(0, -0.5, 0);
      leftLegGroup.add(leftLeg);
      const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.35, 0.56), bootsMat);
      leftBoot.position.set(0, -1.05, 0);
      leftLegGroup.add(leftBoot);
      charGroup.add(leftLegGroup);

      const rightLegGroup = new THREE.Group();
      rightLegGroup.position.set(0.32, 0.3, 0);
      const rightLeg = new THREE.Mesh(legGeo, pantsMat);
      rightLeg.position.set(0, -0.5, 0);
      rightLegGroup.add(rightLeg);
      const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.35, 0.56), bootsMat);
      rightBoot.position.set(0, -1.05, 0);
      rightLegGroup.add(rightBoot);
      charGroup.add(rightLegGroup);

      // Mouse tracking state
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationY = 0.35;
      let isDragging = false;
      let previousMouseX = 0;
      let jumpTime = 0;

      const onMouseMove = (e) => {
        if (!mount) return;
        const rect = mount.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        mouseX = (clientX / rect.width) * 2 - 1;
        mouseY = -(clientY / rect.height) * 2 + 1;

        if (isDragging) {
          const deltaX = e.clientX - previousMouseX;
          targetRotationY += deltaX * 0.015;
          previousMouseX = e.clientX;
        }
      };

      const onMouseDown = (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      const onClick = () => {
        sound.playOrb();
        jumpTime = 1;
      };

      window.addEventListener('mousemove', onMouseMove);
      mount.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      mount.addEventListener('click', onClick);

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (!isDragging) {
          targetRotationY += 0.003;
        }
        worldGroup.rotation.y += (targetRotationY - worldGroup.rotation.y) * 0.08;

        if (headRef.current) {
          headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 0.5, 0.1);
          headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 0.3, 0.1);
        }

        const breathing = Math.sin(elapsedTime * 2) * 0.05;
        if (rightArmRef.current) {
          rightArmRef.current.rotation.x = 0.2 + Math.sin(elapsedTime * 2) * 0.08;
        }
        if (leftArmRef.current) {
          leftArmRef.current.rotation.x = -0.2 - Math.sin(elapsedTime * 2) * 0.08;
        }

        if (jumpTime > 0) {
          jumpTime -= 0.04;
          const jumpOffset = Math.sin(jumpTime * Math.PI) * 0.8;
          charGroup.position.y = -1.4 + Math.max(0, jumpOffset);
          if (rightArmRef.current) {
            rightArmRef.current.rotation.z = Math.sin(jumpTime * Math.PI) * 0.8;
          }
        } else {
          charGroup.position.y = -1.4 + breathing;
        }

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!mount || !renderer || !camera) return;
        const w = mount.clientWidth || 380;
        const h = mount.clientHeight || 380;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMouseMove);
        mount.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
        mount.removeEventListener('click', onClick);
        window.removeEventListener('resize', handleResize);
        if (mount && renderer && renderer.domElement) {
          try {
            mount.removeChild(renderer.domElement);
          } catch {
            // Already unmounted
          }
        }
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.error('Failed to initialize Three.js character:', err);
      setWebglError(true);
    }
  }, []);

  if (webglError) {
    return (
      <div className="relative w-full h-[380px] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-32 h-32 bg-[#866043] border-4 border-[#5B8C32] flex items-center justify-center text-5xl shadow-2xl mb-3">
          🧑‍💻
        </div>
        <div className="font-minecraft text-xs text-white bg-black/80 px-3 py-1.5 border border-white/20">
          Skin: Aditya Kumar [Voxel Mode]
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-2 px-3 py-1 bg-black/60 border border-white/20 text-white font-minecraft text-[10px] tracking-wider uppercase rounded pointer-events-none">
        Click to jump • Drag to rotate
      </div>
    </div>
  );
}
