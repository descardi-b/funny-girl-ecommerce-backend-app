const router = require('express').Router();
const { Tag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
    Tag.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// CREATE a new tag
router.post('/', (req, res) => {
    Tag.create({
        // tag model here
        tag_name: req.body.tag_name
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// READ a specific product
router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No tag with this id number found.' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DESTROY a specific tag
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No tag with this id number found.' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;