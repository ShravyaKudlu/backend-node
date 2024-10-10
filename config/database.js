const mongoose = require("mongoose");

const { DB_CON_STRING } = process.env;

module.exports = () => {
  mongoose
    .connect(DB_CON_STRING)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log(err.message));
};
