<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>
<div class="bg-cover text-black dark:text-white bg-center h-screen w-full dark:bg-[url('/img/homepage-gradient-dark.webp')] bg-[url('/img/homepage-gradient-light.webp')]">
	<Navbar />
	<slot />
</div>