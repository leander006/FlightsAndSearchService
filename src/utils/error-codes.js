const ClientErrorsCodes = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  NOT_FOUND: 404,
});

const serverErrorsCodes = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
});

const successCodes = Object.freeze({
  OK: 200,
  CREATED: 201,
});

module.exports = {
  ClientErrorsCodes,
  serverErrorsCodes,
  successCodes,
};
