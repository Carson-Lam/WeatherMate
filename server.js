const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const port = process.env.PORT || 5000;
const apiKey = process.env.OPENWEATHER_API_KEY;

app.get('/weather', async (req, res) => {
  const city = req.query.city || 'Toronto';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching weather data'
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on ${process.env.PORT ? `http://localhost:${port}` : 'Live Render URL'}`);
});