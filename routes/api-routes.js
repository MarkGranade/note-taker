const fs = require('fs');
const cuid = require('cuid');
const router = require('express').Router();

// function createNewNote(body, notesArray) {
//     const
// }

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
    // console.log('testing id creation: ', cuid());
    // newNotes.id = notes.push(cuid());
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