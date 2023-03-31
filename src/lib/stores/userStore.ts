// import moment from 'moment';
// import { writable } from 'svelte/store';
// import { User } from '$lib/models/User';


// const user = new User(
//   1,
//   'john.doe@example.com',
//   'John',
//   'Doe',
//   '123456789',
//   'New York',
//   30,
//   'Johnny',
//   new Date('2023-03-31 15:00:00'),
//   new Date('2023-03-31 15:00:00'),
//   true,
//   'https://example.com/avatar.jpg',
// );


// // Erstelle den User Store
// export const userStore = writable(user);

// // Funktion, um den User-Store zu aktualisieren
// export function updateUser(newUser: any) {
//   // Erhalte den aktuellen Wert des Stores
//   userStore.update(currentValue => {
//     // Aktualisiere das Benutzerdaten-Objekt mit neuen Daten
//     const updatedUser = {
//       ...currentValue,
//       ...newUser
//     }
//     // Gebe das aktualisierte Benutzerdaten-Objekt zurück, das im Store gespeichert werden soll
//     return updatedUser;
//   });
// }
