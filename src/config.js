module.exports = function () {
  return {
    port: process.env.PORT || 3000,
    requestProperty: process.env.REQUEST_PROPERTY || 'user',
    permissionsProperty: process.env.PERMISSIONS_PROPERTY || 'permissions',
  };
};
