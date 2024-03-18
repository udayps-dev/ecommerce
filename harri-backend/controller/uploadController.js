const customPhoto = require("../models/CustomPhoto");
const Catagory = require("../models/Category");

const uploadController = async (req, res, next) => {
  const photoPath = req.files.map(file => file.filename); // Simplified

  // const data = new customPhoto({
  //   userType: req.body.userType,
  //   categoryType: req.body.categoryType,
  //   subcategory: req.body.subcategory,
  //   photo: photoPath,
  //   size: req.body.size,
  //   color: req.body.color,
  //   letters: req.body.letters,
  //   orderID: req.body.orderID,
  //   userID: req.body.userID,
  //   status: req.body.status,
  //   description: req.body.description,
  // });

  try {
    // await data.save();
    res.send({
      status: "success",
      message: "Files uploaded successfully",
      files: photoPath,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error,
      message: "Internal server error",
    });
  }
};

module.exports = uploadController;
