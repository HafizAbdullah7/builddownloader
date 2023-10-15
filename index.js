const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(express.static('build'));

app.get('/download', (req, res) => {
  const url = req.query.url;
  ytdl(url, { filter: format => format.container === 'mp4' })
    .pipe(res);
});

const PORT =process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
