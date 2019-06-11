const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

// Routes
app.use("/", require("./routes/root"));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
