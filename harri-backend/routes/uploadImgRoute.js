// routes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const uploadController = require("../controller/uploadController");
const Planks = require("../models/Planks");
const customPhoto = require("../models/CustomPhoto");
// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

// Route for photo upload
router.post("/CustomImage", upload.single("photo"), uploadController);
// create a router.get for /status and fetch the status from the  customPhoto model where every docment have the status object and send the status as response
router.get("/status", async (req, res) => {
  const status = await customPhoto.find({}).select("status");
  res.send(status);
});

// now create a post route for updating the status of  customPhoto model where in req we will get the id and who's updating if it is admin  it will next to the middleware and if it is customer it will send the status as pending
router.post("/updateStatus", async (req, res, next) => {
  const { id, status, userType } = req.body;
  const data = await customPhoto.findById(id);

  // Check if user is admin by their admin id and query throuh the database of admin model
  

  if (userType === "admin") {


    data.status = status;
    await data.save();
    res.send({ message: "Status updated successfully!" });
  } else {
    res.send({ message: "Status can only be updated by admin!" });
  }
});
// Error handling middleware
router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).send({
    status: "error",
    message: err.message,
  });
});

module.exports = router;
