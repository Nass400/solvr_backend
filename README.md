# Solvr backend Test



## Running the Application

To run the Application:
```bash
 npm install 
 npm run build
```
To filter data matching the filter pattern:

```bash
 npm start -- --filter=ry
```
To return data with counts for people and animals:
```bash
 npm start -- --count
```
    
## Features

- Filter the data in Data.ts by animal name matching the filter pattern.
- Return data with counts for people and animals.

## Tech Stack

**Server:**  NodeJS, Typescript, Mocha, Eslint, Prettier


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Prettier
You can run this command so that any piece of code added will be conventional to the prettier rules:
```bash
npm run prettier-watch
```
## Eslint
To identify and fix problems in code using Eslint:
```bash
npm run lint
```
