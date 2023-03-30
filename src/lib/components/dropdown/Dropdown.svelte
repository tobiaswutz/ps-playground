<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from '../Button.svelte';
	let isDropdownOpen = false;

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }: any) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) {
			return;
		}
		isDropdownOpen = false;
	};
</script>

<div on:focusout={handleDropdownFocusLoss} class="menu-container relative inline-block text-left">
	<div>
		<Button on:click={() => (isDropdownOpen = !isDropdownOpen)}>
			<slot name="label" />
			<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
			</svg>
		</Button>
	</div>

	{#if isDropdownOpen}
		<div transition:slide={{ duration: 100 }} class="absolute right-0 z-10 mt-2 max-h-40 min-w-full origin-top-right overflow-y-auto rounded-md shadow-lg ring-1 ring-stone-300 dark:ring-stone-600 ring-opacity-75 backdrop-blur-xl bg-stone-200/50 dark:bg-stone-600/50  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
			<slot>N/A</slot>
		</div>
	{/if}
</div>
