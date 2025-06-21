const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // allow frontend to access backend

app.get('/scrape', async (req, res) => {
  try {
    const response = await axios.get('https://example.com'); // <- replace with your target site
    const $ = cheerio.load(response.data);

    // Example: get all headlines
    const results = [];
    $('h2').each((i, elem) => {
      results.push($(elem).text());
    });

    res.json(results);
  } catch (error) {
    res.status(500).send('Error scraping site');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});