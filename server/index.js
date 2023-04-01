const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 3005;
const db = require("./models");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const postRouter = require("./routes/Products");
app.use("/products", postRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
