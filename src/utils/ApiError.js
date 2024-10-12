class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    {
      this.statusCode = statusCode;
      this.message = message;
      this.stack = stack;
      this.errors = errors;
      this.data = null;
      this.success = false;

      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(tis, this.constructor);
      }
    }
  }
}

export { ApiError };
