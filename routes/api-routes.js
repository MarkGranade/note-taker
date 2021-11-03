const fs = require('fs');
const router = require('express').Router();


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    })
});

router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    // newNotes.id = notes.length
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            let notes = JSON.parse(data);
            notes.push(newNote);
            console.log(notes);
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                    if (err) {
                        throw err;
                    } else {
                        res.send(newNote);
                    }
                }
            )
        }
    })
});

module.exports = router;