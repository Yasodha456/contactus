const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const authRoutes = require('./Routes/auth');
const authCopyRoutes = require('./Routes/authCopy');

app.use('/api', authRoutes);
app.use('/api/alt', authCopyRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));
