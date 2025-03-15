// import express from "express";
let express = require('express');
// import cors from "cors";
const cors = require('cors');
import router from "./routes/router";
// const router = require('./routes/router');
const bodyParser = require('body-parser');
const app = express();
import {config} from "./config/appconfig"
const port = config.port;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/sendmail',router)

app.listen(port, () => {    
  console.log(`Server is running on port ${port}`);
}
);


