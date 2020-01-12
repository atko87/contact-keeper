const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the COntactKeeper API..." })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startet on port ${PORT}`));
