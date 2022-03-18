const router = require('express').Router();
const { Category } = require('../../models');

// GET all categories
router.get('/', (req, res) => {
    Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// CREATE a new category
router.post('/', (req, res) => {
    Category.create({
        // Category model here
        category_name: req.body.category_name
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// READ a specific category
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No category with this id number found.' });
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DESTROY a category
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No category with this id number found' })
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;