const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 4000;
const filePath = "./data.json";

app.use(express.json());

async function readData() {
  return JSON.parse(await fs.readFile(filePath, "utf-8"));
}

async function writeData(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

app.get('/', (req, res) => {
  res.send('Hello, Dear world!');
});


app.get("/data", async (req, res) => {
  try {
    const data = await readData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Error reading data");
  }
});

app.post("/data", async (req, res) => {
  try {
    const currectData = await readData();
    const newData = { ...currectData, ...req.body };
    await writeData(newData);
    res.status(200).json("Data Updated Sucessfully");
  } catch (error) {
    res.status(500).json("Error Updating Data");
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`port is listening on ${port}`);
});
