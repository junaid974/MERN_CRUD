const express = require("express");
const router = express.Router();

let recipeSchema = require("../Models/Recipe");

router.route("/create-recipe").post(async (req, res, next) => {
  await recipeSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/").get(async (req, res, next) => {
  await recipeSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/delete-recipe/:id").delete(async (req, res, next) => {
  await recipeSchema
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ msg: "Data successfully updated." });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get-recipe/:id").get(async (req, res, next) => {
  await recipeSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/update-recipe/:id").put(async (req, res, next) => {
  await recipeSchema
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => {
      res.json({ data: result, msg: "Data successfully updated." });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
