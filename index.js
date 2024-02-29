const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
// const Person = require("./models/person");
const port = 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("server is runnig");
});

app.post("/person", async (req, res) => {
  const data = req.body;
  try {
    const newPerson = new Person(data);

    const response = await newPerson.save();

    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    console.log("response error", error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port  https://localhost:${port}`);
});
