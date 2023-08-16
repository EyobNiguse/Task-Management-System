const sendResponse = (res, status, code ,  payload, message = '') => {
    if (status === 'success') {
      return res.status(200).json({
        status: 'success',
        data: payload,
        message: message
      });
    } else if (status === 'error') {
      // You can refine this further based on error type (client vs. server errors)
      return res.status(statusCode).json({
        status: 'error',
        error: {
          code: code || 500,
          message: message || 'An unexpected error occurred'
        }
      });
    }
  };
  
  // Usage:
  
  // For a successful response
  
  // For an error response
  module.exports = {sendResponse}