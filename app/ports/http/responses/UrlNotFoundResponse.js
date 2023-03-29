const MESSAGE_ERROR = 'SHORTENED URL NOT FOUND';
const ERROR_CODE = '002';
function UrlNotFoundResponse() {
  return {
    err_code: ERROR_CODE,
    description: MESSAGE_ERROR,
  };
}

module.exports = { UrlNotFoundResponse };