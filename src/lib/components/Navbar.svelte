<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import ChangeLanguage from './ChangeLanguage.svelte';
  
  type Theme = 'light' | 'dark'
  let theme: Theme = 'light'

  onMount(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      theme = 'light'
    }
  })

	function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      theme = 'dark'
    }
	}
</script>

<div class="z-10 flex flex-row gap-2 items-center justify-end py-6 px-10">
	<ChangeLanguage />
	<Button on:click={toggleDarkMode}>{theme === 'dark' ? '🌙' : '💡'}</Button>
</div>
