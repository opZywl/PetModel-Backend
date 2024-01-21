const express = require('express');
const petRouter = require('./router/petRouter');
const authRouter = require('./router/authRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Rota Publica
app.use('/auth', authRouter);

// Rotas autenticadas
app.use(authMiddleware);
app.use('/pets', petRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
