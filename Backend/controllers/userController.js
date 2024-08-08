const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const chkUser = await User.findOne({ email });

  if (chkUser) {
    res.status(400);
    throw new Error("User already exists...");
  }

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields...");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        name,
        email,
        password: hashedPass,
      });
      res.send(newUser);
    } catch (error) {}
  }
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields...");
  } else {
    try {
      const findUser = await User.findOne({ email });
      if (findUser) {
        const passMatched = await bcrypt.compare(password, findUser.password);
        if (!passMatched) {
          res.status(401);
          throw new Error("Incorrect Password");
        } else {
          res.send(findUser);
        }
      } else {
        res.status(404);
        throw new Error("Incorrect email...");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
});

const findMe = AsyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const foundMe = await User.findOne({_id: user_id});

  if (foundMe) {
      res.send(foundMe);
  }
  else {
      res.status(404);
      throw new Error("User not found...");
  }
});

module.exports = {
  registerUser,
  loginUser,
  findMe,
};
