// C:\Users\L\Desktop\Backend\src\app.js

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('O Começo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
