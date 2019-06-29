const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(port, () => console.log(`server is up on ${port}`))