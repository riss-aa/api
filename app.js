// 1. define module
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const cors = require('cors')

// 6. bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

// import routes
const fakultasRoutes = require('./routes/fakultas')
const ProdiRoutes = require('./routes/prodi')
const DosenRoutes = require('./routes/dosen')
const MahasiswaRoutes = require('./routes/mahasiswa')
const authRoutes = require('./routes/auth')
// 8. put routes in express
app.use('/fakultas', fakultasRoutes)
app.use('/prodi', ProdiRoutes)
app.use('/dosen', DosenRoutes)
app.use('/mahasiswa', MahasiswaRoutes)
app.use('/auth', authRoutes)
// 3. connect to database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

// if success
db.once('open', () =>{
    console.log('database is connected');
})
// 2. listen port
app.listen(process.env.PORT, () => {
    console.log(`server pada http://localhost:${process.env.PORT}`);
})