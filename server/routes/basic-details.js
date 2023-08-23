const router = require("express").Router();
const BasicDetails = require("../models/basic-details");

// Get all the basic details
router.get("/", async (req, res) => {
  try {
    const basicDetails = await BasicDetails.find();
    res.send(basicDetails);
  } catch (err) {
    res.send({ message: err });
  }
});

// Get a specific basic detail
router.get("/:id", async (req, res) => {
  try {
    const basicDetail = await BasicDetails.findById(req.params.id);
    res.send(basicDetail);
  } catch (err) {
    res.send({ message: err });
  }
});

// Add a basic detail
router.post("/", async (req, res) => {
  const basicDetail = new BasicDetails({
    firstName: req.body.name,
    lastName: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    pincode: req.body.pincode,
  });

  try {
    const savedBasicDetail = await basicDetail.save();
    res.send(savedBasicDetail);
    console.log(savedBasicDetail._id);
  } catch (err) {
    res.send({ message: err });
  }
});

// Update a basic detail

router.patch("/:id", async (req, res) => {
  try {
    const updatedBasicDetail = await BasicDetails.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.name,
          lastName: req.body.name,
          email: req.body.email,
          mobile: req.body.mobile,
          address: req.body.address,
          pincode: req.body.pincode,
        },
      }
    );
    res.send(updatedBasicDetail);
  } catch (err) {
    res.send({ message: err });
  }
});

// Delete a basic detail

router.delete("/:id", async (req, res) => {
  try {
    const removedBasicDetail = await BasicDetails.remove({
      _id: req.params.id,
    });
    res.send(removedBasicDetail);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;