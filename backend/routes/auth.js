const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

const router = express.Router()

// Signup
router.post("/signup", async (req, res) => {

  const { name, email, password } = req.body

  try {

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    await user.save()

    res.json({ message: "User created" })

  } catch (err) {

    res.status(500).json(err)

  }

})


// Login
router.post("/login", async (req, res) => {

  const { email, password } = req.body

  try {

    const user = await User.findOne({ email })

    if (!user)
      return res.status(400).json({ message: "User not found" })

    const valid = await bcrypt.compare(password, user.password)

    if (!valid)
      return res.status(400).json({ message: "Invalid password" })

    const token = jwt.sign(

      { id: user._id },

      "devops-secret",

      { expiresIn: "1d" }

    )

    res.json({ token })

  } catch (err) {

    res.status(500).json(err)

  }

})

module.exports = router
