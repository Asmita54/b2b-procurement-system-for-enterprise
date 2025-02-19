const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser'); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" })); 
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`[API Gateway] ${req.method} request to ${req.url}`);
  next();
});


app.post('/api/auth/*', async (req, res) => {
  try {
      const targetUrl = `http://auth-service:5009${req.url}`;
      
      console.log("Forwarding request to:", targetUrl);

    const response = await axios({
      method: req.method, 
      url: targetUrl, 
      headers: req.headers,
      data: req.body, 
    });

    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error forwarding request:", error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});
