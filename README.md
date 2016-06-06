# service-permission

Permissions as a service.

## install

## configure

* `PORT` - the port where the server is listening
* `REQUEST_PROPERTY` - the key where [express-jwt-permissions] can find the user property
* `PERMISSIONS_PROPERTY` - the key inside `REQUEST_PROPERTY` where [express-jwt-permissions] can find the permissions property

## run

```bash
npm start
```

## test

```bash
npm test
```

[express-jwt-permissions]: https://github.com/MichielDeMey/express-jwt-permissions
