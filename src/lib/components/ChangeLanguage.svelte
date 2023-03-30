<script lang="ts">
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import DropdownOption from '$lib/components/dropdown/DropdownOption.svelte';
	import { locale, locales, t } from '$lib/i18n/i18n';

	const languageMap: Map<string, string> = new Map([
		['de', 'Deutsch'],
		['en', 'English'],
		['cz', 'Čeština']
	]);

		let options = locales.map((locale) => {
			return {
				label: languageMap.get(locale),
				value: locale
			};
		});

</script>


<Dropdown>
  <span class="inline-flex items-center justify-center gap-1" slot="label">
    <img class="h-3" src="/img/flags/{$locale}.svg" alt={$locale} />
    {$locale.toUpperCase()}
  </span>
  {#each options as option}<DropdownOption on:click={() => locale.set(option.value)} active={option.value === $locale}>{option.label}</DropdownOption>{/each}
</Dropdown>