# Welcome to Flights Service

## Project Setup

      - Clone the project
      - Execite `npm install` on the same path as of your root directory of the downloaded project
      - Create a `.env` file inside your root directory and add following environment variable
            - `PORT:3000`
      - Inside the `src/config` create file with `config.json` and add following code to it in form of json
```
{
  "development": {
    "username": <YOUR_ADMIN_NAME>,
    "password": <YOUR_ADMIN_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```
