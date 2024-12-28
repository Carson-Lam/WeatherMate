const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
  const city = req.query.city || 'Markham'; // Default to Markham if no city is provided
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}); // End of the app.get method

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); // End of app.listen method
