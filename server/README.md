# MMXIX - Server

## Running the code

You can easily run the code using Docker:
```
docker build -t mmxix/server:latest .
docker run -p 3000:3000 -d mmxix/server
```

Then send a GET request to http://locahost:3000 with a `roman` paramter:
```
curl localhost:3000/?roman=MMXIX
```

> If you have issues running Docker, you can always run the code in development mode using `yarn && yarn start` or `npm is`.

## Developing the code

### Prerequisites

You may need to have Node v12 installed on your machine.
Optionally, you can also install and use Yarn.

### Running the code in development mode

If you want to contribute to the code, or just run it in development mode, you can simply do so using `yarn` or `npm`:

```
yarn && yarn run dev
```
or
```
npm install && npm run dev
```

### Running the tests

There are some tests covering the code.

To run the tests, simply run:
```
yarn test
```
or
```
npm test
```
