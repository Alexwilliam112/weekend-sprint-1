'use strict'

const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('pages/home.ejs')
})

router.get('/cekstok', (req, res) => {
    res.render('pages/cekstok.ejs')
})

router.get('/inputkaryawan', (req, res) => {
    res.render('pages/inputKaryawan.ejs')
})

router.get('/inputpenjualan', (req, res) => {
    res.render('pages/inputPenjualan.ejs')
})

router.get('/inputstok', (req, res) => {
    res.render('pages/inputStok.ejs')
})

router.get('/listpenjualan', (req, res) => {
    res.render('pages/listPenjualan.ejs')
})

module.exports = router