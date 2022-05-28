const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const apiRouter = require('./routes/apiRouter');
const cors = require('cors');

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to Mongodb!');
    } catch (err) {
        throw err
    }
}
app.use(cors());
const PORT = process.env.PORT || 5500;
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
    connect()
    console.log(`server has started on port ${PORT}!`)
})
