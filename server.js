const express = require("express");
const path = reqruire("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server now listening on ${PORT}. Check localhost.`);
  });
});
