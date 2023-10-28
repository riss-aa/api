// 5 buat route dosen

const express = require('express')
const router = express.Router()
const Dosen = require('../models/Dosen')
const { populate } = require('dotenv')


// post Prodi
router.post('/', async(req, res) => {
    //simpan data dari POSTMAN//Aplikasi 
    const dataDosen = new Dosen({
        kode: req.body.kode,
        nama: req.body.nama,
        prodi: req.body.prodi
    })
    try {
        //simpan data ke collection Dosen
        const dosen = await dataDosen.save()
        res.json(Dosen)
    } catch (error) {
        res.json({message: error})
    }
})

// GET Dosen
router.get('/', async(req, res)=> {
    try{
        const dosen = await Dosen.find().populate('Prodi')
        res.json(dosen)
    }catch(error){
        res.json({message: error})
    }
})


module.exports = router