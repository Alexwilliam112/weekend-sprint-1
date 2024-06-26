
'use strict'

const express = require('express')
const app = express()
const PORT = 3000

//config
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//routing
app.use(router)

app.listen(PORT, () => {
    console.log('LOCALSERVER STARTED AT PORT ' + PORT);
})
