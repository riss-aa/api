// 5 buat route dosen

const express = require('express')
const router = express.Router()
const { populate } = require('dotenv')
const Mahasiswa = require('../models/Mahasiswa')


// post mahasiswa
router.post('/', async(req, res) => {
    //simpan data dari POSTMAN//Aplikasi 
    const dataMahasiswa = new Mahasiswa({
        npm: req.body.npm,
        nama: req.body.nama,
        jk: req.body.jk,
        tanggal: req.body.tanggal,
        prodi: req.body.prodi,
        dosen: req.body.dosen
    })
    try {
        //simpan data ke collection mahasiswa
        const Mahasiswa = await dataMahasiswa.save()
        res.json(Mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

// GET mahasiswa
router.get('/', async(req, res)=> {
    try{
        const mahasiswa = await Mahasiswa.find().populate('Prodi').populate('dosen')
        res.json(mahasiswa)
    }catch(error){
        res.json({message: error})
    }
})

//delete mahasiswa
router.delete('/:ID', async(req, res)=> {
    try{
        //delete
        const mahasiswa = await Mahasiswa.deleteOne({
            _id: req.params.ID
        })
        res.json(mahasiswa)
    }catch(error){
        res.json({
            message: error
        })
    }
})

// Update mahasiswa
router.put('/:ID', async(req, res) => {
    //simpan data dari POSTMAN//Aplikasi 
    const dataMahasiswa = {
        npm: req.body.npm,
        nama: req.body.nama,
        jk: req.body.jk,
        tanggal: req.body.tanggal,
        prodi: req.body.prodi,
        dosen: req.body.dosen
    }
    try {
        //simpan data ke collection Dosen
        const mahasiswa = await Mahasiswa.updateOne({
            _id: req.params.ID
        },dataMahasiswa)
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})
module.exports = router