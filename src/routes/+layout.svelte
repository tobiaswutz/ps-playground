<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';

	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	onMount(() => {
		toast.success('It works!');
	});
</script>

<div class="h-screen w-full bg-[url('/img/homepage-gradient-light.webp')] bg-cover bg-center text-black dark:bg-[url('/img/homepage-gradient-dark.webp')] dark:text-white">
	<Navbar />
	<slot />

	<Toaster />
</div>
