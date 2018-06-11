const express = require('express')
const app = express()
const path = require('path')
const index = path.join(__dirname, 'index.html')
const css = path.join(__dirname, 'main.css')

app.get('/main.css', (req, res) => res.sendFile(css))
app.get('/', (req, res) => res.sendFile(index))

app.listen(3000, () => console.log('Your website is running on http://localhost:3000'))