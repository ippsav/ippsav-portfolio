<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import FractalBackground from '$lib/components/FractalBackground.svelte';
  import '../styles.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div
  class="app bg-black text-white min-h-screen p-8 font-mono text-sm transition-colors duration-400 relative"
>
  <FractalBackground />
  <!-- Ensure content paints above the background WebGL canvas to prevent flicker -->
  <div class="max-w-6xl mx-auto relative z-10">
    <Navbar />
    <main class="mt-8">
      {@render children?.()}
    </main>
    <Footer />
  </div>
</div>
