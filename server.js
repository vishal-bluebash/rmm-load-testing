const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'events.json');

app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const eventData = req.body;

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        let events = [];
        if (!err) {
            events = JSON.parse(data);
        }
        events.push(eventData);

        fs.writeFile(FILE_PATH, JSON.stringify(events, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to file');
            }
            res.status(200).send('Event saved');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

