const express = require('express');

const router = express.Router();

const { body, validationResult } = require("express-validator");

const Note = require('../models/Note');

var fetchuser = require('../middelware/fetchuser');


//  ROUTE 1 : Get all the Notes using: GET "/api/notes/fetchallnotes". login req
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//  ROUTE 2 : Add a new Note using: POST "/api/notes/addnote". login req
router.post('/addnote', fetchuser, [
    body('consignee', 'Enter a valid consignee').isLength({ min: 3 }),
    body('document_number', 'document_number must be atleast 4 character').isLength({ min: 4 }),
    body('consignor', 'Enter a valid consignor').isLength({ min: 3 }),
    body('city', 'Enter a valid city').isLength({ min: 3 }),], async (req, res) => {
        try {
            const { consignee, document_number, consignor, city, weight, total } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const notes = new Note({
                consignee, document_number, consignor, city, weight, total, user: req.user.id
            })
            const savedNote = await notes.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

//  ROUTE 3 : Add a new Note using: PUT "/api/notes/update". login req
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { consignee, document_number, consignor, city, weight, total } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (consignee) { newNote.consignee = consignee };
        if (document_number) { newNote.document_number = document_number };
        if (consignor) { newNote.consignor = consignor };
        if (city) { newNote.city = city };
        if (weight) { newNote.weight = weight };
        if (total) { newNote.total = total };

        // Find notes to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user own this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


//  ROUTE 3 : delete a Note using: DELETE "/api/notes/deletenote". login req
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find notes to be delete and deleted it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user own this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


module.exports = router