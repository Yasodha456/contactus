const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', require('./Routes/auth'));
app.use('/api/alt', require('./Routes/authCopy'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
