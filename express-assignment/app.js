const express = require("express");

const app = express();

// Start - This code funnels the request through 2 middleware functions
app.use((req, res, next) => {
  console.log("What a great first call!");
  res.send("<h1>What a great first call!</h1>");
  next();
});

app.use((req, res, next) => {
  console.log("What a great second!");
  res.send("<h1>What a great second call!</h1>");
});
app.listen(3000);
// End - This code funnels the request through 2 middleware functions

// Start - Handling two routers
app.use("/first-route", (req, res, next) => {
  res.send("<h1>What a great first call!</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>What a great second call!</h1>");
});
app.listen(3000);
// End - Handling two routers

const express = require("express");

const routes = express.Router();

routes.get(() => {});
routes.post(() => {});
routes.delete(() => {});
routes.put(() => {});

module.exports = routes;
