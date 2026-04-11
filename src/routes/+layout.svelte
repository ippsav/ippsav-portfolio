<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../styles.css';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="min-h-screen bg-bg text-fg">
  <Navbar />
  <main class="mx-auto w-full max-w-content px-6 pb-24 pt-16 sm:px-8">
    {@render children?.()}
  </main>
  <Footer />
</div>
