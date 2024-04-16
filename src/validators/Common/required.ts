export function required(input: unknown): boolean {
  return input !== undefined && input !== null && input !== ''
}
// function setUsername(username: unknown) {
//     if (!required(username)) {
//       throw new Error('El nombre de usuario es requerido');
//     }

//     // Continúa con la lógica de tu aplicación...
//   }
