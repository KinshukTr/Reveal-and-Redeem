// middleware/authenticate.js
const jwt = require('jsonwebtoken');  
const dotenv = require('dotenv');  
dotenv.config();  
  
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header is missing or invalid' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token string

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.log('Error:', err);
      return res.status(403).json({ message: 'Authentication error' });
    }

    req.user = { userId: decodedToken.userId };
    next();
  });
};

module.exports = authenticate;


