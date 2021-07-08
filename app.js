const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const quotesRouter = require("./routes/quotesRouter.js")
const emailRouter = require("./routes/emailRouter.js")
app.use(express.json());

module.exports = app;

app.use(
    "/api/v1/quotes",
    cors({origin: ["http://localhost:4200","https://rick-van-der-eijk.web.app"]}),
    quotesRouter
  );
 
  app.use(
    "/api/v1/emails",
    cors({origin: ["http://localhost:4200","https://rick-van-der-eijk.web.app"]}),
    emailRouter
  );
  
  