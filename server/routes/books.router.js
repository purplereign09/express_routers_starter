const express = require('express');
const bookList = [];

//Make a router
//Router is an app inside of an app
const router = express.Router();

//We can use a router just like we use an app
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

//Export our books router
module.exports = router;