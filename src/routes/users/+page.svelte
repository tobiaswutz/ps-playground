<script lang="ts">
	import { User } from '$lib/models/User';
	import apiService from '$lib/services/apiService';
	export let data: any;
	import toast from 'svelte-french-toast';

	let users = data.props.data;

	const user = new User('tobias@test.de', 'Tobias', 'Wutz', '54345345', 'Bayuern', 24, '@boehmer', false, 'http://www.playtoearn.online/wp-content/uploads/2021/10/Clone-X-NFT-avatar.png');

	const saveNewUser = async () => {
  try {
		console.log(user);
    const response = await apiService.post<any>('api/users', user);
    console.log(response);
    toast.success('User saved successfully!');
  } catch (error) {
    console.error(error);
    toast.error('Could not save user.');
  }
};



	const testApi = async () => {
		toast.promise(apiService.get<any>('api/users'), {
			loading: 'Fetching user test...',
			success: (response) => {
				console.log(response);
				return 'Fetch User Test successful!';
			},
			error: (error) => {
				console.error('Error fetching user test:', error);
				return 'Could not fetch user test.';
			}
		});
	};
</script>

<form class="mx-auto flex items-center justify-center" on:submit|preventDefault={saveNewUser}>
	<button class="rounded-2xl bg-black p-4 text-white" type="submit">Submit</button>
</form>

<div class="flex w-full items-center justify-center pt-12">
	<button class="w-72 rounded-md bg-blue-600 p-2" on:click={testApi}>FETCH USER TEST</button>
</div>

<ul class="grid grid-cols-1 gap-6 px-24 py-12 sm:grid-cols-2 lg:grid-cols-3">
	{#each users as user}
		<li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-black/20 text-center shadow backdrop-blur-lg dark:bg-white/20">
			<div class="flex flex-1 flex-col p-8">
				<img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={user.avatar_url} alt={user.name} />
				<h3 class="mt-6 text-sm font-medium text-gray-900">{user.name} {user.last_name}</h3>
				<dl class="mt-1 flex flex-grow flex-col justify-between">
					<dt class="sr-only">Title</dt>
					<dd class="text-sm text-gray-500">{user.alias_name}</dd>
					<dt class="sr-only">Role</dt>
					<dd class="mt-3">
						<span class={user.online ? 'rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800' : 'rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800'}>{user.online ? 'Online' : 'Offline'}</span>
					</dd>
				</dl>
			</div>
			<div>
				<div class="-mt-px flex divide-x divide-gray-200">
					<div class="flex w-0 flex-1">
						<a href={'mailto:' + user.email} class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
							<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
								<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
							</svg>
							Email
						</a>
					</div>
					<div class="-ml-px flex w-0 flex-1">
						<a href={'tel:' + user.phone_number} class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
							<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
							</svg>
							Call
						</a>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
