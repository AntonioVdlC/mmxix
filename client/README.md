# MMXIX - Client

## Running the code

You can easily run the code using Docker:
```
docker build -t mmxix/client:latest .
docker run -p 49160:8080 -d mmxix/client
```

Then open http://locahost:49160.

> If you have issues running Docker, you can always run the code in development mode using `yarn && yarn start` or `npm is`.

## Developing the code

### Prerequisites

You may need to have Node v12 installed on your machine.
Optionally, you can also install and use Yarn.

### Running the code in development mode

If you want to contribute to the code, or just run it in development mode, you can simply do so using `yarn` or `npm`:

```
yarn && yarn start
```
or
```
npm install && npm start
```

### Running the tests

There are some tests covering the code (snapshot tests for React components, and some unit tests for the conversion function).

To run the tests, simply run:
```
yarn test
```
or
```
npm test
```
