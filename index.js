const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const productRoutes = require('./routes/products')

const app = express()

const PORT = process.env.PORT || 3000

const password = 'Thab8zVuBfRgqN4F'


app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/products', productRoutes)

app.use((req, res, next) => {
    res.sendFile('/index.html')
})

const start = async () => {
    try {
        const url = `mongodb+srv://Vladimir:${password}@react-pizza.yzbwf.mongodb.net/store-pizza?retryWrites=true&w=majority`
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

