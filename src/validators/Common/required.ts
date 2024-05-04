export function required(input: unknown): boolean {
  return input !== undefined && input !== null && input !== ''
}
