const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")

const {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
} = require("../controllers/noteController")

// Protected routes

router.post("/notes", auth, createNote)
router.get("/notes", auth, getNotes)
router.get("/notes/:id", auth, getNote)
router.put("/notes/:id", auth, updateNote)
router.delete("/notes/:id", auth, deleteNote)

module.exports = router
