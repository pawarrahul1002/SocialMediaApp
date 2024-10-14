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
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
}


const ErrorMiddleware = (err, req, res, next) => {
  err.message || (err.message = "Internal server error");
  err.statusCode || (err.statusCode = 500);
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export { ApiError, ErrorMiddleware };
