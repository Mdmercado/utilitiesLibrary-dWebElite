export function notRequired(input: unknown): boolean {
  return input === undefined || input === null || input === ''
}

// function setUsername(username?: unknown) {
//     if (notRequired(username)) {
//       console.log('El nombre de usuario no está presente');
//     } else {
//       // Continúa con la lógica de tu aplicación...
//     }
//   }
