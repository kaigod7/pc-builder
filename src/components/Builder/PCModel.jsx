import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'

// Realistic ATX case component positions
const slotPositions = {
  cpu: [-0.3, 0.8, 0.1],
  motherboard: [-0.3, 0.3, 0],
  memory: [0.2, 1.0, 0.05],
  gpu: [0.3, -0.5, 0.15],
  ssd: [0.6, -0.8, 0.05],
  hdd: [-0.8, -2.0, 0.3],
  psu: [0.8, -2.2, 0.3],
  cooler: [-0.3, 1.8, 0.1],
  soundcard: [0.4, 0.0, 0.1],
  nic: [0.6, -0.2, 0.1],
  monitor: [3.5, 0.5, 0],
}

const slotColors = {
  cpu: '#00d4ff',
  motherboard: '#a855f7',
  memory: '#f472b6',
  gpu: '#f59e0b',
  ssd: '#22c55e',
  hdd: '#6b7280',
  psu: '#ef4444',
  cooler: '#3b82f6',
  soundcard: '#ec4899',
  nic: '#8b5cf6',
  monitor: '#10b981',
}

const slotLabels = {
  cpu: 'CPU',
  motherboard: '主板',
  memory: '内存',
  gpu: '显卡',
  ssd: '固态',
  hdd: '机械',
  psu: '电源',
  cooler: '散热',
  soundcard: '声卡',
  nic: '网卡',
  monitor: '显示器',
}

// Generic part shapes based on category
function PartPlaceholder({ position, color, category, isSelected }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current && isSelected) {
      meshRef.current.rotation.y += 0.005
    }
  })

  if (!isSelected) return null

  // Different shapes for different components
  const shapes = {
    cpu: { geometry: <boxGeometry args={[0.4, 0.05, 0.4]} />, offset: [0, 0, 0] },
    motherboard: { geometry: <boxGeometry args={[1.2, 1.8, 0.05]} />, offset: [0, 0, 0] },
    memory: { geometry: <boxGeometry args={[0.08, 0.6, 0.02]} />, offset: [0, 0, 0] },
    gpu: { geometry: <boxGeometry args={[0.6, 0.15, 1.8]} />, offset: [0, 0, 0] },
    ssd: { geometry: <boxGeometry args={[0.08, 0.03, 0.22]} />, offset: [0, 0, 0] },
    hdd: { geometry: <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />, offset: [0, 0, 0] },
    psu: { geometry: <boxGeometry args={[0.7, 0.5, 0.85]} />, offset: [0, 0, 0] },
    cooler: { geometry: <cylinderGeometry args={[0.25, 0.25, 0.3, 16]} />, offset: [0, 0, 0] },
    soundcard: { geometry: <boxGeometry args={[0.15, 0.05, 0.4]} />, offset: [0, 0, 0] },
    nic: { geometry: <boxGeometry args={[0.12, 0.05, 0.3]} />, offset: [0, 0, 0] },
    monitor: { geometry: <boxGeometry args={[2.2, 1.4, 0.08]} />, offset: [0, 0, 0] },
  }

  const shape = shapes[category] || shapes.cpu

  return (
    <group position={position} ref={meshRef}>
      <mesh>
        {shape.geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
      <Edges color={color} lineWidth={2} threshold={15} />
    </group>
  )
}

