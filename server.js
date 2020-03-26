const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const movieRouter = require('./routes/movie-routes');
const port = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/api/getList', (req, res) => {
    var list = {data: ["item1", "item2", "item3"]};
    res.json(list);
    console.log('Sent list of items');
});

app.use('/api', movieRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))