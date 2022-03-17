export interface Serializer<T = unknown> {
  (value: T): string | null
}

export interface Deserializer<T = unknown> {
  (value: string | null): T
}

export const serializer: Serializer = payload => {
  if (payload === null) return null

  try {
    return JSON.stringify(payload)
  } catch (err) {
    // ignore error
  }

  return null
}

export const deserializer: Deserializer = payload => {
  if (typeof payload === 'string') {
    try {
      return JSON.parse(payload)
    } catch (err) {
      // ignore error
    }
  }

  return null
}