function CaseFrame({ selectedSlots }) {
  const caseWidth = 2.2
  const caseHeight = 5.5
  const caseDepth = 1.2

  return (
    <group>
      {/* Main case box - wireframe */}
      <mesh>
        <boxGeometry args={[caseWidth, caseHeight, caseDepth]} />
        <meshStandardMaterial color="#111118" transparent opacity={0.05} />
      </mesh>
      <Edges
        geometry={new THREE.BoxGeometry(caseWidth, caseHeight, caseDepth)}
        color="#00d4ff"
        lineWidth={1}
        threshold={15}
      />

      {/* Motherboard mounting plate */}
      <mesh position={[-0.3, 0.5, -0.35]}>
        <boxGeometry args={[1.0, 1.6, 0.02]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.3} />
      </mesh>

      {/* PCIe slot indicators (horizontal lines on motherboard area) */}
      {[0, -0.3, -0.6].map((y, i) => (
        <group key={`pcie-${i}`}>
          <mesh position={[0.15, y, -0.33]}>
            <boxGeometry args={[0.02, 0.02, 0.5]} />
            <meshStandardMaterial color="#00d4ff" transparent opacity={0.15} />
          </mesh>
        </group>
      ))}

      {/* PSU mounting area (bottom rear) */}
      <mesh position={[0.7, -2.2, 0]}>
        <boxGeometry args={[0.7, 0.5, 0.85]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.2} />
      </mesh>

      {/* Drive bays (bottom front) */}
      <mesh position={[-0.7, -2.2, 0.15]}>
        <boxGeometry args={[0.6, 0.4, 0.8]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.2} />
      </mesh>

      {/* CPU cooler mounting holes (top of motherboard) */}
      {[[-0.4, 0.9], [-0.2, 0.9], [-0.4, 0.7], [-0.2, 0.7]].map(([x, y], i) => (
        <mesh key={`hole-${i}`} position={[x, y, -0.32]}>
          <circleGeometry args={[0.03, 8]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} />
        </mesh>
      ))}

      {/* RAM slots (next to CPU) */}
      {[1.05, 0.9, 0.75, 0.6].map((y, i) => (
        <mesh key={`ram-${i}`} position={[0.15, y, -0.32]}>
          <boxGeometry args={[0.4, 0.08, 0.02]} />
          <meshStandardMaterial color="#00d4ff" transparent opacity={0.1} />
        </mesh>
      ))}

      {/* M.2 slot (below CPU) */}
      <mesh position={[0.1, 0.3, -0.32]}>
        <boxGeometry args={[0.3, 0.02, 0.02]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.15} />
      </mesh>

      {/* Front panel IO area */}
      <mesh position={[-1.1, 1.5, 0]}>
        <boxGeometry args={[0.02, 0.3, 0.4]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.3} />
      </mesh>

      {/* Rear IO shield */}
      <mesh position={[-1.1, 0.8, 0]}>
        <boxGeometry args={[0.02, 0.6, 0.5]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.4} />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -3.0, 0]}>
        <boxGeometry args={[1.8, 0.15, 1.0]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.5} />
      </mesh>

      {/* Internal grid lines */}
      {[-0.8, -0.3, 0.2, 0.7].map((x) => (
        <line key={`vg-${x}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([x, -2.75, 0.6, x, 2.75, 0.6])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.04} />
        </line>
      ))}
      {[-2, -1, 0, 1, 2].map((y) => (
        <line key={`hg-${y}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([-1.1, y, 0.6, 1.1, y, 0.6])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.04} />
        </line>
      ))}

      {/* Fan mounts (front and rear) */}
      {/* Front fans */}
      {[1.5, 0.5, -0.5].map((y, i) => (
        <mesh key={`fan-f-${i}`} position={[1.1, y, 0]}>
          <ringGeometry args={[0.15, 0.2, 16]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}
      {/* Rear fan */}
      <mesh position={[-1.1, 1.5, 0]}>
        <ringGeometry args={[0.12, 0.16, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function SlotMarker({ position, color, label, isSelected, isHighlighted }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isSelected ? 1.3 : isHighlighted ? 1.1 : 0.7
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
    if (glowRef.current) {
      const intensity = isSelected ? 0.6 : isHighlighted ? 0.3 : 0.05
      glowRef.current.material.opacity = intensity + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 2.5 : isHighlighted ? 1.2 : 0.3}
          transparent
          opacity={isSelected ? 1 : 0.6}
        />
      </mesh>

      {/* Glow ring */}
      <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.22, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Label */}
      <Html
        position={[0, 0.35, 0]}
        center
        style={{
          color: isSelected ? color : '#9ca3af',
          fontSize: '11px',
          fontWeight: isSelected ? 'bold' : 'normal',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          textShadow: `0 0 8px ${color}60`,
          transition: 'all 0.3s',
        }}
      >
        {label}
      </Html>
    </group>
  )
}

function Scene({ build, activeCategory }) {
  const selectedSlots = Object.entries(build)
    .filter(([, value]) => value !== null)
    .map(([key]) => key)

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00d4ff" />
      <pointLight position={[5, -5, -5]} intensity={0.2} color="#a855f7" />

      <CaseFrame selectedSlots={selectedSlots} />

      {/* Slot markers */}
      {Object.entries(slotPositions).map(([key, position]) => {
        const isSelected = build[key] !== null
        const isHighlighted = activeCategory === key
        return (
          <SlotMarker
            key={key}
            position={position}
            color={slotColors[key]}
            label={slotLabels[key]}
            isSelected={isSelected}
            isHighlighted={isHighlighted}
          />
        )
      })}

      {/* Selected part placeholders */}
      {Object.entries(build).map(([category, part]) => {
        if (!part || !slotPositions[category]) return null
        return (
          <PartPlaceholder
            key={`part-${category}`}
            position={slotPositions[category]}
            color={slotColors[category]}
            category={category}
            isSelected={true}
          />
        )
      })}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={6}
        maxDistance={16}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </>
  )
}

export default function PCModel({ build, activeCategory }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene build={build} activeCategory={activeCategory} />
      </Canvas>
    </div>
  )
}
