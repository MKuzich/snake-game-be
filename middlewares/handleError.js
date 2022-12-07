const handleError = (err, req, res, next) => {
  const {
    status = "fail",
    code,
    message = err.message,
    data = "Internal Server Error",
  } = err;
  const statusCode = code >= 100 && code < 600 ? code : 500;
  res.status(statusCode).json({
    status,
    code,
    message,
    data,
  });
  next();
};

module.exports = { handleError };
