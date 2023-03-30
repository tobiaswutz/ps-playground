<script lang="ts">
	export let active: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click class="block whitespace-nowrap px-4 py-2 text-sm font-semibold first:rounded-t-md last:rounded-b-md {active ? 'bg-stone-300/80 dark:bg-stone-600/80' : 'hover:bg-stone-300/60 dark:hover:bg-stone-600/60 cursor-pointer'}" role="menuitem">
	<slot />
</div>
