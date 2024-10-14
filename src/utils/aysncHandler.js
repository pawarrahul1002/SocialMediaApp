const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };


// const asyncHandler2 = () => {};
// const asyncHandler2 = (fn) => () => {};
// const asyncHandler2 = (fn) => async() => {};

// const asyncHandler2 = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (err) {
//     // next(err);
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export { asyncHandler2 };
