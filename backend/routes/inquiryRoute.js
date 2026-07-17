import express from "express";
import isAuth from "../middleware/authenticate.js";
import {
  createInquiry,
  deleteInquiry,
  getAllInquiry,
} from "../controller/inquiryController.js";
const router = express.Router();

router.post("/create", isAuth, createInquiry);
router.get("/get", isAuth, getAllInquiry);
router.delete("/delete/:id", isAuth, deleteInquiry);


export default router;
