const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    `mongodb+srv://ishansenanayaka1:8Vy*WcU39MR_Z#f@cluster0.uyiz7le.mongodb.net/`
  )
  .on("open", () => {
    console.log("MongoDB Connected");
  })
  .on("error", () => {
    console.log("MongoDB Connection error");
  });

module.exports = connection;
