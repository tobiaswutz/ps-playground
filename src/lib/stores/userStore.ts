// Was soll dieser Store machen ?
// 1. Daten des eingeloggten Users aus der Datenbank holen
// 2. Daten des eingeloggten Users in die Datenbank schreiben

import type { User } from '$lib/models/User';
import apiService from '$lib/services/apiService';
import { writable } from 'svelte/store';

export const userData = writable<User | undefined>(undefined);

export async function fetchUserData() {
	const response = await apiService.get<User>('/users');
	userData.set(response);
}

export async function postUserData(data: User) {
	const response = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	const result = await response.json();
	userData.set(result);
}
