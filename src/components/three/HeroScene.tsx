import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

const VERTEX = /* glsl */ `
uniform float uTime;
uniform float uAmp;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

${NOISE_GLSL}

void main() {
  float n = snoise(normal * 1.4 + vec3(uTime * 0.18, uTime * 0.12, uTime * 0.1));
  float n2 = snoise(normal * 3.2 - vec3(uTime * 0.1));
  vNoise = n * 0.7 + n2 * 0.3;
  vec3 displaced = position + normal * vNoise * uAmp;
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const FRAGMENT = /* glsl */ `
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uColorD;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  float t = vNoise * 0.5 + 0.5;
  vec3 col = mix(uColorA, uColorB, smoothstep(0.0, 0.45, t));
  col = mix(col, uColorC, smoothstep(0.45, 0.75, t));
  col = mix(col, uColorD, smoothstep(0.75, 1.0, t));

  float fresnel = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.2);
  col += fresnel * vec3(1.0, 0.97, 0.92) * 0.55;

  gl_FragColor = vec4(col, 1.0);
}
`;

function AuroraBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.42 },
      uColorA: { value: new THREE.Color("#3f7fd6") },
      uColorB: { value: new THREE.Color("#7b5cd6") },
      uColorC: { value: new THREE.Color("#e0574a") },
      uColorD: { value: new THREE.Color("#e9a13b") },
    }),
    [],
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    const m = mesh.current;
    if (!m) return;
    m.rotation.y = THREE.MathUtils.damp(m.rotation.y, state.pointer.x * 0.6, 2.5, delta);
    m.rotation.x = THREE.MathUtils.damp(m.rotation.x, -state.pointer.y * 0.5, 2.5, delta);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.7, 64]} />
      <shaderMaterial uniforms={uniforms} vertexShader={VERTEX} fragmentShader={FRAGMENT} />
    </mesh>
  );
}

function ParticleHalo() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    const p = points.current;
    if (!p) return;
    p.rotation.y += delta * 0.03;
    p.rotation.x = THREE.MathUtils.damp(p.rotation.x, -state.pointer.y * 0.15, 2, delta);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8a7a68"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.9}>
          <AuroraBlob />
        </Float>
        <ParticleHalo />
      </Canvas>
    </div>
  );
}
