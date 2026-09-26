import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';

export default function MinecraftDiorama3D() {
  const mountRef = useRef(null);
  const [hissText, setHissText] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene, camera, renderer, animId;

    try {
      scene = new THREE.Scene();

      // Sunny daytime Overworld lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xfff4c2, 1.4);
      sunLight.position.set(8, 14, 10);
      scene.add(sunLight);

      const skyFill = new THREE.DirectionalLight(0x78a7ff, 0.5);
      skyFill.position.set(-8, -4, -6);
      scene.add(skyFill);

      const width = mount.clientWidth || 600;
      const height = mount.clientHeight || 450;
      camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
      camera.position.set(9, 7.5, 12);
      camera.lookAt(0, 0.5, 0);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      mount.appendChild(renderer.domElement);

      const worldGroup = new THREE.Group();
      scene.add(worldGroup);

      const createMat = (color) => new THREE.MeshLambertMaterial({ color });

      // 1. ISOMETRIC OVERWORLD CLIFF & TERRAIN (Inspired by Minecraft.net)
      const terrainGroup = new THREE.Group();
      worldGroup.add(terrainGroup);

      // Stone Cliff Base
      const stoneGeo = new THREE.BoxGeometry(7, 2.5, 6);
      const stoneMat = createMat(0x6e6e6e);
      const stoneMesh = new THREE.Mesh(stoneGeo, stoneMat);
      stoneMesh.position.set(0, -1.5, 0);
      terrainGroup.add(stoneMesh);

      // Dirt Layer
      const dirtGeo = new THREE.BoxGeometry(7.1, 1.2, 6.1);
      const dirtMat = createMat(0x866043);
      const dirtMesh = new THREE.Mesh(dirtGeo, dirtMat);
      dirtMesh.position.set(0, 0.2, 0);
      terrainGroup.add(dirtMesh);

      // Grass Top Layer
      const grassTopGeo = new THREE.BoxGeometry(7.2, 0.4, 6.2);
      const grassTopMat = createMat(0x5b8c32);
      const grassTopMesh = new THREE.Mesh(grassTopGeo, grassTopMat);
      grassTopMesh.position.set(0, 0.9, 0);
      terrainGroup.add(grassTopMesh);

      // Stepped Hill on the Left
      const hillDirt = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 3.2), dirtMat);
      hillDirt.position.set(-2, 1.5, -1.2);
      terrainGroup.add(hillDirt);

      const hillGrass = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.35, 3.3), grassTopMat);
      hillGrass.position.set(-2, 2.1, -1.2);
      terrainGroup.add(hillGrass);

      // Blue Waterfall Cascade flowing down cliff
      const waterMat = new THREE.MeshLambertMaterial({
        color: 0x2e6fdf,
        transparent: true,
        opacity: 0.88,
      });

      const waterTop = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.38, 2.2), waterMat);
      waterTop.position.set(0.6, 0.95, 1.5);
      terrainGroup.add(waterTop);

      const waterFall = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.8, 0.4), waterMat);
      waterFall.position.set(0.6, -0.4, 3.1);
      terrainGroup.add(waterFall);

      // 2. CHERRY BLOSSOM TREE (Like Image 2!)
      const treeGroup = new THREE.Group();
      treeGroup.position.set(-2.2, 2.2, -1.2);

      // Wood trunk
      const trunkMat = createMat(0x422a1d);
      const trunk = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.2, 0.55), trunkMat);
      trunk.position.set(0, 1.1, 0);
      treeGroup.add(trunk);

      // Cherry pink blossom foliage cubes
      const pinkMat1 = createMat(0xf48fb1); // Soft pink
      const pinkMat2 = createMat(0xf06292); // Vivid cherry pink
      const pinkMat3 = createMat(0xf8bbd0); // Light pastel pink

      const blossom1 = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.1, 2.4), pinkMat1);
      blossom1.position.set(0, 2.4, 0);
      treeGroup.add(blossom1);

      const blossom2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), pinkMat2);
      blossom2.position.set(0, 3.1, 0);
      treeGroup.add(blossom2);

      const blossom3 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.8), pinkMat3);
      blossom3.position.set(0.9, 2.1, 0.7);
      treeGroup.add(blossom3);

      terrainGroup.add(treeGroup);

      // 3. COZY WOODEN CABIN / HUT (From Image 2)
      const cabinGroup = new THREE.Group();
      cabinGroup.position.set(1.8, 1.1, -1.2);

      // Oak wood planks body
      const oakMat = createMat(0x9c6f3e);
      const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 1.8), oakMat);
      cabinBody.position.set(0, 0.7, 0);
      cabinGroup.add(cabinBody);

      // Dark oak roof
      const roofMat = createMat(0x4e3524);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 2.2), roofMat);
      roof.position.set(0, 1.5, 0);
      cabinGroup.add(roof);

      // Glowing warm window
      const windowMat = createMat(0xffe082);
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.05), windowMat);
      win.position.set(0, 0.8, 0.92);
      cabinGroup.add(win);

      terrainGroup.add(cabinGroup);

      // 4. THE CREEPER (Hostile Mob - Mandatory!)
      const creeperGroup = new THREE.Group();
      creeperGroup.position.set(-0.2, 1.1, 0.6);
      worldGroup.add(creeperGroup);

      const creeperGreen = createMat(0x43a047);
      const creeperDarkGreen = createMat(0x2e7d32);
      const creeperBlack = createMat(0x1a1a1a);

      // Creeper Body
      const creeperBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.1, 0.4), creeperGreen);
      creeperBody.position.set(0, 1.0, 0);
      creeperGroup.add(creeperBody);

      // Creeper Head
      const creeperHeadGroup = new THREE.Group();
      creeperHeadGroup.position.set(0, 1.85, 0);

      const headGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
      const creeperHead = new THREE.Mesh(headGeo, creeperGreen);
      creeperHeadGroup.add(creeperHead);

      // Iconic Creeper Face (Eyes + Mouth Frown)
      // Left eye
      const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.04), creeperBlack);
      eyeL.position.set(-0.2, 0.12, 0.44);
      creeperHeadGroup.add(eyeL);

      // Right eye
      const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.04), creeperBlack);
      eyeR.position.set(0.2, 0.12, 0.44);
      creeperHeadGroup.add(eyeR);

      // Nose / Center mouth
      const nose = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.22, 0.04), creeperBlack);
      nose.position.set(0, -0.05, 0.44);
      creeperHeadGroup.add(nose);

      // Mouth Left
      const mouthL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.26, 0.04), creeperBlack);
      mouthL.position.set(-0.14, -0.18, 0.44);
      creeperHeadGroup.add(mouthL);

      // Mouth Right
      const mouthR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.26, 0.04), creeperBlack);
      mouthR.position.set(0.14, -0.18, 0.44);
      creeperHeadGroup.add(mouthR);

      creeperGroup.add(creeperHeadGroup);

      // Creeper 4 Legs
      const legGeo = new THREE.BoxGeometry(0.28, 0.5, 0.28);
      const legFL = new THREE.Mesh(legGeo, creeperDarkGreen);
      legFL.position.set(-0.2, 0.25, 0.18);
      creeperGroup.add(legFL);

      const legFR = new THREE.Mesh(legGeo, creeperDarkGreen);
      legFR.position.set(0.2, 0.25, 0.18);
      creeperGroup.add(legFR);

      const legBL = new THREE.Mesh(legGeo, creeperDarkGreen);
      legBL.position.set(-0.2, 0.25, -0.18);
      creeperGroup.add(legBL);

      const legBR = new THREE.Mesh(legGeo, creeperDarkGreen);
      legBR.position.set(0.2, 0.25, -0.18);
      creeperGroup.add(legBR);

      // 5. CUTE FRIENDLY MINECRAFT PIG
      const pigGroup = new THREE.Group();
      pigGroup.position.set(-1.2, 1.1, 1.6);
      worldGroup.add(pigGroup);

      const pigPink = createMat(0xf8a5c2);
      const pigDarkPink = createMat(0xe77f9d);
      const pigEyes = createMat(0x000000);
      const pigWhite = createMat(0xffffff);

      // Pig Body
      const pigBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.55, 0.9), pigPink);
      pigBody.position.set(0, 0.45, 0);
      pigGroup.add(pigBody);

      // Pig Head & Snout
      const pigHead = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), pigPink);
      pigHead.position.set(0, 0.65, 0.55);

      const snout = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.08), pigDarkPink);
      snout.position.set(0, -0.06, 0.28);
      pigHead.add(snout);

      // Eyes
      const pEyeL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), pigEyes);
      pEyeL.position.set(-0.18, 0.08, 0.26);
      pigHead.add(pEyeL);

      const pEyeR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), pigEyes);
      pEyeR.position.set(0.18, 0.08, 0.26);
      pigHead.add(pEyeR);

      pigGroup.add(pigHead);

      // Pig Legs
      const pLegGeo = new THREE.BoxGeometry(0.18, 0.3, 0.18);
      const pLegs = [
        [-0.2, 0.15, 0.3],
        [0.2, 0.15, 0.3],
        [-0.2, 0.15, -0.3],
        [0.2, 0.15, -0.3],
      ];
      pLegs.forEach(([x, y, z]) => {
        const leg = new THREE.Mesh(pLegGeo, pigPink);
        leg.position.set(x, y, z);
        pigGroup.add(leg);
      });

      // 6. INTERACTION & ANIMATION
      let targetRotationY = 0.4;
      let isDragging = false;
      let previousMouseX = 0;
      let hissTimer = 0;

      const onMouseDown = (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
      };

      const onMouseMove = (e) => {
        if (isDragging) {
          const deltaX = e.clientX - previousMouseX;
          targetRotationY += deltaX * 0.012;
          previousMouseX = e.clientX;
        }
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      const onClick = () => {
        sound.playHiss();
        setHissText(true);
        hissTimer = 1.2;
        setTimeout(() => setHissText(false), 2000);
      };

      mount.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      mount.addEventListener('click', onClick);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Slow cinematic rotation
        if (!isDragging) {
          targetRotationY += 0.002;
        }
        worldGroup.rotation.y += (targetRotationY - worldGroup.rotation.y) * 0.08;

        // Creeper subtle breathing / walking animation
        const creeperBob = Math.sin(elapsedTime * 3) * 0.04;
        creeperGroup.position.y = 1.1 + Math.abs(creeperBob);
        legFL.rotation.x = Math.sin(elapsedTime * 3) * 0.25;
        legFR.rotation.x = -Math.sin(elapsedTime * 3) * 0.25;
        legBL.rotation.x = -Math.sin(elapsedTime * 3) * 0.25;
        legBR.rotation.x = Math.sin(elapsedTime * 3) * 0.25;

        // Creeper head twitch
        creeperHeadGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.2;

        // If clicked, flash white/expand slightly like a priming Creeper!
        if (hissTimer > 0) {
          hissTimer -= 0.03;
          const scale = 1 + Math.sin(hissTimer * Math.PI * 4) * 0.08;
          creeperGroup.scale.set(scale, scale, scale);
        } else {
          creeperGroup.scale.set(1, 1, 1);
        }

        // Pig gentle idle breathing
        pigGroup.position.y = 1.1 + Math.sin(elapsedTime * 2 + 1) * 0.02;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!mount || !renderer || !camera) return;
        const w = mount.clientWidth || 600;
        const h = mount.clientHeight || 450;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        if (animId) cancelAnimationFrame(animId);
        mount.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
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
      console.error('ThreeJS Diorama Error:', err);
    }
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Interactive Creeper Tooltip */}
      {hissText && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 border-2 border-red-500 text-red-400 font-minecraft text-xs px-4 py-2 shadow-2xl animate-bounce">
          💥 SSSSSSSS...! (Creeper primed!)
        </div>
      )}

      {/* Floating Instruction Badge */}
      <div className="absolute bottom-3 px-3 py-1 bg-black/70 border border-white/20 text-white font-minecraft text-[10px] tracking-wider uppercase rounded shadow pointer-events-none">
        Click Creeper to Hiss • Drag to Rotate Diorama
      </div>
    </div>
  );
}
