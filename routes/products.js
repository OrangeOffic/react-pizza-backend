const {Router} = require('express')

const Product = require('../models/product')

const router = Router()

// Получение товаров
router.get('/',async (req, res) => {
    try {

        const products = await Product.find()

        res.body = [...products]

        res.status(201).json(products)

    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Добавление товара
router.post('/', async (req, res) => {

    try {

        let types = []

        if (req.body.type1 === 'on') {
            types.push(0)
        }

        if (req.body.type2 === 'on') {
            types.push(1)
        }

        let sizes = []

        if (req.body.size1 === 'on') {
            sizes.push(26)
        }

        if (req.body.size2 === 'on') {
            sizes.push(30)
        }

        if (req.body.size3 === 'on') {
            sizes.push(40)
        }

        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            types,
            category: req.body.category,
            sizes,
            imageUrl: req.body.imageUrl,
            rating: req.body.rating
        })

        await product.save()

        res.status(201).redirect('/')

    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

router.get('/:id', (req, res) => {

    try {

        const product = Product.findById(req.params.id)

        res.body = product

        res.status(201).json(product)

    } catch (e) {
        console.log(e)
        res.status(500)
    }

})

// Изменение товара
router.put('/:id', (req, res) => {

    try {

    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Удаление товара
router.delete('/:id', (req, res) => {

    try {

    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

module.exports = router
