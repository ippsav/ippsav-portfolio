<script>
  import { fly } from 'svelte/transition';
</script>

<div class="mb-12 transition-all duration-400">
  <div
    class="mb-8 border-l-2 border-gray-400 dark:border-gray-600 pl-4"
    in:fly={{ y: 20, duration: 500, delay: 200 }}
  >
    <h1 class="text-accent-light dark:text-accent-dark text-2xl font-bold mb-2">Mehdi Boujid</h1>
    <h2 class="text-secondary-light dark:text-secondary-dark text-lg">Software Engineer</h2>
  </div>

  <div in:fly={{ y: 20, duration: 500, delay: 400 }}>
    <h3 class="text-primary-light dark:text-primary-dark text-sm mb-3 font-semibold">About</h3>
    <p class="text-secondary-light dark:text-secondary-dark text-sm leading-relaxed">
      I am a software engineer specialized in backend technologies. Recently, I've been developing a
      growing interest in low-level computing concepts. I have experience working with various
      languages and technologies such as Golang, Rust, Node.js (JavaScript/TypeScript), Vue, React,
      Docker, and Google Cloud. I continuously seek to enhance my expertise in the field and remain
      dedicated to delivering high-quality results.
    </p>
  </div>
</div>
