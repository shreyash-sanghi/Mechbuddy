


const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  
  // Remove "Bearer " prefix if present
  const cleanToken = token.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(cleanToken, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    return res.status(401).json({ error: 'Failed to authenticate token', details: error.message });
  }
  
};

module.exports = verifyToken;


// const jwt = require('jsonwebtoken');
// const JWT_SECRET = "mysecret";

// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ error: 'Token not found' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (error) {
//     console.error('JWT Verification Error:', error.message);

//     if (error.name === 'JsonWebTokenError') {
//       return res.status(401).json({ error: 'Malformed token', details: error.message });
//     }

//     return res.status(401).json({ error: 'Failed to authenticate token', details: error.message });
//   }
// };

// module.exports = verifyToken;