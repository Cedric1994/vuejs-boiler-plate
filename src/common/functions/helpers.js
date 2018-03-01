export const extractRequestData = (request) => {
  return (request.data.hasOwnProperty('data'))
    ? request.data.data
    : request.data
};
