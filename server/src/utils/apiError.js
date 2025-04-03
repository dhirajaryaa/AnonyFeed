class ApiError extends Error {
  constructor(
    statusCode,
    message = "Smothing went worng!",
    data=null,
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data=data;
    this.isError = true;
    this.isSuccuss = false;
    this.error = error;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
