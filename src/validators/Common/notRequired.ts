export function notRequired(input: unknown): boolean {
  return input === undefined || input === null || input === ''
}
