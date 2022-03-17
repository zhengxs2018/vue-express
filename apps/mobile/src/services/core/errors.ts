export class HttpException extends Error {
  constructor(message: string, public statusCode = -1) {
    super(message)
  }
}
