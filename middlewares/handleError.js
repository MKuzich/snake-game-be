const handleError = (err, req, res, next) => {
  const {
    status = "fail",
    code = 500,
    message = err.message,
    data = "Internal Server Error",
  } = err;
  res.status(code).json({
    status,
    code,
    message,
    data,
  });
  next();
};

module.exports = { handleError };
