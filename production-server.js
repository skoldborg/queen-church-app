require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api', (req, res) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || '';

    if (apiKey !== '') {
        res.send(apiKey);
    } else {
        res.send('No key found');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => 
    console.log(`Express server listening on port ${PORT}`)
);

