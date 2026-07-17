import inquiryModel from "../model/inquiryModel.js";

//* POST /api/inquiry – Save a new inquiry.
export const createInquiry = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      industry,
      companySize,
      message,
    } = req.body;
    if (
      !fullName ||
      !companyName ||
      !email ||
      !phone ||
      !country ||
      !industry ||
      !companySize ||
      !message
    ) {
      return res.status(400).json({ message: "all field are required" });
    }
    const newInquiry = await inquiryModel.create({
      fullName,
      companyName,
      email,
      phone,
      country,
      industry,
      companySize,
      message,
    });
    return res.status(201).json({ success: true, newInquiry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//* GET /api/inquiry – Retrieve all inquiries.
export const getAllInquiry = async (req, res) => {
  try {
    const allInquiry = await inquiryModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, allInquiry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//* DELETE /api/inquiry/:id – Delete an inquiry.
export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await inquiryModel.findById(id);
    if (!existing) {
      return res.status(404).json({ message: "inquiry not found" });
    }
    await inquiryModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "inquiry deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
