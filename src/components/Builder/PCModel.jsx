import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'

// Realistic ATX case component positions - proportionally balanced
const slotPositions = {
  cpu: [-0.2, 1.0, 0.2],
  motherboard: [-0.2, 0.2, 0.1],
  memory: [0.5, 1.2, 0.15],
  gpu: [0.3, -0.3, 0.25],
  ssd: [0.6, -0.6, 0.15],
  hdd: [-0.8, -1.6, 0.3],
  psu: [1.0, -1.6, 0.3],
  cooler: [-0.2, 1.9, 0.2],
  fan: [1.2, 0.5, 0.1],
  soundcard: [0.5, 0.0, 0.15],
  nic: [0.8, -0.2, 0.15],
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
  fan: '#06b6d4',
  soundcard: '#ec4899',
  nic: '#8b5cf6',
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
  fan: '风扇',
  soundcard: '声卡',
  nic: '网卡',
}

// Realistic part placeholder shapes using basic geometries
function PartPlaceholder({ position, color, category, isSelected }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current && isSelected) {
      groupRef.current.rotation.y += 0.003
    }
  })

  if (!isSelected) return null

  const renderShape = () => {
    switch (category) {
      case 'cpu':
        return (
          <group>
            {/* CPU chip base */}
            <mesh>
              <boxGeometry args={[0.35, 0.06, 0.35]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} transparent opacity={0.8} />
            </mesh>
            {/* IHS heat spreader */}
            <mesh position={[0, 0.04, 0]}>
              <boxGeometry args={[0.32, 0.02, 0.32]} />
              <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
            </mesh>
            {/* Pins around */}
            {Array.from({ length: 8 }).map((_, i) => (
              <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 0.2, -0.04, Math.sin(i * Math.PI / 4) * 0.2]}>
                <cylinderGeometry args={[0.015, 0.015, 0.04, 6]} />
                <meshStandardMaterial color="#888" />
              </mesh>
            ))}
          </group>
        )

      case 'motherboard':
        return (
          <group>
            {/* Main PCB */}
            <mesh>
              <boxGeometry args={[1.0, 1.6, 0.04]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.5} />
            </mesh>
            {/* VRM heatsink */}
            <mesh position={[0.3, 0.6, 0.04]}>
              <boxGeometry args={[0.25, 0.15, 0.06]} />
              <meshStandardMaterial color="#555" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Chipset heatsink */}
            <mesh position={[0.2, -0.4, 0.04]}>
              <boxGeometry args={[0.2, 0.12, 0.05]} />
              <meshStandardMaterial color="#666" metalness={0.6} roughness={0.4} />
            </mesh>
            {/* M.2 slot */}
            <mesh position={[0.15, -0.15, 0.03]}>
              <boxGeometry args={[0.08, 0.3, 0.02]} />
              <meshStandardMaterial color="#333" />
            </mesh>
            {/* PCIe slots */}
            {[0.0, -0.25, -0.5].map((y, i) => (
              <mesh key={i} position={[0.25, y, 0.03]}>
                <boxGeometry args={[0.03, 0.18, 0.4]} />
                <meshStandardMaterial color="#222" />
              </mesh>
            ))}
          </group>
        )

      case 'memory':
        return (
          <group>
            {/* RAM PCB */}
            <mesh>
              <boxGeometry args={[0.06, 0.65, 0.02]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} transparent opacity={0.7} />
            </mesh>
            {/* Heat spreader */}
            <mesh position={[0, 0, 0.015]}>
              <boxGeometry args={[0.05, 0.6, 0.025]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.3} roughness={0.4} />
            </mesh>
          </group>
        )

      case 'gpu':
        return (
          <group>
            {/* PCB */}
            <mesh>
              <boxGeometry args={[0.15, 0.06, 1.4]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.5} />
            </mesh>
            {/* Fan 1 */}
            <group position={[-0.05, 0.06, -0.35]}>
              <mesh>
                <cylinderGeometry args={[0.18, 0.18, 0.04, 16]} />
                <meshStandardMaterial color="#222" />
              </mesh>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
                <meshStandardMaterial color="#333" transparent opacity={0.8} />
              </mesh>
              {/* Fan blades */}
              {Array.from({ length: 7 }).map((_, i) => (
                <mesh key={i} rotation={[Math.PI / 2, i * Math.PI * 2 / 7, 0]}>
                  <boxGeometry args={[0.02, 0.22, 0.005]} />
                  <meshStandardMaterial color="#444" transparent opacity={0.6} />
                </mesh>
              ))}
            </group>
            {/* Fan 2 */}
            <group position={[-0.05, 0.06, 0.35]}>
              <mesh>
                <cylinderGeometry args={[0.18, 0.18, 0.04, 16]} />
                <meshStandardMaterial color="#222" />
              </mesh>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
                <meshStandardMaterial color="#333" transparent opacity={0.8} />
              </mesh>
              {Array.from({ length: 7 }).map((_, i) => (
                <mesh key={i} rotation={[Math.PI / 2, i * Math.PI * 2 / 7, 0]}>
                  <boxGeometry args={[0.02, 0.22, 0.005]} />
                  <meshStandardMaterial color="#444" transparent opacity={0.6} />
                </mesh>
              ))}
            </group>
            {/* Backplate */}
            <mesh position={[0.1, 0, 0]}>
              <boxGeometry args={[0.02, 0.05, 1.3]} />
              <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
            </mesh>
          </group>
        )

      case 'ssd':
        return (
          <group>
            {/* M.2 SSD */}
            <mesh>
              <boxGeometry args={[0.06, 0.02, 0.22]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} transparent opacity={0.8} />
            </mesh>
            {/* NAND chips */}
            {[0.05, 0.0, -0.05].map((z, i) => (
              <mesh key={i} position={[0, 0.015, z]}>
                <boxGeometry args={[0.04, 0.01, 0.03]} />
                <meshStandardMaterial color="#222" />
              </mesh>
            ))}
          </group>
        )

      case 'hdd':
        return (
          <group>
            {/* HDD case */}
            <mesh>
              <boxGeometry args={[0.7, 0.12, 0.5]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
            </mesh>
            {/* Top label area */}
            <mesh position={[0, 0.065, 0]}>
              <boxGeometry args={[0.6, 0.005, 0.4]} />
              <meshStandardMaterial color="#333" />
            </mesh>
          </group>
        )

      case 'psu':
        return (
          <group>
            {/* PSU case */}
            <mesh>
              <boxGeometry args={[0.75, 0.45, 0.85]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.6} />
            </mesh>
            {/* Fan grill */}
            <mesh position={[0, 0.23, 0]}>
              <cylinderGeometry args={[0.18, 0.18, 0.02, 16]} />
              <meshStandardMaterial color="#222" />
            </mesh>
            {/* Fan center */}
            <mesh position={[0, 0.24, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.01, 8]} />
              <meshStandardMaterial color="#444" />
            </mesh>
            {/* Cable outputs */}
            {[-0.2, 0, 0.2].map((x, i) => (
              <mesh key={i} position={[x, -0.23, -0.3]}>
                <boxGeometry args={[0.05, 0.03, 0.08]} />
                <meshStandardMaterial color="#111" />
              </mesh>
            ))}
          </group>
        )

      case 'cooler':
        return (
          <group>
            {/* Tower base */}
            <mesh position={[0, -0.15, 0]}>
              <boxGeometry args={[0.3, 0.4, 0.3]} />
              <meshStandardMaterial color="#888" metalness={0.6} roughness={0.3} transparent opacity={0.7} />
            </mesh>
            {/* Heat pipes */}
            {[-0.1, 0, 0.1].map((x, i) => (
              <mesh key={i} position={[x, 0.1, 0]}>
                <cylinderGeometry args={[0.015, 0.015, 0.5, 8]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
              </mesh>
            ))}
            {/* Fins */}
            {Array.from({ length: 12 }).map((_, i) => (
              <mesh key={i} position={[0, 0.1 + i * 0.035, 0]}>
                <boxGeometry args={[0.25, 0.005, 0.25]} />
                <meshStandardMaterial color="#aaa" metalness={0.5} roughness={0.4} transparent opacity={0.6} />
              </mesh>
            ))}
            {/* Fan on cooler */}
            <mesh position={[0, 0.3, 0.15]}>
              <cylinderGeometry args={[0.12, 0.12, 0.03, 16]} />
              <meshStandardMaterial color="#222" transparent opacity={0.8} />
            </mesh>
          </group>
        )

      case 'fan':
        return (
          <group>
            {/* Fan frame */}
            <mesh>
              <boxGeometry args={[0.04, 0.25, 0.25]} />
              <meshStandardMaterial color="#222" />
            </mesh>
            {/* Fan hub */}
            <mesh position={[0.02, 0, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
              <meshStandardMaterial color="#333" />
            </mesh>
            {/* Blades */}
            {Array.from({ length: 7 }).map((_, i) => (
              <mesh key={i} rotation={[0, i * Math.PI * 2 / 7, 0]} position={[0.02, 0, 0]}>
                <boxGeometry args={[0.005, 0.02, 0.1]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
              </mesh>
            ))}
          </group>
        )

      case 'soundcard':
      case 'nic':
        return (
          <group>
            {/* PCIe card */}
            <mesh>
              <boxGeometry args={[0.12, 0.03, 0.35]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.6} />
            </mesh>
            {/* IO shield */}
            <mesh position={[-0.07, 0, -0.15]}>
              <boxGeometry args={[0.02, 0.08, 0.06]} />
              <meshStandardMaterial color="#888" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Components */}
            {[0.05, 0.0, -0.05].map((z, i) => (
              <mesh key={i} position={[0, 0.025, z]}>
                <boxGeometry args={[0.04, 0.015, 0.04]} />
                <meshStandardMaterial color="#222" />
              </mesh>
            ))}
          </group>
        )

      default:
        return (
          <mesh>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} transparent opacity={0.6} />
          </mesh>
        )
    }
  }

  return (
    <group position={position} ref={groupRef}>
      {renderShape()}
      <Edges color={color} lineWidth={1} threshold={15} />
    </group>
  )
}

