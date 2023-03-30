<script lang="ts">
	export let data: any;
	import moment from 'moment';
	let users = data.props.data;

	const account_created = moment().format('YYYY-MM-DD HH:mm:ss');

	const user = {
		email: 'tobnias@test.de',
		name: 'Tobias',
		last_name: 'Klein',
		phone_number: 345345345,
		location: 'Berlin',
		age: 10,
		alias_name: 'Tobi',
		account_created,
		last_login: account_created,
		online: 0,
		avatar_url: 'https://ionicframework.com/docs/img/demos/avatar.svg'
	};

	const saveNewUser = async (user: any) => {
		const response = await fetch(`http://localhost:5173/api/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		const data = await response.json();
		return data;
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = {
			...user,
		};

		const data = await saveNewUser(formData);

		if (data.error) {
			// console.log(data.error);
			return;
		} else {
			users = [...users, user];
		}
	};
</script>

<form class="mx-auto flex items-center justify-center" on:submit={handleSubmit}>
	<!-- <label for="email">Email</label>
	<input type="email" id="email" bind:value={email} />

	<label for="name">Name</label>
	<input type="text" id="name" bind:value={name} />

	<label for="lastName">Last Name</label>
	<input type="text" id="lastName" bind:value={lastName} />

	<label for="phoneNumber">Phone Number</label>
	<input type="tel" id="phoneNumber" bind:value={phoneNumber} />

	<label for="location">Location</label>
	<input type="text" id="location" bind:value={location} />

	<label for="age">Age</label>
	<input type="number" id="age" bind:value={age} />

	<label for="aliasName">Alias Name</label>
	<input type="text" id="aliasName" bind:value={aliasName} />

	<label for="avatarUrl">Avatar URL</label>
	<input type="url" id="avatarUrl" bind:value={avatarUrl} /> -->

	<button class="bg-black p-4 rounded-2xl text-white" type="submit">Submit</button>
</form>

<ul class="grid grid-cols-1 gap-6 p-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each users as user}
		<li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
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
