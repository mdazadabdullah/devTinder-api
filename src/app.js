const express = require("express");

const app = express();

app.get("/user", ( req, res) => {
  res.send({ firstname: "Abdullah", lastname: "Azad" });
});

app.post("/user", ( req, res) => {
  res.send("Data saving ...");
});

app.delete("/user", ( req, res) => {
  res.send("Data deleting ...");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});