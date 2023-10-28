// 5 buat route Prodi

const express = require('express')
const router = express.Router()
const Prodi = require('../models/Prodi')
const { populate } = require('dotenv')


// post Prodi
router.post('/', async(req, res) => {
    //simpan data dari POSTMAN//Aplikasi 
    const dataProdi = new Prodi({
        nama: req.body.nama,
        fakultas: req.body.fakultas
    })
    try {
        //simpan data ke collection prodi
        const Prodi = await dataProdi.save()
        res.json(Prodi)
    } catch (error) {
        res.json({message: error})
    }
})

// GET Prodi
router.get('/', async(req, res)=> {
    try{
        const prodi = await Prodi.find().populate('fakultas')
        res.json(prodi)
    }catch(error){
        res.json({message: error})
    }
})


module.exports = router