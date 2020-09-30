const express = require('express');
const cors = require('cors');
const { networkInterfaces } = require('os');

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const nets = networkInterfaces();
  const results = Object.create(null);

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }

        results[name].push(net.address);
      }
    }
  }

  res.json({
    time: new Date(),
    results,
  });
});

app.listen(80, () => console.log('Server is running on port 80'));
