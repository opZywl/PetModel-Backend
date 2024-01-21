const pool = require('../config/database');

module.exports = (req, res, next) => {
  pool.query('INSERT INTO logs (request_path, request_method) VALUES (?, ?)', [req.path, req.method]);
  next();
};
