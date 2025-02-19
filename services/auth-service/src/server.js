const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" })); // Increase limit
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use((req, res, next) => {
  console.log(`[auth service] ${req.method} request to ${req.url}`);
  next();
});


app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log(`✅ Auth Service running on port ${PORT}`);
});