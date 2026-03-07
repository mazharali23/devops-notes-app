require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
const noteRoutes = require("./routes/noteRoutes")
const authRoutes = require("./routes/auth")

app.use("/api", noteRoutes)
app.use("/api/auth", authRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

// server start
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
