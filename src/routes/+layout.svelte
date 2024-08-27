<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../styles.css';
</script>

<div
  class="app bg-white dark:bg-black text-green-700 dark:text-green-500 min-h-screen flex flex-col"
>
  <Navbar />
  <main class="flex-grow px-4 md:px-8 py-8 max-w-3xl mx-auto w-full">
    <slot />
  </main>
  <Footer />
</div>
