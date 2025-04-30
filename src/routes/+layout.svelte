<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../styles.css';
</script>

<div
  class="app bg-bg-light dark:bg-bg-dark text-primary-light dark:text-primary-dark min-h-screen flex flex-col transition-colors duration-400"
>
  <Navbar />
  <main class="flex-grow px-4 md:px-8 py-8 max-w-3xl mx-auto w-full">
    <slot />
  </main>
  <Footer />
</div>
