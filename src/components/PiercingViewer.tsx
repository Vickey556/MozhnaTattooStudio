import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useFBX, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

// Define the piercing types data
export const piercingTypesData = [
  // ВУШНІ ПРОКОЛИ (ПРАВЕ ВУХО ДЛЯ ПРИКЛАДУ, X ~ 9..10)
  {
    id: "lobe",
    name: "Мочка (Lobe)",
    price: "від 300",
    duration: "15 хв",
    desc: "Класичний прокол м'якої нижньої частини вуха.",
    cameraPosition: [12, -2, 12],
    dotPosition: [9, 24, 2]
  },
  {
    id: "helix",
    name: "Хелікс (Helix)",
    price: "від 500",
    duration: "20 хв",
    desc: "Прокол завитка вушної раковини (верхня частина хряща).",
    cameraPosition: [12, 3, 12],
    dotPosition: [11, 28, 0]
  },
  {
    id: "forward_helix",
    name: "Форвард Хелікс (Forward Helix)",
    price: "від 500",
    duration: "20 хв",
    desc: "Розташований на протилежному боці від звичайного хелікса, ближче до обличчя, над козелком.",
    cameraPosition: [12, 2, 14],
    dotPosition: [8, 28, 0]
  },
  {
    id: "industrial",
    name: "Індастріал (Industrial)",
    price: "від 700",
    duration: "30 хв",
    desc: "Подвійний прокол хряща, з’єднаний однією прямою штангою (зазвичай у верхній частині вуха).",
    cameraPosition: [14, 4, 10],
    dotPosition: [9, 4, 1]
  },
  {
    id: "tragus",
    name: "Трагус / Козелок (Tragus)",
    price: "від 500",
    duration: "20 хв",
    desc: "Прокол маленького виступу хряща, що знаходиться перед входом у вушний канал.",
    cameraPosition: [12, -1, 14],
    dotPosition: [9.2, -1, 3.5]
  },
  {
    id: "antitragus",
    name: "Антитрагус (Antitragus)",
    price: "від 550",
    duration: "20 хв",
    desc: "Прокол хрящового виступу навпроти козелка, трохи вище мочки.",
    cameraPosition: [12, -2, 12],
    dotPosition: [9.6, -2, 2.5]
  },
  {
    id: "daith",
    name: "Дейс (Daith)",
    price: "від 550",
    duration: "25 хв",
    desc: "Прокол внутрішнього хряща, що знаходиться безпосередньо над вушним каналом.",
    cameraPosition: [14, 0, 12],
    dotPosition: [8.8, 0, 3]
  },
  {
    id: "rook",
    name: "Рук (Rook)",
    price: "від 550",
    duration: "25 хв",
    desc: "Прокол верхньої внутрішньої складки хряща.",
    cameraPosition: [14, 1.5, 12],
    dotPosition: [8.5, 1.5, 2]
  },
  {
    id: "conch",
    name: "Конч (Conch)",
    price: "від 500",
    duration: "20 хв",
    desc: "Прокол центральної частини вушної раковини («чаші»). Буває внутрішній та зовнішній.",
    cameraPosition: [14, 0, 10],
    dotPosition: [9.3, -0.5, 1.5]
  },

  // ПРОКОЛИ ОБЛИЧЧЯ
  {
    id: "eyebrow",
    name: "Вертикальний (Брова)",
    price: "від 550",
    duration: "20 хв",
    desc: "Класичний прокол, що проходить вертикально через край брови.",
    cameraPosition: [5, 8, 18],
    dotPosition: [4, 6, 8.5]
  },
  {
    id: "bridge",
    name: "Бридж (Bridge)",
    price: "від 600",
    duration: "20 хв",
    desc: "Горизонтальний прокол перенісся на рівні очей.",
    cameraPosition: [0, 6, 20],
    dotPosition: [0, 4.5, 9]
  },
  {
    id: "nostril",
    name: "Ніздря (Nostril)",
    price: "від 450",
    duration: "20 хв",
    desc: "Прокол одного або обох крил носа.",
    cameraPosition: [5, 2, 20],
    dotPosition: [2, -1.5, 10.5]
  },
  {
    id: "septum",
    name: "Септум (Septum)",
    price: "від 450",
    duration: "20 хв",
    desc: "Прокол центральної носової перегородки між ніздрями.",
    cameraPosition: [0, 0, 20],
    dotPosition: [0, -2.5, 11]
  },
  {
    id: "labret",
    name: "Лабрет (Labret)",
    price: "від 550",
    duration: "20 хв",
    desc: "Прокол нижньої губи по центру.",
    cameraPosition: [0, -6, 20],
    dotPosition: [0, -7, 10]
  },
  {
    id: "vertical_labret",
    name: "Вертикальний лабрет",
    price: "від 600",
    duration: "25 хв",
    desc: "Проходить вертикально крізь губу (одна кулька зверху на губі, інша — під нею).",
    cameraPosition: [0, -5, 20],
    dotPosition: [0, -6.2, 10.5]
  },
  {
    id: "snake_bites",
    name: "Зміїний укус (Snake Bites)",
    price: "від 900",
    duration: "40 хв",
    desc: "Два симетричні проколи по боках нижньої губи.",
    cameraPosition: [0, -6, 20],
    dotPosition: [2, -6.8, 9.8] // Showing one side for visual simplicity, or we could add multiple dots if the component supported it. We'll show one right side dot.
  },
  {
    id: "angel_bites",
    name: "Ангельський укус (Angel Bites)",
    price: "від 900",
    duration: "40 хв",
    desc: "Два симетричні проколи по боках верхньої губи.",
    cameraPosition: [0, -4, 20],
    dotPosition: [2, -4.5, 10.2]
  },
  {
    id: "spider_bites",
    name: "Укус павука (Spider Bites)",
    price: "від 900",
    duration: "40 хв",
    desc: "Два проколи поруч з одного боку нижньої губи.",
    cameraPosition: [4, -6, 20],
    dotPosition: [2.5, -6.8, 9.5]
  },
  {
    id: "smile",
    name: "Смайл (Smile)",
    price: "від 550",
    duration: "20 хв",
    desc: "Прокол вуздечки верхньої губи (видно тільки при посмішці).",
    cameraPosition: [0, -4, 18],
    dotPosition: [0, -5.2, 9.5] // Roughly upper teeth area behind lip
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
    <group position={[0, -8, 0]} scale={0.30}>
      <primitive object={clonedScene} />

      {/* Hotspot Dot - Much brighter and larger */}
      <mesh position={new THREE.Vector3(...activeDot)}
        renderOrder={999}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#b6ff40" depthTest={false} />

        {/* Inner intense glow */}
        <mesh>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshBasicMaterial color="#b6ff40" depthTest={false} transparent opacity={0.6} />
        </mesh>

        {/* Outer soft glow */}
        <mesh>
          <sphereGeometry args={[2.0, 32, 32]} />
          <meshBasicMaterial color="#b6ff40" depthTest={false} transparent opacity={0.2} />
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
      <h2 className="text-3xl font-bold uppercase mb-12 tracking-widest text-center text-[#EBEBDF]"></h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">

        {/* Navigation & 3D Container */}
        <div className="flex items-center justify-center gap-4 w-full lg:w-2/3">
          <button onClick={handlePrev} className="w-12 h-12 flex-shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#6F892E] transition-colors z-10 backdrop-blur-md bg-black/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="w-full aspect-[3/4] md:aspect-square lg:aspect-[4/3] rounded-[40px] overflow-hidden bg-transparent relative cursor-grab active:cursor-grabbing">
            <Canvas shadows camera={{ position: [0, 0, 25], fov: 45 }} gl={{ alpha: true }}>
              <Environment preset="studio" environmentIntensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} color="#73934A" />
              <directionalLight position={[-10, 10, -10]} intensity={1} color="#ffffff" />
              <ambientLight intensity={0.5} />
              <React.Suspense fallback={<Html center><span className="text-[#6F892E] font-serif text-xl tracking-widest uppercase">Завантаження 3D...</span></Html>}>
                <Model activeDot={activeType.dotPosition} />
                <CameraRig activeCam={activeType.cameraPosition} />
              </React.Suspense>
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
