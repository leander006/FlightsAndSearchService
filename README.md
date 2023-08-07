# Welcome to Flights Service

## Project Setup

    - Clone the project
      - Execite`npm install`on the same path as of your root directory of the 
      downloaded project
      - Create a`.env`file inside your root directory and add following environment 
      variable
            -`PORT:3000`      
      - Inside the`src/config`create file with`config.json` and add following code
      to it in form of json

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

- Once you've added your db config as listed above , go to the src folder from your
  terminal and execute `npx sequelize db:create`
- And then execute `npx sequelize db:migrate`

## DB Design
```
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airport but one airport can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport
```
