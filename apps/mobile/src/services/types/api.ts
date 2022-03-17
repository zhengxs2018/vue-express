export type ServiceResponse<T = unknown> = {
  code: number
  data: T
  message?: string
}
