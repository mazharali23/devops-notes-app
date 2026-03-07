const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const User = require("../models/User")

const router = express.Router()

// forgot password
router.post("/forgot-password", async (req, res) => {

try{

const { email } = req.body

const user = await User.findOne({ email })

if(!user){
return res.status(404).json({ message: "Email not registered" })
}

const resetToken = crypto.randomBytes(32).toString("hex")

user.resetToken = resetToken
user.resetTokenExpire = Date.now() + 3600000

await user.save()

res.json({
message:"Reset token generated",
token: resetToken
})

}catch(err){

res.status(500).json({message:"Server error"})

}

})

// reset-password
router.post("/reset-password/:token", async (req,res)=>{

try{

const { password } = req.body

const user = await User.findOne({
resetToken:req.params.token,
resetTokenExpire:{ $gt: Date.now() }
})

if(!user){
return res.status(400).json({
message:"Invalid or expired token"
})
}

const bcrypt = require("bcryptjs")

const salt = await bcrypt.genSalt(10)
user.password = await bcrypt.hash(password,salt)

user.resetToken = undefined
user.resetTokenExpire = undefined

await user.save()

res.json({message:"Password updated successfully"})

}catch(err){

res.status(500).json({message:"Server error"})

}

})

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
