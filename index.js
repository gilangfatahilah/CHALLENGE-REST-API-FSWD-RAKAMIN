const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 8083 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Response success" });
});

app.get("/users", (req, res) => {
  res.json({ id: 1, name: "Gilang" });
});

app.post("/users", (req, res) => {
  res.json({
    message: "Response success",
    data: [{ id: 1, name: "gilang" }],
  });
});

app.put("/users/:id", (req, res) => {
  res.json({
    message: "update success",
    data: [{ id: 1, name: "merlin" }],
  });
});

app.delete("/users/:id", (req, res) => {
  res.json({
    message: "delete success",
    data: [{ id: 1, name: "merlin" }],
  });
});

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
