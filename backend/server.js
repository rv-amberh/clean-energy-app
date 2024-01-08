const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const PORT = 4000;
const app = express();
const data = require("./caiso_carbon_intensity.json");
const dataTwo = require("./caiso_carbon_intensity.json");

const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const updatedData = {};
const heatmapData = {};

for(obj of data.data) {
  const newDate = new Date(obj.datetime);
  const y = newDate.getUTCFullYear();
  const month = newDate.getUTCMonth();
  const h = newDate.getUTCHours();
  const c = obj.carbon_intensity;
  const day = newDate.getUTCDate();
  const date = Date.UTC(y, month, day);


  if(heatmapData[y]) heatmapData[y].push([date, h, c]);
  else heatmapData[y] = [[date, h, c]];
}

// console.log(heatmapData, "heatMap")
//make data structure to group by year
//on the front end make option that filters by all years range

const average_holder = {};

for(obj of data.data) {
   const updDate = new Date(obj.datetime);
   const year = updDate.getUTCFullYear();
   const hour = `${updDate.getUTCHours() + 1}:00` 
   console.log(hour, "hosue")
   const formatedDate = months[updDate.getMonth()] + ' ' + `${updDate.getUTCDate()}` + ', ' + updDate.getFullYear();
   obj.datetime = formatedDate + ' ' + hour;

   average_holder[formatedDate] ? average_holder[formatedDate].push(obj.carbon_intensity) : average_holder[formatedDate] = [obj.carbon_intensity];
   
  if(updatedData[year]) {
    updatedData[year][obj.datetime] = obj.carbon_intensity;
  } else {
    updatedData[year] = {[obj.datetime] : obj.carbon_intensity};
  };
}

Object.keys(average_holder).forEach(key => {
    const value = average_holder[key];
    const average = value.reduce((a, b) => a + b) / value.length;
    average_holder[key] = Math.round(average);
  });

  updatedData['all'] = average_holder;
  

app.use(cors());
  const corsOptions = {
      origin: "http://localhost:3000"
  };


app.get('/data', cors(corsOptions), async (req, res) => { 
     res.json(updatedData);
});

app.get('/heat', cors(corsOptions), async (req, res) => { 
  res.json(heatmapData);
});

app.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});
