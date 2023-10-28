// 4 schema dosen
const mongoose = require('mongoose')
const MahasiswaSchema = mongoose.Schema({
    npm:{
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jk: {
        type: String,
        required: true
    },
    tanggal:    {
        type: Date,
        required: true
    },
    Prodi:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodi"
    },
    dosen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dosen"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)