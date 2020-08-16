const router = require("express").Router();
const Users = require("../models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
  const { username, password, firstName, lastName, city, state } = req.body;
  try {
    const user = await Users.searchUser(username).first();
    console.log(user);
    if (user) {
      res.status(409).json({ message: "Username already taken" });
    }
    const newUser = await Users.registerUser({
      username,
      password: await bcrypt.hash(password, 12),
      firstName,
      lastName,
      city,
      state,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.searchUser(username).first();

    if (!user) {
      res.status(401).json({ message: "Invalid Credentials" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      res.status(401).json({ message: "Invalid Credentials" });
    }
    const payload = {
      id: user.id,
      username,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    res.cookie("token", token);
    process.env.TOKEN = token;
    res.status(200).json({ ...payload, token });
  } catch (error) {
    next(error);
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    res.cookie("token", "");
    process.env.TOKEN = "";
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
