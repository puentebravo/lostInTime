// @ts-check

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
// const config = require("./config/config");
// const { Sequelize } = require("sequelize");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/public"));
}

// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     dialect: "mysql",
//   }
// );

// try {
//   sequelize.authenticate();
//   console.log("Connection Online.");
// } catch (error) {
//   console.log(`Connection failed on: ${error}`);
// }

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  console.log("DB Synced.")
  app.listen(PORT, () => {
    console.log(`Server now listening on ${PORT}. Check localhost.`, PORT);
  });
});
