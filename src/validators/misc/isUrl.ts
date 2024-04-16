import { isString } from '../String/isString'

export function isUrl(input: unknown): boolean {
  if (!isString(input)) return false

  const urlReg =
    /^(https?:\/\/)?([\da-z.-]+.[a-z.]{2,6}|[\d.]+)([/:?=&#]{1}[\da-z.-]+)*[/?]$/

  return urlReg.test(input)
}

// ^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$
