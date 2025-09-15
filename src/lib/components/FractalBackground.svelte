<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.OrthographicCamera;
  let renderer: THREE.WebGLRenderer;
  let quad: THREE.Mesh;
  let animationId: number;

  const uniforms: { [key: string]: { value: any } } = {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_scale: { value: 1 }
  };

  const vertexShader = /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `;

  const fragmentShader = /* glsl */ `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform float u_scale;

    const float PI = 3.141592653589793;

    void main() {
      vec2 p = vUv - 0.5;
      p.x *= u_resolution.x / u_resolution.y;
      p *= 2.0 / u_scale;

      float k = 6.0;
      float ang = atan(p.y, p.x);
      float sector = 2.0 * PI / k;
      ang = mod(ang + sector * 0.5, sector) - sector * 0.5;
      p = vec2(cos(ang), sin(ang)) * length(p);

      vec2 z = p;
      float acc = 0.0;
      for (int i = 0; i < 36; i++) {
        z = abs(z) / dot(z, z) - vec2(0.55, 0.38);
        acc += exp(-3.0 * length(z));
      }

      // Brighter, with subtle edge halo so it’s visible along page edges
      float glow = acc * 0.10;
      glow *= 0.9 + 0.1 * sin(u_time * 0.8);
      glow = clamp(glow, 0.0, 1.0);

      float r = length((vUv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0));
      float center = smoothstep(1.25, 0.15, r);
      float edgeHalo = smoothstep(0.35, 1.25, r);

      vec3 col = vec3(glow) * (0.85 + 0.15 * center) + vec3(edgeHalo) * 0.12;
      gl_FragColor = vec4(col, min(1.0, glow + edgeHalo * 0.15));
    }
  `;

  onMount(() => {
    init();
    animate();
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (quad) {
        quad.geometry?.dispose();
        (quad.material as THREE.ShaderMaterial)?.dispose();
      }
      if (renderer) renderer.dispose();
    };
  });

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }

  function animate() {
    const loop = (t: number) => {
      animationId = requestAnimationFrame(loop);
      uniforms.u_time.value = t * 0.001;
      uniforms.u_scale.value = 1.0 + 0.05 * Math.sin(t * 0.001 * 0.6);
      renderer.render(scene, camera);
    };
    animationId = requestAnimationFrame(loop);
  }

  function handleResize() {
    if (!renderer) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    uniforms.u_resolution.value.set(w, h);
  }
</script>

<svelte:window on:resize={handleResize} />

<div
  bind:this={container}
  class="fixed inset-0 z-0 pointer-events-none"
  style="background: transparent;"
  aria-hidden="true"
/>
