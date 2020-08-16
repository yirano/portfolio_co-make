const router = require("express").Router();
const Issues = require("../models/issues-model");

router.get("/", async (req, res, next) => {
  try {
    const issues = await Issues.getIssues();
    res.status(200).json(issues);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/user", async (req, res, next) => {
  try {
    const issues = await Issues.postedBy(req.params.id);
    res.status(200).json(issues);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/area", async (req, res, next) => {
  try {
    res.status(200).json(await Issues.postedIn(req.params.id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
