import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'

// Slot positions inside the case (x, y, z)
const slotPositions = {
  cpu: [0, 1.8, 0.2],
  motherboard: [0, 0.3, 0],
  memory: [0.8, 1.0, 0],
  gpu: [0, -0.8, 0.3],
  ssd: [-0.6, -0.5, 0],
  hdd: [-1.2, -2.2, 0.5],
  psu: [1.3, -2.3, 0.5],
  cooler: [0, 3.0, 0.2],
  soundcard: [0.5, -0.3, 0],
  nic: [1.0, -0.3, 0],
  case: [0, 0, 0],
  monitor: [4.0, 1.0, 0],
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
  case: '#ffffff',
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
  case: '机箱',
  monitor: '显示器',
}

function AnimatedSlot({ position, color, label, isSelected, isHighlighted }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isSelected ? 1.3 : isHighlighted ? 1.1 : 0.8
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
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 2 : isHighlighted ? 1 : 0.2}
          transparent
          opacity={isSelected ? 1 : 0.5}
        />
      </mesh>

      {/* Glow ring */}
      <mesh ref={glowRef}>
        <ringGeometry args={[0.25, 0.35, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Selected indicator - solid block */}
      {isSelected && (
        <mesh>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
            transparent
            opacity={0.4}
          />
        </mesh>
      )}

      {/* Label */}
      <Html
        position={[0, 0.5, 0]}
        center
        style={{
          color: isSelected ? color : '#9ca3af',
          fontSize: '12px',
          fontWeight: isSelected ? 'bold' : 'normal',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          textShadow: `0 0 8px ${color}40`,
          transition: 'all 0.3s',
        }}
      >
        {label}
      </Html>
    </group>
  )
}

function CaseFrame() {
  return (
    <group>
      {/* Main case box */}
      <mesh>
        <boxGeometry args={[3.5, 6.5, 2]} />
        <meshStandardMaterial color="#111118" transparent opacity={0.1} />
      </mesh>
      <Edges
        geometry={new THREE.BoxGeometry(3.5, 6.5, 2)}
        color="#00d4ff"
        lineWidth={1}
        threshold={15}
      />

      {/* Internal grid lines */}
      {[-1, 0, 1].map((x) => (
        <line key={`v${x}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([x, -3.25, 1, x, 3.25, 1])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.08} />
        </line>
      ))}
      {[-2, -1, 0, 1, 2].map((y) => (
        <line key={`h${y}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([-1.75, y, 1, 1.75, y, 1])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.08} />
        </line>
      ))}

      {/* Stand */}
      <mesh position={[0, -3.6, 0]}>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

function ConnectingLines({ selectedSlots }) {
  const lines = useMemo(() => {
    const result = []
    const center = [0, 0, 0]
    Object.entries(slotPositions).forEach(([key, pos]) => {
      if (key !== 'case') {
        result.push({ from: center, to: pos, selected: selectedSlots.includes(key) })
      }
    })
    return result
  }, [selectedSlots])

  return (
    <group>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.from, ...line.to])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={line.selected ? slotColors[selectedSlots.find(s => s !== 'case') || 'cpu'] : '#1f1f2e'}
            transparent
            opacity={line.selected ? 0.5 : 0.08}
          />
        </line>
      ))}
    </group>
  )
}

function Scene({ build, activeCategory }) {
  const selectedSlots = Object.entries(build)
    .filter(([, value]) => value !== null)
    .map(([key]) => key)

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00d4ff" />
      <pointLight position={[5, -5, -5]} intensity={0.2} color="#a855f7" />

      <CaseFrame />
      <ConnectingLines selectedSlots={selectedSlots} />

      {Object.entries(slotPositions).map(([key, position]) => {
        if (key === 'case') return null
        const isSelected = build[key] !== null
        const isHighlighted = activeCategory === key
        return (
          <AnimatedSlot
            key={key}
            position={position}
            color={slotColors[key]}
            label={slotLabels[key]}
            isSelected={isSelected}
            isHighlighted={isHighlighted}
          />
        )
      })}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={8}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </>
  )
}

export default function PCModel({ build, activeCategory }) {
  return (
    <div className="w-full h-full bg-bg-primary">
      <Canvas
        camera={{ position: [6, 4, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene build={build} activeCategory={activeCategory} />
      </Canvas>
    </div>
  )
}
