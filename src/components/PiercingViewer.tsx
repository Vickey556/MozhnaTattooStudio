import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useFBX, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';

// Define the piercing types data
export const piercingTypesData = [
  {
    id: "earlobe",
    name: "Мочка вуха",
    price: "300",
    duration: "15 хв",
    desc: "Найпопулярніший і класичний вид пірсингу, який заживає найшвидше.",
    cameraPosition: [15, 0, 15],
    dotPosition: [9.5, -4, 2] // Approximate right earlobe
  },
  {
    id: "nostril",
    name: "Крило носа",
    price: "450",
    duration: "20 хв",
    desc: "Класичний прокол ніздрі (Nostril), виглядає дуже ніжно з маленьким камінчиком.",
    cameraPosition: [5, 2, 20],
    dotPosition: [1.5, -2, 10.5] // Approximate right nostril
  },
  {
    id: "septum",
    name: "Септум",
    price: "450",
    duration: "20 хв",
    desc: "Прокол центральної перегородки носа, який за потреби можна сховати.",
    cameraPosition: [0, 0, 20],
    dotPosition: [0, -3, 11] // Approximate septum
  },
  {
    id: "helix",
    name: "Хелікс",
    price: "500",
    duration: "20 хв",
    desc: "Прокол верхньої частини хряща вушної раковини.",
    cameraPosition: [15, 5, 10],
    dotPosition: [9, 3, 0] // Approximate upper ear cartilage
  },
  {
    id: "eyebrow",
    name: "Брова",
    price: "550",
    duration: "20 хв",
    desc: "Вертикальний або горизонтальний прокол бровної дуги.",
    cameraPosition: [10, 8, 15],
    dotPosition: [4, 6, 8.5] // Approximate right eyebrow
  },
  {
    id: "lip",
    name: "Губа (Лабрет)",
    price: "550",
    duration: "25 хв",
    desc: "Будь-який вид проколу навколо рота.",
    cameraPosition: [0, -5, 20],
    dotPosition: [0, -7, 10] // Approximate lower lip
  }
];

function Model({ activeDot }: { activeDot: number[] }) {
  // Load the FBX model
  const fbx = useFBX(import.meta.env.BASE_URL + 'woman-head/source/Woman head.fbx');

  // Clone to avoid mutating cached model
  const clonedScene = React.useMemo(() => fbx.clone(true), [fbx]);

  // Apply a stylized dark matte material to all meshes
  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#1a2214', // Dark green-ish tint matching the brand
          roughness: 0.7,
          metalness: 0.1,
        });
      }
    });
  }, [clonedScene]);

  // Adjust model scale and position based on FBX specifics
  return (
    <group position={[0, -10, 0]} scale={0.25}>
      <primitive object={clonedScene} />

      {/* Hotspot Dot */}
      <mesh position={new THREE.Vector3(...activeDot)}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#b6ff40" />

        {/* Glow effect */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#b6ff40" transparent opacity={0.3} />
        </mesh>
      </mesh>
    </group>
  );
}

function CameraRig({ activeCam }: { activeCam: number[] }) {
  useFrame((state) => {
    // Smoothly interpolate camera position to the target
    state.camera.position.lerp(new THREE.Vector3(...activeCam), 0.05);
    state.camera.lookAt(0, 0, 0); // Always look at center
  });
  return null;
}

interface PiercingViewerProps {
  onBook: () => void;
}

export const PiercingViewer: React.FC<PiercingViewerProps> = ({ onBook }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeType = piercingTypesData[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + piercingTypesData.length) % piercingTypesData.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % piercingTypesData.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold uppercase mb-12 tracking-widest text-center text-[#EBEBDF]">Види пірсингу</h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">

        {/* Navigation & 3D Container */}
        <div className="flex items-center justify-center gap-4 w-full lg:w-2/3">
          <button onClick={handlePrev} className="w-12 h-12 flex-shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#6F892E] transition-colors z-10 backdrop-blur-md bg-black/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="w-full aspect-[3/4] md:aspect-square lg:aspect-[4/3] rounded-[40px] overflow-hidden bg-gradient-to-b from-[#122110] to-[#040902] shadow-2xl border border-[#73934A]/30 relative cursor-grab active:cursor-grabbing">
            <Canvas shadows camera={{ position: [0, 0, 25], fov: 45 }}>
              <Environment preset="studio" environmentIntensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} color="#73934A" />
              <directionalLight position={[-10, 10, -10]} intensity={1} color="#ffffff" />
              <ambientLight intensity={0.5} />
              <React.Suspense fallback={<Html center><span className="text-[#6F892E] font-serif text-xl tracking-widest uppercase">Завантаження 3D...</span></Html>}>
                <Model activeDot={activeType.dotPosition} />
                <CameraRig activeCam={activeType.cameraPosition} />
              </React.Suspense>
              <ContactShadows position={[0, -10, 0]} opacity={0.5} scale={40} blur={2} far={10} />
            </Canvas>
          </div>

          <button onClick={handleNext} className="w-12 h-12 flex-shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#6F892E] transition-colors z-10 backdrop-blur-md bg-black/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:w-1/3 flex flex-col p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#EBEBDF]">{activeType.name}</h3>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-[#73934A]/20">
              <span className="font-serif opacity-70">Вартість:</span>
              <span className="font-serif text-2xl text-[#6F892E]">{activeType.price} грн</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#73934A]/20">
              <span className="font-serif opacity-70">Час виконання:</span>
              <span className="font-serif text-xl text-[#EBEBDF]">{activeType.duration}</span>
            </div>
          </div>

          <p className="font-serif opacity-80 leading-relaxed text-sm md:text-base mb-8 min-h-[80px]">
            {activeType.desc}
          </p>

          <button
            onClick={onBook}
            className="w-full py-4 bg-[#6F892E] text-[#122110] font-serif uppercase tracking-widest rounded-full hover:bg-white transition-colors text-center font-bold"
          >
            Записатися на прокол
          </button>
        </div>
      </div>
    </div>
  );
};
