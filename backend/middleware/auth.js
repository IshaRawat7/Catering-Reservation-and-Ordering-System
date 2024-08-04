import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized! Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
    
    // Check if the token is for an admin
    if (token_decode.role && token_decode.role === 'admin') {
      req.body.adminId = token_decode.id;
      req.body.isAdmin = true;
    } else {
      req.body.isAdmin = false;
    }

  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: "Token expired. Please log in again." });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};
export default authMiddleware;
