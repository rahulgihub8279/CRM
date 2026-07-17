import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "authentication required" });
    } 
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).json({ message: "authentication faliure" });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (err) {
    console.log(err.message);
  }
};

export default isAuth;
