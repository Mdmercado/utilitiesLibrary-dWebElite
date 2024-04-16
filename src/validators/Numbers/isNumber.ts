export function isNumber(input: unknown): input is number {
  return typeof input === 'number'
}

// let data: unknown = 123;

// if (isNumber(data)) {
//   console.log('La variable es un número');
// } else {
//   console.log('La variable no es un número');
// }
