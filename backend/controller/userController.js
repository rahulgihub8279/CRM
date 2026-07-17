import genToken from "../config/token.js";
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "all feilds are required" });
    }
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "pasword must be 8 chars" });
    }
    let hashpass = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashpass,
      role,
    });
    const token = genToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "pasword not match" });
    }
    const token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json({ message: "logout successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
