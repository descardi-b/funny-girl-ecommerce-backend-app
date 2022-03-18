const router = require('express').Router();
const { Product } = require('../../models');

// GET all products
router.get('/', (req, res) => {
    Product.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// CREATE a new product
router.post('/', (req, res) => {
    Product.create({
        // product model here
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// READ a specific product
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No product with this id number found.' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DESTROY a specific product
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No product with this id number found.' });
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