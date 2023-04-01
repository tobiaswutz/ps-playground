<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';

	import  { Toaster } from 'svelte-french-toast';

</script>

<div class="h-screen w-full bg-[url('/img/homepage-gradient-light.webp')] bg-cover bg-center text-black dark:bg-[url('/img/homepage-gradient-dark.webp')] dark:text-white">
	<Navbar />
	<slot />

	<Toaster position='bottom-center'  />
</div>
