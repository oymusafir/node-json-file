const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
const filePath = "./data.json";

app.use(express.json());

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get('/', (req, res) => {
  res.send('Hello, Dear world!');
});


app.get("/data", (req, res) => {
  try {
    const data = readData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Error reading data");
  }
});

app.post("/data", (req, res) => {
  try {
    const currectData = readData();
    const newData = { ...currectData, ...req.body };
    writeData(newData);
    res.status(200).json("Data Updated Sucessfully");
  } catch (error) {
    res.status(500).json("Error Updating Data");
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`port is listening on ${port}`);
});
