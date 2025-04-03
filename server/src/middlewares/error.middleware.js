const ErrorMiddleware = (err, res) => {
  statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    statusCode,
    ...err,
  });
};

export default ErrorMiddleware;
