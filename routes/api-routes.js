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
    
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            let notes = JSON.parse(data);
            // generate unique id based on length of array
            newNote.id = notes.length.toString();
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