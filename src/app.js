// C:\Users\L\Desktop\Backend\src\app.js

const express = require('express');
const pool = require('./config/database');

const app = express();
app.use(express.json());

app.get('/pets', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pets');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os pets');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
