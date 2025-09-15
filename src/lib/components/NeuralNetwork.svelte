<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement | undefined = $state();
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

    // Simple, symmetric inversive IFS for minimalist fractal glow
    void main() {
      vec2 p = vUv - 0.5;
      p.x *= u_resolution.x / u_resolution.y;

      // Gentle breathing zoom
      p *= 2.0 / u_scale;

      // 6-fold kaleidoscopic folding for architectural symmetry
      float k = 6.0;
      float ang = atan(p.y, p.x);
      float sector = 2.0 * PI / k;
      ang = mod(ang + sector * 0.5, sector) - sector * 0.5;
      p = vec2(cos(ang), sin(ang)) * length(p);

      // Iterative inversive transform
      vec2 z = p;
      float acc = 0.0;
      for (int i = 0; i < 36; i++) {
        z = abs(z) / dot(z, z) - vec2(0.55, 0.38);
        acc += exp(-3.0 * length(z));
      }

      float glow = acc * 0.08;
      // Subtle temporal pulse
      glow *= 0.9 + 0.1 * sin(u_time * 0.8);
      glow = clamp(glow, 0.0, 1.0);

      // Soft vignette to keep it minimal and centered
      float vignette = smoothstep(1.1, 0.2, length((vUv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0)));

      vec3 col = vec3(glow) * vignette; // monochrome white glow
      gl_FragColor = vec4(col, glow);
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
    if (!container) return;

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
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

    uniforms.u_resolution.value.set(container.clientWidth, container.clientHeight);
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
    if (!renderer || !container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    uniforms.u_resolution.value.set(w, h);
  }
</script>

<svelte:window onresize={handleResize} />

<div
  bind:this={container}
  class="w-full h-48 border border-white/20"
  style="min-height: 192px; background: transparent;"
  aria-hidden="true"
></div>
