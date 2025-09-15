<script>
  import { fly } from 'svelte/transition';
  import NeuralNetwork from './NeuralNetwork.svelte';
</script>

<div class="space-y-6">
  <!-- Name and Title -->
  <div in:fly={{ y: 20, duration: 500, delay: 200 }}>
    <div class="text-white text-lg mb-2">ユーザー / USER</div>
    <div class="pl-4">
      <div class="text-white font-bold">NAME: Mehdi Boujid</div>
      <div class="text-gray-300">ROLE: Software Engineer</div>
      <div class="text-gray-300">STATUS: Active</div>
    </div>
  </div>

  <!-- Neural Network Visualization -->
  <div in:fly={{ y: 20, duration: 500, delay: 300 }} class="my-6">
    <NeuralNetwork />
    <div class="mt-3 border-t border-b border-white/15">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-[11px] text-gray-300 font-mono"
      >
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span
            class="h-[2px] w-3 bg-white/40 group-hover:bg-black"
          />
          <span class="tracking-wide">BACKEND SYSTEMS</span>
        </div>
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span
            class="h-[2px] w-3 bg-white/40 group-hover:bg-black"
          />
          <span class="tracking-wide">LOW‑LEVEL COMPUTING</span>
        </div>
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span
            class="h-[2px] w-3 bg-white/40 group-hover:bg-black"
          />
          <span class="tracking-wide">CLOUD ARCHITECTURE</span>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div in:fly={{ y: 20, duration: 500, delay: 400 }}>
    <div class="text-white mb-2">プロフィール / PROFILE</div>
    <div class="pl-4 text-gray-300 text-sm leading-relaxed space-y-2">
      <p>> Specialized in backend technologies and distributed systems</p>
      <p>> Developing expertise in low-level computing concepts</p>
      <p>> Tech stack: Golang, Rust, Node.js, TypeScript, React, Docker, GCP</p>
      <p>> Committed to delivering high-quality, scalable solutions</p>
    </div>
  </div>
</div>
