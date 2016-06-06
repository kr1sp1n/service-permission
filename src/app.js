module.exports = function (config) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const guard = require('express-jwt-permissions')({
    requestProperty: config.requestProperty,
    permissionsProperty: config.permissionsProperty,
  });
  const permission = require('./permission');

  const app = express();

  app.use(bodyParser.json());

  app.post('/login', function (req, res) {

  });

  return app;
};
