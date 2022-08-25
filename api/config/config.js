require("dotnet").config();

module.exports = {
  "development": {
    "username": DATABASE_USER,
    "password": DATABASE_PASSWORD,
    "database": DATABASE,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DIALECT
  },
  "test": {
    "username": DATABASE_USER,
    "password": null,
    "database": DATABASE,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DIALECT
  },
  "production": {
    "username": DATABASE_USER,
    "password": null,
    "database": DATABASE,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DIALECT
  }
}
