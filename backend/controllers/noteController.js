const Note = require("../models/Note")


// Create Note
exports.createNote = async (req, res) => {

    try {

        const note = new Note({
            ...req.body,
            userId: req.user
        })

        const savedNote = await note.save()

        res.json(savedNote)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


// Get All Notes (only user's notes)
exports.getNotes = async (req, res) => {

    try {

        const notes = await Note.find({ userId: req.user }).sort({ createdAt: -1 })

        res.json(notes)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


// Get Single Note
exports.getNote = async (req, res) => {

    try {

        const note = await Note.findOne({
            _id: req.params.id,
            userId: req.user
        })

        if (!note)
            return res.status(404).json({ message: "Note not found" })

        res.json(note)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


// Update Note
exports.updateNote = async (req, res) => {

    try {

        const note = await Note.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user
            },
            req.body,
            { new: true }
        )

        res.json(note)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


// Delete Note
exports.deleteNote = async (req, res) => {

    try {

        await Note.findOneAndDelete({
            _id: req.params.id,
            userId: req.user
        })

        res.json({ message: "Note deleted" })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}
