const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

let cities = [
  { name: "Yapkashnagar", distance: 60 },
  { name: "Lihaspur", distance: 50 },
  { name: "Narmis City", distance: 40 },
  { name: "Shekharvati", distance: 30 },
  { name: "Nuravgram", distance: 20 },
];

let vehicles = [
  { kind: "EV Bike", range: 60, count: 2 },
  { kind: "EV Car", range: 100, count: 1 },
  { kind: "EV SUV", range: 120, count: 1 },
];

let copChoices = [
  { copName: "Cop1", vehicle: null, city: null },
  { copName: "Cop2", vehicle: null, city: null },
  { copName: "Cop3", vehicle: null, city: null },
];

app.use(bodyParser.json());
app.use(cors());

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/copChoices", (req, res) => {
  res.json(copChoices);
});

app.post("/capture", (req, res) => {
  const { copChoices } = req.body;
  const fugitiveLocation = simulateFugitiveLocation();
  const captureStatus = captureFugitive(copChoices, fugitiveLocation);
  res.json({ captureStatus });
});

const simulateFugitiveLocation = () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
};

const captureFugitive = (copChoices, fugitiveLocation) => {
  for (const cop of copChoices) {
    console.log("cop", cop);
    if (cop.city === fugitiveLocation.name && cop.vehicle) {
      return `Fugitive was captured by ${cop?.copName}`;
    }
  }
  return "Fugitive was not captured";
};

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