function CaseFrame() {
  // Balanced ATX case proportions
  const w = 2.8  // width
  const h = 3.6  // height - more balanced
  const d = 1.6  // depth

  return (
    <group>
      {/* Main case box - wireframe */}
      <mesh>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color="#111118" transparent opacity={0.03} />
      </mesh>
      <Edges
        geometry={new THREE.BoxGeometry(w, h, d)}
        color="#00d4ff"
        lineWidth={1}
        threshold={15}
      />

      {/* Motherboard mounting plate */}
      <mesh position={[-0.2, 0.2, -0.6]}>
        <boxGeometry args={[1.0, 1.5, 0.02]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.25} />
      </mesh>

      {/* PCIe slot indicators */}
      {[0.0, -0.25, -0.5].map((y, i) => (
        <group key={`pcie-${i}`}>
          <mesh position={[0.25, y, -0.55]}>
            <boxGeometry args={[0.02, 0.02, 0.4]} />
            <meshStandardMaterial color="#00d4ff" transparent opacity={0.15} />
          </mesh>
        </group>
      ))}

      {/* PSU mounting area (bottom rear) */}
      <mesh position={[0.8, -1.4, 0]}>
        <boxGeometry args={[0.8, 0.5, 0.8]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.2} />
      </mesh>

      {/* Drive bays (bottom front) */}
      <mesh position={[-0.8, -1.4, 0.2]}>
        <boxGeometry args={[0.7, 0.4, 0.7]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.2} />
      </mesh>

      {/* CPU socket area */}
      <mesh position={[-0.2, 0.8, -0.55]}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.15} />
      </mesh>

      {/* RAM slots */}
      {[1.1, 0.95, 0.8, 0.65].map((y, i) => (
        <mesh key={`ram-${i}`} position={[0.35, y, -0.55]}>
          <boxGeometry args={[0.4, 0.08, 0.02]} />
          <meshStandardMaterial color="#00d4ff" transparent opacity={0.1} />
        </mesh>
      ))}

      {/* M.2 slot */}
      <mesh position={[0.15, 0.2, -0.55]}>
        <boxGeometry args={[0.08, 0.02, 0.3]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.15} />
      </mesh>

      {/* Front panel IO */}
      <mesh position={[-1.4, 1.2, 0]}>
        <boxGeometry args={[0.02, 0.25, 0.4]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.3} />
      </mesh>

      {/* Rear IO shield */}
      <mesh position={[-1.4, 0.6, 0]}>
        <boxGeometry args={[0.02, 0.5, 0.5]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.4} />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -2.0, 0]}>
        <boxGeometry args={[2.2, 0.12, 1.2]} />
        <meshStandardMaterial color="#1f1f2e" transparent opacity={0.5} />
      </mesh>

      {/* Front fan mounts */}
      {[1.0, 0.3, -0.4].map((y, i) => (
        <mesh key={`fan-f-${i}`} position={[1.4, y, 0]}>
          <ringGeometry args={[0.12, 0.16, 16]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Rear fan mount */}
      <mesh position={[-1.4, 1.0, 0]}>
        <ringGeometry args={[0.1, 0.14, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Top fan mounts */}
      {[-0.5, 0.2, 0.9].map((x, i) => (
        <mesh key={`fan-t-${i}`} position={[x, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.1, 0.14, 16]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Internal grid lines */}
      {[-1.2, -0.6, 0, 0.6, 1.2].map((x) => (
        <line key={`vg-${x}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([x, -1.8, 0.8, x, 1.8, 0.8])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.03} />
        </line>
      ))}
      {[-1.5, -0.75, 0, 0.75, 1.5].map((y) => (
        <line key={`hg-${y}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([-1.4, y, 0.8, 1.4, y, 0.8])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.03} />
        </line>
      ))}
    </group>
  )
}

function SlotMarker({ position, color, label, isSelected, isHighlighted }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isSelected ? 1.2 : isHighlighted ? 1.0 : 0.6
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
    if (glowRef.current) {
      const intensity = isSelected ? 0.5 : isHighlighted ? 0.25 : 0.03
      glowRef.current.material.opacity = intensity + Math.sin(state.clock.elapsedTime * 2) * 0.08
    }
  })

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 10, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 2.5 : isHighlighted ? 1.2 : 0.3}
          transparent
          opacity={isSelected ? 1 : 0.5}
        />
      </mesh>

      {/* Glow ring */}
      <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.15, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>

      {/* Label */}
      <Html
        position={[0, 0.25, 0]}
        center
        style={{
          color: isSelected ? color : '#9ca3af',
          fontSize: '10px',
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

      <CaseFrame />

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
        minDistance={5}
        maxDistance={14}
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
        camera={{ position: [4, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene build={build} activeCategory={activeCategory} />
      </Canvas>
    </div>
  )
}
