const BadRequest = require('./badrequest');
const CustomAPIError = require('./custom-error');
const Unauthenticated = require('./unauthenticated');

module.exports = {
  CustomAPIError,
  BadRequest,
  Unauthenticated,
};
