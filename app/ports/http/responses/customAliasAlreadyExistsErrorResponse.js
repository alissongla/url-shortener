const MESSAGE_ERROR = 'CUSTOM ALIAS ALREADY EXISTS';
const ERROR_CODE = '001';
function customAliasAlreadyExistsErrorResponse(customAlias) {
  return {
    alias: customAlias,
    err_code: ERROR_CODE,
    description: MESSAGE_ERROR,
  };
}

module.exports = { customAliasAlreadyExistsError: customAliasAlreadyExistsErrorResponse };