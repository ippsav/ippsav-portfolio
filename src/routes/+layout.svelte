<script>
	import Footer from '$lib/components/Footer.svelte';
import Navbar from '$lib/components/Navbar.svelte';
	import './styles.css';
</script>

<div class="app dark:bg-gray-900">
  <Navbar />
  <slot />
  <Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
